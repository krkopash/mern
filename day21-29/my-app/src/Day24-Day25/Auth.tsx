import { useState } from "react";

type FormData = {
    email: string;
    password: string;
};

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = (): boolean =>{
    let valid = true;
    const newErrors: FormData = { email: "", password: ""};

    if(!formData.email.includes("@")){
    newErrors.email = "enter valid email address";
    valid = false;
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
      setFormData({ email: "", password: "" });
    }
  };

  return(
    <div className="page">
      <h2>{isLogin ? "Login" : "Signup"}</h2>

      <div className="auth-card">
        <form onSubmit={handleSubmit}>
          <label>Email: </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}<br></br><br></br>

          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          /><br></br>
          {errors.password && (
            <span className="error">{errors.password}</span>
          )}

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