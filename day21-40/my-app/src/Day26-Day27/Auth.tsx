import { useState } from "react";
import { useApp } from "./AppContext";

const Auth = () => {
  const { login, setError, loading } = useApp();
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    login(email);
  };

  return (
    <div className="card">
      <h3>Login</h3>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Signing in..." : "Login"}
      </button>
    </div>
  );
};

export default Auth;
