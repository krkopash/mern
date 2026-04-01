export type FieldType="text"|"email"|"number"|"textarea"|"checkbox"|"radio"|"select"| "option"|"date"|"file"|"range"|"time";
export interface validationRules{
    required: boolean;
    minLength?:number;
    maxLength?:number;
    min?:number;
    max?:number;
    errMsg?:string;

}
export interface Field{
    id: string;
    type: FieldType;
    label:string; 
    placeholder: string;
    options: string[];
    valid: validationRules;

}
export interface Step{
    id:string;
    title:string;
    fields: Field[];
}
export type ViewMode="preview"|"edit";
export interface FormState{
    steps: Step[];
    currentStepIndex:number;
    selectField: string|null;
    viewmode: ViewMode;
}

export const initialState: FormState={
    steps: [],
    currentStepIndex: 0,
    selectField: null,
    viewmode: "edit",
};

export interface Props{
    field: Field;
    stepId: string;
    index: number;
    isSelected: boolean;
    onClick:()=>void;
    onDelete:()=>void;

}