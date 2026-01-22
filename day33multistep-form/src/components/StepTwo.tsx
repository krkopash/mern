import type { FormData } from "../types/FormTypes";

type Props = {
  data: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  next: () => void;
  back: () => void;
};

const StepTwo = ({ data, onChange, next, back }: Props) => {
  const isValid = data.password.length >= 6 && Number(data.age) >= 18 && data.password.includes("#");

  return (
    <div className="container">
      <h2>Step 2: Security</h2>
      <p>Enter Your Password:</p>
      <input
        name="password"
        type="password"
        placeholder="Password (min 6 chars and include #)"
        value={data.password}
        onChange={onChange}
      />
      <p>Enter your age:</p>
      <input
        name="age"
        placeholder="Age (must be 18+)"
        value={data.age}
        onChange={onChange}
      />
      <p>Write city name:</p>
      <input 
      name="city"
      placeholder="Your Countty???"
      value={data.city}
      onChange={onChange}
      />

      <div className="actions">
        <button onClick={back}>◀ Previous</button>
        <button disabled={!isValid} onClick={next}>
          Next ▶
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
