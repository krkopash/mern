

import StepTabs from "./form/StepTab";
import Canvas from "./form/Page";

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store";
import { setViewMode, loadForm } from "./formSlice";
import SideBar from "./form/SideBar";
import FieldEditor from "./form/Form";
import Preview from "./form/Preview";
import { useState, useEffect } from "react";



function encodeForm(steps: unknown[]): string {
  const json = JSON.stringify(steps);
  return btoa((encodeURIComponent(json)));
}

function decodeForm(encoded: string) {
    const json = decodeURIComponent((atob(encoded)));
    return JSON.parse(json);
  
}


export default function App() {
  const dispatch = useDispatch();
  const viewMode = useSelector((s: RootState) => s.form.viewmode);
  const steps=useSelector((s:RootState)=>s.form.steps);
  const [share, setShare]=useState("");

  useEffect(()=>{
    const params = new URLSearchParams(window.location.search);
    const data =params.get("form");
    if(data){
      const decoded=decodeForm(data);
      if(decoded &&Array.isArray(decoded)){
        dispatch(loadForm({steps:decoded, viewMode:"preview"}));
        window.history.replaceState({}, "", window.location.pathname);
      }
    }
  },[])

  function handleShare(){
    if(steps.length===0){
      setShare("add step");
      setTimeout(()=>setShare(""),1000);
      return;

  }

  const encoded=encodeForm(steps);

    const url = `${window.location.origin}${window.location.pathname}?form=${encoded}`;
    navigator.clipboard.writeText(url).then(() => {
      setShare("Link copied!");
      setTimeout(() => setShare(""), 2000);
    }).catch(() => {
      setShare(url);
      setTimeout(() => setShare(""), 5000);
    });
  }


  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 16px", }}>
        <span>Form Builder</span>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {share && <span>{share}</span>}
          <button onClick={handleShare} style={{ padding: "6px 14px"}}>
            Share
          </button>
          <button onClick={() => dispatch(setViewMode(viewMode === "edit" ? "preview" : "edit"))} style={{ padding: "6px 14px"}}>
            {viewMode === "edit" ? "Preview" : "edit"}
          </button>
        </div>
      </div>
      {viewMode === "edit" ? (
        <><StepTabs /><div style={{ display: "flex", flex: 1, overflow: "hidden" }}><SideBar /><Canvas /><FieldEditor /></div></>
      ) : (<Preview/>)}
    </div>
  )
}

