import { useState, useCallback } from "react";
import ToDo from "./todo";

const Dashboard = () => {

      const [count,setCount] = useState(0);

    const increment = useCallback ((e: React.MouseEvent<HTMLButtonElement>) => {
        setCount (prevCount => prevCount +1);
    }, []);

  return (
    <div className="page">
      <h2>Dashboard</h2>

      <div className="cards">
        <div className="card">
          <h3>Total Users</h3>
          <p>--</p>
        </div>

        <div className="card" onClick={increment}>
          <h3>Active Users</h3>
          <p>{count}</p>
        </div>

        {/* <div className="card">
          <h3>Pending Tasks</h3>
          <p>00</p>
        </div>  */}
      </div><br/><br/>
      <ToDo/>
    </div>
  );
};



export default Dashboard;
