import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store";
import { setViewMode } from "./formSlice";
import SideBar from "./form/SideBar";
import FieldEditor from "./form/Form";
import StepTabs from "./form/StepTab";
import Canvas from "./form/page";

export default function App() {
  const dispatch = useDispatch();
  const viewMode = useSelector((s: RootState) => s.form.viewmode);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between"}}>
        <button onClick={() => dispatch(setViewMode(viewMode === "edit" ? "preview" : "edit"))}>
          {viewMode === "edit" ? "Preview" : "edit"}
        </button>
      </div>
      {viewMode === "edit" ? (
        <><StepTabs /><div style={{ display: "flex", flex: 1, overflow: "hidden" }}><SideBar /><Canvas /><FieldEditor /></div></>
      ) : (
        <p>EMPTY</p>
      )}
    </div>
  );
}
