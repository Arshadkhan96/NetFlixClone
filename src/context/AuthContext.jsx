import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  
  const value = {
    user,
    login: (userData) => setUser(userData),
    logout: () => setUser(null)
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}