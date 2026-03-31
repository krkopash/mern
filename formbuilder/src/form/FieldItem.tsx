
import { useDispatch, type UseDispatch } from "react-redux";
import { useDrag,useDrop } from "react-dnd";
import { reorderFields } from "../formSlice";
import type { Field } from "../type";


interface Props{
    field: Field;
    stepId: string;
    index: number;
    isSelected: boolean;
    onClick:()=>void;
    onDelete:()=>void;

}


export default function FieldItem({ field, stepId, index, isSelected, onClick, onDelete }: Props) {
  const dispatch = useDispatch();
  const [{ isDragging }, drag] = useDrag(()=>
     ({ type: "FIELD_ITEM", item: { index }, collect:(m) =>({ isDragging: m.isDragging() }) }));
  
  const [, drop] = useDrop(() => 
    ({ accept: "FIELD_ITEM", hover: (item: { index: number }) => {
    
        if(item.index !==index) { 
        dispatch(reorderFields({ stepId, fromIndex: item.index, toIndex: index })); 
        item.index = index; }
  }}));

  return (
    <div ref={(n) => { drag(drop(n)); }} onClick={onClick} style={{opacity: isDragging ? 0.5 : 1,padding: 8, marginBottom: 4,display: "flex"}}>
      <div>{field.label} - ({field.type}{field.valid.required ? " - required" : ""})</div>
      <button onClick={(e) => { e.stopPropagation(); onDelete(); }}>x</button>
    </div>
  );
}
