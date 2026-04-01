import type{ Field } from "../type";
import { FormValidation } from "./PrevierCond";

export default function Preview() {
const { steps,step, cur, setCur, vals, setVals, errs,setErrs, submitted, setSubmitted, handleNext, handleSubmit}= FormValidation();

  if (!step) return <p>data not available</p>


  const inp: React.CSSProperties = { width: "100%", padding: "6px 8px" };
  const btn = (d: boolean): React.CSSProperties => ({ padding: "8px 16px"});

  function renderInput(f: Field) {
    const v = vals[f.id] || "";
    const ch = (nv: string) => { setVals((p) => ({ ...p, [f.id]: nv })); 
    if (errs[f.id]) 
        setErrs((p)=>{ const n={ ...p }; 
    delete n[f.id]; 
    return n; }); };
    
    const eStyle = { ...inp};
    if (f.type === "textarea") 
        return <textarea value={v} onChange={(e)=>ch(e.target.value)} placeholder={f.placeholder} rows={3} style={eStyle} />;
    if (f.type === "checkbox") {
      const selected = v ? v.split(",") : [];
      const toggleOption = (opt: string)=>{
        const newSelected = selected.includes(opt) ? selected.filter((s)=>s!==opt) : [...selected, opt];
        ch(newSelected.join(","));
      };

      return <div>{f.options.map((o) => <label key={o} style={{ display: "block",marginBottom: 2}}>
        <input type="checkbox" checked={selected.includes(o)} onChange={() => toggleOption(o)} /> {o}</label>)}</div>;
    }
    if (f.type === "select") return <select value={v} onChange={(e) => ch(e.target.value)} style={eStyle}>
        <option value="">Select...</option>{
        f.options.map((o) => <option key={o} value={o}>{o}</option>)}</select>;
    
        if(f.type==="radio") return 
        <div>{f.options.map((o) => <label key={o} style={{ display: "block", marginBottom: 2,}}>
            
            <input type="radio" name={`radio-${f.id}`} value={o} checked={v===o} onChange={()=>ch(o)}/>{o}</label>)}</div>;
    return <input type={f.type === "file"?"file":f.type} value={f.type === "file" ? undefined : v}
    onChange={(e)=>ch(f.type=== "file"?e.target.files?.[0]?.name||"":e.target.value)} 
    placeholder={f.placeholder} style={eStyle}/>;
  }

  if (submitted) {
    return (
      <div style={{ padding: 20, maxWidth: 500, margin: "0 auto", textAlign: "center" }}>
        <div style={{padding: 24, borderRadius: 8, marginBottom: 16 }}>
          <h2 style={{margin: "0 0 8px" }}>Form Submitted Successfully!</h2>
          <p>All fields validated.</p>
        </div>
        <button onClick={() => { setSubmitted(false);
             setVals({}); 
             setErrs({}); 
             setCur(0); }} style={btn(false)}>Fill Again</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20, maxWidth: 500, margin: "0 auto" }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>{
      steps.map((s, i)=><div key={s.id} style={{ padding: "4px 12px"}} onClick={() => { 
        if (i < cur) setCur(i); }}>{s.title}</div>)}</div>
      
      
      <h3>{step.title}</h3>
      {step.fields.map((f) => (
        <div key={f.id} style={{ marginBottom: 14 }}>
          <label style={{ display: "block", marginBottom: 4 }}>{f.label}{f.valid.required && <span> *</span>}</label>
          {renderInput(f)}
          {errs[f.id] && <div style={{marginTop: 2 }}>{errs[f.id]}</div>}
        </div>
      ))}
      <div style={{ display: "flex", gap:8, marginTop:20}}>
        <button onClick={()=>cur>0 && setCur(cur-1)} disabled={cur===0} style={btn(cur===0)}>Previous</button>

        {cur<steps.length - 1?<button onClick={handleNext} style={btn(false)}>Next</button>: 
        <button onClick={handleSubmit} style={{ ...btn(false),}}>Submit</button>}
      </div>
    </div>
  );
}
