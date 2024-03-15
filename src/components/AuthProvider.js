import React, { useState } from 'react';

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username) => {
    setCurrentUser(username);
    setIsAuthenticated(true);
  };

  const signout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ currentUser, isAuthenticated, login, signout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
