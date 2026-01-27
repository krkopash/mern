import { Routes, Route, NavLink } from "react-router-dom";
import Profile from "./admin/Profile";
import Auth from "./admin/Auth";
import Dashboard from "./admin/Dashboard";
import "./admin/router.css";
import Charts from "./admin/charts";

const App = () => {
  return (
    <div className="app">
      <aside className="sidebar">
        <h1>Admin</h1>
        <h3>Panel</h3><br/><hr/><br/>

        <NavLink to="/" className="nav-link">
          Dashboard
        </NavLink>

        <NavLink to="/profile/krk" className="nav-link">
          Profile
        </NavLink>

        <NavLink to="/auth" className="nav-link">
          Login/SignUp
        </NavLink>

        <NavLink to="/charts" className="nav-link">
          Charts
        </NavLink>
      </aside>

      <main className="content">
        <header className="header">
          <h1>React TypeScript Admin-Panel</h1>
          <button className="adp">Admin</button>
          <br/><hr/>
        </header>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/auth" element={<Auth />} /> 
          <Route path="/charts" element={<Charts />} /> 
        </Routes>
      </main>
    </div>
  );
};

export default App;


// import Dashboard from "./Day28-Day29/Dashboard";
// import "./Day28-Day29/styles.css";
// import Auth from "./Day26-Day27/Auth";
// import GlobalErrorToast from "./Day26-Day27/GlobalErrorToast";
// import { useAuth } from "./Day26-Day27/AuthContext";
// import "./Day26-Day27/styles.css";

// const App = () => {
//   const { isLoggedIn } = useAuth();

//   return (
//     <div className="app">
//       <aside className="sidebar">
//         <h2>SmartPanel</h2>
//       </aside>

//       <main className="content">
//         <header className="header">
//           <h1>Advanced React State System</h1>
//         </header>

//         {isLoggedIn ? <Dashboard /> : <Auth />}
//       </main>

//       <GlobalErrorToast />
//       <Dashboard/>
//     </div>
//   );
// };

// export default App;

// // src/App.tsx
// import React, { useState } from 'react';
// import DataForm from './Day24-Day25/DataForm';
// import ChartComponent from './Day24-Day25/ChartComponent';

// interface DataPoint {
//   label: string;
//   value: number;
// }

// const App: React.FC = () => {
//   const [chartData, setChartData] = useState<DataPoint[]>([]);

//   const handleDataSubmit = (data: DataPoint[]) => {
//     setChartData(data);
//   };

//   return (
//     <div className="App">
//       <h1>Dynamic Chart with React & TypeScript</h1>
//       <DataForm onDataSubmit={handleDataSubmit} />
//       {chartData.length > 0 && <ChartComponent data={chartData} />}
//     </div>
//   );
// };

// export default App;
