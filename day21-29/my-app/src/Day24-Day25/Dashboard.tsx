const Dashboard = () => {
  return (
    <div className="page">
      <h2>Dashboard</h2>

      <div className="cards">
        <div className="card">
          <h3>Total Users</h3>
          <p>00</p>
        </div>

        <div className="card">
          <h3>Active Users</h3>
          <p>00</p>
        </div>

        <div className="card">
          <h3>Pending Tasks</h3>
          <p>00</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
