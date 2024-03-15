import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

function Login() {
  const { currentUser, isAuthenticated, login } = useContext(AuthContext);

  const handleLogin = () => {
    login('rohan');
  };

  return (
    <>
      <button id="login-btn" onClick={handleLogin}>Login</button>
      <div id="current-user">
        {isAuthenticated ? `Current user: ${currentUser}, isAuthenticated: Yes` : ''}
      </div>
    </>
  );
}

export default Login;
