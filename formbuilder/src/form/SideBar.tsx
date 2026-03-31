import type { FeildType } from "../type";
import { useDrag } from "react-dnd";

const fieldTypes:{type: FeildType; label:string}[]=[
    {type:"text", label: "text"},
    {type:"number", label:"number"},
    {type:"email", label:"email"},
    {type:"textarea", label:"textarea"},
    {type:"checkbox", label:"checkbox"},
    {type:"select", label:"Dropdown"},
    {type:"radio", label:"radio"},
    {type:"date", label:"date"},
    {type:"file", label:"file"},    
     {type:"range", label:"range"},
    {type:"time", label:"time"},

];


function DraggableField({ type, label }: { type: FeildType; label: string }) {
  const [, drag] = useDrag(() => ({
    type: "FIELD",
    item: {type},
  }));

  return (
    <div ref={(node) => {
        drag(node);}}>
      {label} - {type}
    </div>
  );
}

export default function SideBar(){
    return(
        <div>
           <p>field type</p>
           {fieldTypes.map(({type, label})=>(
            <DraggableField key={type} type={type} label={label}/>
           ))}
        </div>
    )
}