import { Routes, Route, NavLink } from "react-router-dom";
import Profile from "./admin/Profile";
import Auth from "./admin/Auth";
import Dashboard from "./admin/Dashboard";
import "./admin/router.css";

const App = () => {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2 className="logo">OPASH</h2>
        <h4 className="logo">SOFTWARE</h4><br/>

        <NavLink to="/" className="nav-link">
          Dashboard
        </NavLink>

        <NavLink to="/profile/krk" className="nav-link">
          Profile
        </NavLink>

        <NavLink to="/auth" className="nav-link">
          login
        </NavLink>
      </aside>

      <main className="content">
        <header className="header">
          <h1>Admin Panel</h1>
        </header>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/auth" element={<Auth />} /> 
        </Routes>
      </main>
    </div>
  );
};

export default App;