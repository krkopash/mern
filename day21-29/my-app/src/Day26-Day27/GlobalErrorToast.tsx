import { useApp } from "./AppContext";

const GlobalErrorToast = () => {
  const { error, setError } = useApp();

  if (!error) return null;

  return (
    <div className="toast">
      ⚠️ {error}
      <span onClick={() => setError(null)}>✖</span>
    </div>
  );
};

export default GlobalErrorToast;
