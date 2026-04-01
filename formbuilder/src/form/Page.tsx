import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { store, type RootState } from "../store";
import type { FieldType } from "../type";
import { addFeild, removeField, selectField } from "../formSlice";
import FieldItem from "./FieldItem";

export default function Canvas() {
  const dispatch = useDispatch();

  const idx =useSelector((s:RootState)=>s.form.currentStepIndex);
  const steps=useSelector((s:RootState)=>s.form.steps);

const selId = useSelector((s: RootState) => s.form.selectField);
  const step = steps[idx];

  const [,drop] = useDrop(()=>({
    accept: "FIELD", drop: (item: {type:FieldType }) => {
    const { steps, currentStepIndex } = store.getState().form;
    const active = steps[currentStepIndex];
    if (active) dispatch(addFeild({ stepId: active.id, type:item.type }));
  }}));

  if (!step) return <div ref={drop} style={{ padding: 20, flex: 1, minHeight: 300,}}><p>Click + Add Step</p></div>;

  return (
    <div ref={drop} style={{ padding: 20, flex: 1, minHeight:300}}>
      <h3>{step.title}</h3>
      {step.fields.length===0 && <p>Drag fields here from the sidebar.</p>}
      {step.fields.map((field, i) => (
        <FieldItem key={field.id} field={field} stepId={step.id} index={i} isSelected={field.id===selId} 
        onClick={()=> dispatch(selectField(field.id))} 
        onDelete={() => dispatch(removeField({ stepId: step.id, fieldId: field.id }))} />
      ))}
    </div>
  );
}
