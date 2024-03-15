import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

function Signout() {
  const { signout } = useContext(AuthContext);

  const handleSignout = () => {
    signout();
  };

  return (
    <button id="signout" onClick={handleSignout}>Signout</button>
  );
}

export default Signout;
