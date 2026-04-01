import { useState } from "react";
import type { Field } from "../type";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

export function FormValidation(){

const [submitted, setSubmitted]=useState(false);
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [cur, setCur]=useState(0);
  const steps= useSelector((s:RootState)=>s.form.steps);
  const step =steps[cur];
   const [vals, setVals] = useState<Record<string, string>>({});
   const [errs, setErrs] = useState<Record<string, string>>({});

 function validate(f:Field, v:string){
    const r=f.valid;
    if(r.required){
        if(f.type==="checkbox" ||f.type==="file"){
            if(!v.trim()){
                return r.errMsg||`${f.label} is required`
            }
    }}
    if(!v.trim() &&!r.required){
        return ""
    }
    if(f.type==="email" &&v){
        if(!EMAIL_REGEX.test(v)){
            return r.errMsg||"write valid mail";
        }
    }
    if(f.type==="text" ||f.type==="textarea" &&v){
        if(r.maxLength&&v.length>r.maxLength){
            return r.errMsg||`max limit is ${r.maxLength}`
        }
        if(r.minLength&&v.length<r.minLength){
            return r.errMsg || `min limit is ${r.minLength}`
         }
    }
    if(f.type==="number" &&v){
        if(r.min!==undefined && Number(v)<r.min){
            return r.errMsg||`min value is ${r.min}`;
        }
        if(r.max!==undefined &&Number(v)>r.max){
            return r.errMsg||`max value is ${r.max}`
        }
    }
}

 function validateCurrentStep(): Record<string, string> {
    const e: Record<string, string> = {};
    for (const f of step.fields) { const err=validate(f, vals[f.id]|| ""); 
        if (err) { e[f.id] = err;}}
    return e;
  }

   function validateAllSteps():Record<string, string>{
    const e:Record<string,string>={};
    for(const s of steps){
        for(const f of s.fields){
            const err=validate(f, vals[f.id]||"");
             if (err) { e[f.id] = err;}
        }
    }
    return e;
  }

   function handleNext(){
      const e = validateCurrentStep();
    setErrs(e);
    if (!Object.keys(e).length &&cur<steps.length-1)
         setCur(cur + 1);
  }

   function handleSubmit(){
    const e=validateAllSteps();
    setErrs(e);
    if(Object.keys(e).length===0){ setSubmitted(true)}
  }

   return {steps, step,cur,setCur, vals,setVals, errs, setErrs, submitted,setSubmitted, handleNext,  handleSubmit,};
}


