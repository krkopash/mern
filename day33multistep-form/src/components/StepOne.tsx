import type { FormData } from "../types/FormTypes";

type Props = {
  data: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  next: () => void;
};

const StepOne = ({ data, onChange, next }: Props) => {
  
  const isValid = data.name && data.email.includes("@") && data.email.includes(".");

  return (
    <div className="container">
      <h2>Step 1: Basic Info</h2>
      <p>Enter Name:</p>
      <input
        name="name"
        placeholder="Full Name"
        value={data.name}
        onChange={onChange}
      />
      <p>Enter Email address:</p>
      <input
        name="email"
        placeholder="Write valid mail id"
        value={data.email}
        onChange={onChange}
      />
      

      <div className="actions">
        <button disabled={!isValid} onClick={next}>
          Next ▶
        </button>
      </div>
    </div>
  );
};

export default StepOne;
