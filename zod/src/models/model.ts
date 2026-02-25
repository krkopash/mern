import mongoose, { Document } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  age?: number;
  loginAttempts: number;
  lockUntil?: string; 
  createdAt: string;
  updatedAt: string;
  comparePassword(enteredPassword: string): Promise<boolean>;
  isLocked(): boolean;
  incrementLoginAttempts(): Promise<void>;
}

const getISTTime = () => {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  }).format(new Date());
};

const parseISTToDate = (istString: string) => {
  const [datePart, timePart] = istString.split(", ");
  const [day, month, year] = datePart.split("/");
  const [time, modifier] = timePart.split(" ");
  let [hours, minutes, seconds] = time.split(":").map(Number);

  if (modifier === "pm" && hours !== 12) hours += 12;
  if (modifier === "am" && hours === 12) hours = 0;

  return new Date( Number(year), Number(month)-1, Number(day),hours,minutes, seconds);
};

const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number },
    loginAttempts: { type: Number, default: 0 },
    lockUntil: { type: String }, 
    createdAt: { type: String },
    updatedAt: { type: String }
  },
  { timestamps: false }
);

userSchema.pre("save", async function () {
  const doc = this as mongoose.Document & IUser;

  if (!doc.createdAt) {
    doc.createdAt = getISTTime();
  }
  doc.updatedAt = getISTTime();

  if (!doc.isModified("password")) return;
  doc.password = await bcrypt.hash(doc.password, 2);
});
userSchema.methods.comparePassword = async function (
  enteredPassword: string
) {
  return bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.isLocked = function () {
  if (!this.lockUntil) return false;

  const lockDate = parseISTToDate(this.lockUntil);
  return lockDate > new Date();
};

userSchema.methods.incrementLoginAttempts = async function () {
  const now = new Date();

  if (this.lockUntil) {
    const lockDate = parseISTToDate(this.lockUntil);
    if (lockDate < now) {
      this.loginAttempts = 1;
      this.lockUntil = undefined;
    } else {
      this.loginAttempts += 1;
    }
  } else {
    this.loginAttempts += 1;
  }

  if (this.loginAttempts >= 5) {
    const unlockTime = new Date(Date.now() + 15 * 60 * 1000);

    this.lockUntil = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    }).format(unlockTime);
  }

  await this.save();
};

const User = mongoose.model<IUser>("zod", userSchema);

export default User;