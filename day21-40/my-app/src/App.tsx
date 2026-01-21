import { Routes, Route, NavLink } from "react-router-dom";
import Profile from "./Day24-Day25/Profile";
import Auth from "./Day24-Day25/Auth";
import Dashboard from "./Day24-Day25/Dashboard";
import "./Day24-Day25/router.css";

const App = () => {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2 className="logo">OPASH</h2>
        <h4 className="logo">SOFTWARE</h4><br/>

        <NavLink to="/" className="nav-link">
          Dashboard
        </NavLink>

        <NavLink to="/profile/101" className="nav-link">
          Profile
        </NavLink>

        <NavLink to="/auth" className="nav-link">
          Day 25 – Forms & Validation 
        </NavLink>
      </aside>

      <main className="content">
        <header className="header">
          <h1>React TypeScript Dashboard</h1>
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


// import Dashboard from "./Day28-Day29/Dashboard";
// import "./Day28-Day29/styles.css";
// // import Auth from "./Day26-Day27/Auth";
// // import GlobalErrorToast from "./Day26-Day27/GlobalErrorToast";
// // import { useAuth } from "./Day26-Day27/AuthContext";
// // import "./Day26-Day27/styles.css";

// const App = () => {
//   // const { isLoggedIn } = useAuth();

//   return (
//     <div className="app">
//       {/* <aside className="sidebar">
//         <h2>SmartPanel</h2>
//       </aside>

//       <main className="content">
//         <header className="header">
//           <h1>Advanced React State System</h1>
//         </header>

//         {isLoggedIn ? <Dashboard /> : <Auth />}
//       </main>

//       <GlobalErrorToast /> */}
//       <Dashboard/>
//     </div>
//   );
// };

// export default App;
