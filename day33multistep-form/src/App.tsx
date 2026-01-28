import { useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import type { FormData } from "./types/FormTypes";
import { BrowserRouter as Router, Routes as routes,  Route, Link, NavLink, BrowserRouter } from "react-router-dom";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    age: "",
    country: "",
    city: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <NavLink to="/"> StepOne </NavLink>
      <NavLink to="steptwo">stepTwo</NavLink>
      <NavLink to="stepthree"> stepthree</NavLink>

      <BrowserRouter>
      {/* <routes> */}
        {/* <Route path="/" element={<StepOne>}</StepOne>/> */}
        <Route path="/" element={<StepOne/>}></Route>
        <Route path="/steptwo" element={<StepTwo/>} />
      {/* </routes> */}
      </BrowserRouter>
      <h1>Advanced Multi-Step Form</h1>

      {step === 1 && (
        <StepOne data={formData} onChange={handleChange} next={() => setStep(2)} />
      )}

      {step === 2 && (
        <StepTwo
          data={formData}
          onChange={handleChange}
          back={() => setStep(1)}
          next={() => setStep(3)}
        />
      )}

      {step === 3 && (
        <StepThree data={formData} back={() => setStep(2)} />
      )}
    </div>
  );
};

export default App;
