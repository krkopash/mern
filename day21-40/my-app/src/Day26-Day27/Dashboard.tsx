import { useApp } from "./AppContext";

const Dashboard = () => {
  const { user, logout, setError } = useApp();

  return (
    <div className="card">
      <h3>Welcome, {user?.email}</h3>

      <button onClick={() => setError("API request failed. Try again.")}>
        Trigger Global Error
      </button>

      <button onClick={() => { throw new Error("Test Crash"); }}>
        Trigger App Crash
      </button>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
