import { useDispatch, useSelector } from "react-redux";
import type{RootState} from '../store'
import { addStep, removeStep, setActivityStep } from "../formSlice";

export default function StepTabs() {
  const dispatch = useDispatch();
  const steps = useSelector((s: RootState) => s.form.steps);
  
  return (
    <div style={{ display:"flex" ,gap: 4, padding: 8}}>
      {steps.map((step, i) => (
        <div key={step.id} onClick={() =>dispatch(setActivityStep(i))} style={{ padding: "6px 12px", display: "flex"}}>
          <span>{step.title}</span>
          {steps.length>0&& <span onClick={(e) => { e.stopPropagation(); 
            dispatch(removeStep(step.id)); }}>x</span>}
        </div>
      ))}
      <button onClick={()=> dispatch(addStep())}>+ Add Step</button>

    </div>
  );
}