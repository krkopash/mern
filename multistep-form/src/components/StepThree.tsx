import type { FormData } from "../types/FormTypes";

type StepThreeProps = {
  data: FormData;
  back: () => void;
};



const StepThree = ({ data, back }: StepThreeProps) => {
  const submit = () => {
    alert("Form submitted successfully!!!!!!!!");
    console.log("Final Form Data:", data);
  };

  return (
    <div className="container">
      <h2>Step 3: Feedback</h2>
      <p>Plaese review your info:</p>

      <ul>
        <li><strong>Name:</strong> {data.name}</li>
        <li><strong>Email:</strong> {data.email}</li>
        <li><strong>Age:</strong> {data.age}</li>
      </ul>

      <div className="actions">
        <button onClick={back}>◀ Previous</button>
        <button onClick={submit}>Submit ✔</button>
      </div>
    </div>
  );
};

export default StepThree;
