import { useState } from "react";
import type { RootState } from "../store";
import type { FeildType } from "../type";
import { useDispatch, useSelector } from "react-redux";

const types: FeildType[]=["text", "email","number","textarea","checkbox","radio","select", "option","date","file","range","time"];

import { updateField, updateFieldValidation,selectField } from "../formSlice";
const s = { width: "100%", padding: "6px 8px" as const };
const lbl = { display: "block" as const, marginBottom: 4, marginTop: 10 };


export default function FieldEditor() {
  const dispatch = useDispatch();
  const steps = useSelector((s: RootState) => s.form.steps);
  const idx = useSelector((s: RootState) => s.form.currentStepIndex);
  const selId = useSelector((s: RootState) => s.form.selectField);
  const step = steps[idx];
  const field = step?.fields.find((f) => f.id === selId);

  const [count, setCount] = useState<number>(0);

  if (!field || !step) return <p style={{width:200, padding:16}}>edit</p>;

  const hasOpts = field.type==="select"|| field.type==="radio";
  const up = (data: Partial<typeof field>) => dispatch(updateField({ stepId: step.id,fieldId: field.id, data }));
  const upV = (v: Partial<typeof field.valid>) => dispatch(updateFieldValidation({ stepId: step.id, fieldId: field.id,valid:v }));

  return (
    <div style={{ width: 280, padding: 16, overflowY: "auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button onClick={() => dispatch(selectField(null))}>x</button></div>
    
        <label style={lbl}>type</label>
    <select value={field.type} onChange={(e)=>up({ type:e.target.value as FeildType})} style={s}>
      {types.map((t) => <option key={t} value={t}>{t}</option>)}</select>
      
      <label style={lbl}>Label</label>
      <input value={field.label} onChange={(e)=>up({label: e.target.value })} style={s}/>

  
      <label style={lbl}>Placeholder</label>
      <input value={field.placeholder} onChange={(e)=>up({placeholder:e.target.value })} style={s}/>
 
      {
      hasOpts && (<><label style={lbl}>Options</label>
      
<textarea value={field.options.join("\n")} onChange={(e) => up({ options: e.target.value.split("\n").filter((o) => o.trim()) })} rows={4} style={s} /></>)}

      <h3>validation</h3>
      <label style={{ ...lbl,display: "flex",alignItems:"center", gap:5}}>
        <input type="checkbox" checked={field.valid.required||false} onChange={(e)=>upV({required:e.target.checked})}/>Required</label>
        <label style={{...lbl, display:"flex", alignItems:"center", gap:5}}>
<input type="checkbox" checked={field.valid.required||true} onChange={(e)=>upV({ required: e.target.checked})} /> unique</label>

        

      {
        (field.type==="text"||field.type==="textarea"||field.type==="range")&&(
          <>
          <label style={lbl}>min length:</label>
          <input type="number" value={field.valid.minLength??""} onChange={(e)=>upV({minLength:e.target.value?Number(e.target.value):undefined})}style={s}/>
          <label style={lbl}>max length</label>
          <input type="number" value={field.valid.maxLength??""} onChange={(e)=>upV({maxLength:e.target.value?Number(e.target.value):undefined})} style={s}/>

          </>

        )
      }
      {field.type === "number" && (<><label style={lbl}>Min Value</label><input type="number" value={field.valid.min??""} onChange={(e)=>upV({ min:e.target.value?Number(e.target.value) : undefined })} style={s} /><label style={lbl}>Max Value</label><input type="number" value={field.valid.max ?? ""} 
      onChange={(e)=>upV({max:e.target.value?Number(e.target.value):undefined })} style={s} /></>)}

      {(field.type==="text" || field.type==="email") && (<><label style={lbl}>patten:</label><input value={field.valid.pattern ?? ""} onChange={(e)=>upV({ pattern:e.target.value||undefined })} style={s} /></>)}
      <label style={lbl}>error msg</label>

      <input value={field.valid.errMsg ?? ""} onChange={(e) => upV({ errMsg: e.target.value || undefined })} placeholder="Custom error message" style={s} />

      {(field.type==="date" || field.type==="time")&&(<>
      <label style={lbl}>date</label>
      <input type="datetime-local"/></>)}

    {(field.type==="file")&&(<><label>size milit:</label>
     <input type="number" value={field.valid.minLength??""} onChange={(e)=>upV({minLength:e.target.value?Number(e.target.value):undefined})}style={s}/>
    </>)}
    {field.type === "checkbox" || field.type==="select" && (<>
    <label style={lbl}>How many????</label>
    <input type="number" value={count} onChange={(e) => {
        const value = Number(e.target.value);
        setCount(value);
        const newOptions = new Array(value).fill("");
        up({ options: newOptions });}}/>

    <label style={lbl}>labels</label>
    {field.options.map((opt, index) => (
      <input key={index} type="text" value={opt} placeholder={`${index + 1}`} onChange={(e) => {
          const updated = [...field.options];
          updated[index] = e.target.value;
          up({ options: updated });
        }}/>
    ))}
  </>
)}
  
    </div>
  );
}


