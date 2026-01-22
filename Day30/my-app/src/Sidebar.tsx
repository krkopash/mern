import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo">AdminPanel</h2>

      <nav>
        <NavLink to="/admin/dashboard">Dashboard</NavLink>
        <NavLink to="/admin/users">Users</NavLink>
        <NavLink to="/admin/profile">Profile</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
