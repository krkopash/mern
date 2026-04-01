import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { updateField, updateFieldValidation, selectField } from "../formSlice";
import type { FieldType } from "../type";


const TYPES: FieldType[] = ["text","email","number","textarea","checkbox","select","radio","date","file"];
const s = { width: "100%", padding: "6px 8px" };
const lbl = { display: "block" as const, marginBottom: 4, marginTop: 10 };

export default function FieldEditor() {
  const dispatch = useDispatch();
  const steps = useSelector((s: RootState) => s.form.steps);
  const idx = useSelector((s: RootState) => s.form.currentStepIndex);
  const selId = useSelector((s: RootState) => s.form.selectField);
  const step = steps[idx];
  const field = step?.fields.find((f) => f.id === selId);

  const [count, setCount] = useState(field?.options.length || 1);

  useEffect(() => {
    if (field) setCount(field.options.length || 1);
  }, [field?.id]);

  if (!field || !step) return <div style={{ width: 280, padding: 16 }}><p>Select a field to edit.</p></div>;

  const hasOpts = field.type === "checkbox" || field.type === "select" || field.type === "radio";
  const up = (data: Partial<typeof field>) => dispatch(updateField({ stepId: step.id, fieldId: field.id, data }));
  const upV = (v: Partial<typeof field.valid>) => dispatch(updateFieldValidation({ stepId: step.id, fieldId: field.id, valid: v }));

  return (
    <div style={{ width: 280, padding: 16, overflowY: "auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ margin: "0 0 12px", }}>Field Properties</p>

        <button onClick={() => dispatch(selectField(null))}>x</button></div>
      <label style={lbl}>Type</label>
      <select value={field.type} onChange={(e) => up({ type: e.target.value as FieldType })} style={s}>
        {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}</select>
      <label style={lbl}>Label</label>

      <input value={field.label} onChange={(e) => up({ label: e.target.value })} style={s} />

      <label style={lbl}>Placeholder</label>
      <input value={field.placeholder} onChange={(e) => up({ placeholder: e.target.value })} style={s} />

      {hasOpts && (
        <>
          <label style={lbl}>How many?</label>
          <input type="number" min={1}
            value={count}
            onChange={(e) => {
              const value = Math.max(1, Number(e.target.value));
              setCount(value);
              const newOptions = new Array(value).fill("").map((_, i) => field.options[i] || "");
              up({ options: newOptions });
            }}
            style={s}
          />
          <label style={lbl}>Labels</label>
          {field.options.map((opt, index) => (
            <input key={index} type="text" value={opt}
              placeholder={`Option ${index + 1}`}
              onChange={(e) => {
                const updated = [...field.options];
                updated[index] = e.target.value;
                up({ options: updated });
              }}
              style={{ ...s, marginBottom: 4 }}
            />
          ))}
        </>
      )}

      <hr style={{ margin: "16px 0" }} />
      <h3 style={{ margin: "0 0 12px", fontSize: 14 }}>Validation</h3>
      <label style={{ ...lbl, display: "flex", alignItems: "center", gap: 8 }}>
        
        <input type="checkbox" checked={field.valid.required||false} onChange={(e)=>upV({ required:e.target.checked})} /> Required</label>

      {(field.type === "text" || field.type === "textarea") &&
       (<><label style={lbl}>Min Length</label>
       
       <input type="number" value={field.valid.minLength ?? ""} onChange={(e) => upV({
         minLength: e.target.value ? Number(e.target.value) : undefined })} style={s} /><label style={lbl}>Max Length</label>
         
         <input type="number" value={field.valid.maxLength ?? ""} onChange={(e) => upV({ maxLength: e.target.value ? Number(e.target.value) : undefined })} style={s} /></>)}
      {field.type==="number" && (<><label style={lbl}>Min Value</label>
      
      <input type="number" value={field.valid.min ?? ""} onChange={(e) => upV({ 
        min: e.target.value ? Number(e.target.value) : undefined })} style={s} />
        <label style={lbl}>Max Value</label>
        <input type="number" value={field.valid.max??""} onChange={(e)=>upV({ max: e.target.value?Number(e.target.value): undefined })} style={s} /></>)}
      <label style={lbl}>Error Message</label>

      <input value={field.valid.errMsg ?? ""} onChange={(e) => upV({ errMsg: e.target.value||undefined})} placeholder="Custom error message" style={s} />
    </div>
  );
}
