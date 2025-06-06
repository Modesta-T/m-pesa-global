import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // For now, hardcode a logged-in admin user
  const [user, setUser] = useState(null);

  // Simulate login for testing
  useEffect(() => {
    // This would come from real login/auth API
    setUser({ id: 1, name: "Admin User", role: "admin", email: "admin@example.com" });
  }, []);

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
