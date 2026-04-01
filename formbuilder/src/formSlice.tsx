import {v4 as uuid} from 'uuid';
import { createSlice } from '@reduxjs/toolkit';
import  type { PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './type';
import type { Step, validationRules, Field,ViewMode, FieldType} from './type';

export const FormSlice =createSlice({
    name: 'form', initialState,
    reducers:{
        addStep: (s)=>{
            s.steps.push({id: uuid(), title:`step - ${s.steps.length+1}`, fields:[],});
            s.currentStepIndex=s.steps.length-1;

        },
        removeStep: (s, a:PayloadAction<string>)=>{
            s.steps=s.steps.filter((st)=>st.id!=a.payload);
            if(s.currentStepIndex>=s.steps.length){
                s.currentStepIndex=Math.max(0,s.steps.length-1);
            }
        },
        updateStepTitle:(s, a:PayloadAction<{stepId: string; title: string }>)=>{
            const st= s.steps.find((x)=>x.id==a.payload.stepId);
            if(st){
                st.title=a.payload.title;
            }
        },
        setActivityStep:(s, a:PayloadAction<number>)=>{
            s.currentStepIndex=a.payload;
        },

        addFeild:(s, a:PayloadAction<{stepId:string, type: FieldType}>)=>{
            const st =s.steps.find((x)=>x.id===a.payload.stepId);
            if(st){
                st.fields.push({id: uuid(),type: a.payload.type, placeholder:"",
            label:`${a.payload.type} feild`, options: a.payload.type==="select"||a.payload.type==="radio"?["Option 1"]:[], valid:{required:false}});
            }
        },

        removeField: (s, a: PayloadAction<{ stepId: string; fieldId: string }>)=> {
             const st = s.steps.find((x) => x.id===a.payload.stepId); 
             if(st){
                st.fields=st.fields.filter((f)=>f.id!==a.payload.fieldId);
             }

             if (s.selectField === a.payload.fieldId) s.selectField = null; 
        },

    updateField:(s, a: PayloadAction<{ stepId: string; fieldId: string; data: Partial<Field> }>)=>{
         const st = s.steps.find((x) => x.id === a.payload.stepId); 
         const f = st?.fields.find((x) => x.id === a.payload.fieldId);
    if (f) Object.assign(f, a.payload.data); },
   
    updateFieldValidation:(s, a: PayloadAction<{ stepId: string; fieldId: string; valid:Partial<validationRules> }>)=>{ 
        const st = s.steps.find((x)=>x.id===a.payload.stepId); 
        const f = st?.fields.find((x)=>x.id===a.payload.fieldId); 
        if (f) Object.assign(f.valid,a.payload.valid); },

    reorderFields:(s, a: PayloadAction<{ stepId: string; fromIndex: number; toIndex: number }>)=>{
         const st = s.steps.find((x)=>x.id=== a.payload.stepId); 
         if (st) {
             const [m] = st.fields.splice(a.payload.fromIndex, 1); 
             st.fields.splice(a.payload.toIndex, 0, m); } },
    
     selectField:(s,a: PayloadAction<string | null>) =>{
         s.selectField = a.payload; },
    
         setViewMode:(s, a: PayloadAction<ViewMode>) =>{
         s.viewmode = a.payload; },

         loadForm:(s, a:PayloadAction<{steps:Step[]; viewMode?:ViewMode}>)=>{
            s.steps=a.payload.steps;
            s.currentStepIndex=0;
            s.selectField=null;
            if(a.payload.viewMode){
                s.viewmode=a.payload.viewMode;
            }

         }

    }
});

export const { addStep, removeStep,loadForm, updateStepTitle, setActivityStep, addFeild, removeField, updateField, updateFieldValidation, reorderFields, selectField, setViewMode } = FormSlice.actions;
export default FormSlice.reducer;