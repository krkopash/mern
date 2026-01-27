import { useState } from "react";
import "./router.css";
type FormData = {
    email: string;
    password: string;
    name: string;
};

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    name:"",
  });

  const [errors, setErrors] = useState<FormData>({
    email: "",
    password: "",
    name:"",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = (): boolean =>{
    let valid = true;
    const newErrors: FormData = { email: "", password: "", name:""};

    if(!formData.email.includes("@")){
    newErrors.email = "enter valid email address";
    valid = false;

    if(formData.name.length>3){
      newErrors.name="enter valid name";
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
      alert(isLogin ? "Login Successful!!! ✔" : "Signup Successful!!! 💥");
      setFormData({ email: "", password: "" , name: ""});
    }
  };

  return(
    <div className="page">
      <h2>{isLogin ? "Login" : "Signup"}</h2>

      <div className="auth-card">
        <form onSubmit={handleSubmit}>

       

            
            <label>User Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="User name" required/>

          <label>Email: </label>
          <input type="text" placeholder="abc@gmail.com" name="email" value={formData.email} onChange={handleChange} required/>
          {errors.email && <span className="error">{errors.email}</span>}

          <label>Password: </label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="**********" required/>
          {errors.password && (
            <span className="error">{errors.password}</span>
          )} 

          <button type="submit" className="buttontodo">
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