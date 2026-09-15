import React, { createContext, useContext, useEffect, useState } from "react";

import type { AuthContextValue, User } from "../../types/auth";

const AuthContext = createContext<AuthContextValue | null>(null);

const STORAGE_KEY = "login-credential";

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const storedCredentials = localStorage.getItem(STORAGE_KEY);

    if (storedCredentials) {
      try {
        const storedUser: User = JSON.parse(storedCredentials);
        setUser(storedUser);
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }

    setAuthLoading(false);
  }, []);

  function login() {
    const newUser: User = {
      id: 1,
      name: "Shehram",
      email: "shehram@example.com",
    };

    setUser(newUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        authLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be called inside AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
