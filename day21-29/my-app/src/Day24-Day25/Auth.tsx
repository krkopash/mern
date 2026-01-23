import { useState } from "react";

type FormData = {
    email: string;
    password: string;
    fname: string;
    lname: string;
};

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    fname:"",
    lname:"",
  });

  const [errors, setErrors] = useState<FormData>({
    email: "",
    password: "",
    fname:"",
    lname:"",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = (): boolean =>{
    let valid = true;
    const newErrors: FormData = { email: "", password: "", fname:"", lname:""};

    if(!formData.email.includes("@")){
    newErrors.email = "enter valid email address";
    valid = false;

    if(formData.fname.length<3){
      newErrors.fname="enter valid name";
      valid= false;
    }
  }

  if(formData.password.length<8){
    newErrors.password = "Please enter password with more than 8 character";
    valid = false;
  }

  setErrors(newErrors);
  return valid;

  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert(isLogin ? "Login Successful ✅" : "Signup Successful 🎉");
      setFormData({ email: "", password: "" , fname: "", lname: ""});
    }
  };

  return(
    <div className="page">
      <h2>{isLogin ? "Login" : "Signup"}</h2>

      <div className="auth-card">
        <form onSubmit={handleSubmit}>

       

            
            <label>First Name:</label>
          <input type="text" name="fname" value={formData.fname} onChange={handleChange} placeholder="first name" required/>

          <label> Last Name:</label>
          <input type="text" name="lname" value={formData.lname} onChange={handleChange} placeholder="Last name" required/>

          <label>Email: </label>
          <input type="text" placeholder="abc@gmail.com" name="email" value={formData.email} onChange={handleChange} required/>
          {errors.email && <span className="error">{errors.email}</span>}

          <label>Password: </label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="**********" required/>
          {errors.password && (
            <span className="error">{errors.password}</span>
          )}

          <label>Domain:</label>
          <select >
            <option className="op">Web</option>
            <option className="op">App</option>
            <option className="op">AI & ML</option>
          </select>

         <label>Select your favorite color:</label>
         <input type="color" id="favcolor" name="favcolor" required></input>

         <label>Dateof Birthday:</label>
         <input type="date" id="birthday" name="birthday" required></input>
         <label>Select a Time:</label>
         <input type="time" id="set" name="set" required></input>

         <label>Add your homepage:</label>
         <input type="url" id="url" name="url" placeholder="www.google.com" required></input>

         <label>Select Your available week of month:</label>
         <input type="week" id="week" name="week" required></input>
         
         <label> Select File:</label>
         <input type="file" id="myfile" name="myfile" required></input>

         <label>Rate your skills:</label>
         <input type="number" id="rate" name="rate" min={1} max={5} required></input>


          <label>Any suggestion:</label>
          <textarea name="message" rows={5} cols={5} placeholder="Start From Here">
          </textarea>
          <button type="submit">
            {isLogin ? "Login" : "Signup"}
          </button>
          
        </form>

        <p className="toggle-text">
          {isLogin ? "New user?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Signup" : " Login"}
          </span>
        </p>
      </div>
    </div>
  )


}

export default Auth;