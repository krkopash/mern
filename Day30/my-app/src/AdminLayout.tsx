import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <div className="admin">
      <Sidebar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
