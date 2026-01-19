import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type User = {
  email: string;
};

type AppContextType = {
  user: User | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
  login: (email: string) => void;
  logout: () => void;
  setError: (msg: string | null) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = (email: string) => {
    setLoading(true);
    setTimeout(() => {
      setUser({ email });
      setLoading(false);
    }, 700); // simulate API delay
  };

  const logout = () => setUser(null);

  return (
    <AppContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        loading,
        error,
        login,
        logout,
        setError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
};
