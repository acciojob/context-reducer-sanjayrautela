<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>


import React from 'react';
import { AuthProvider } from './components/AuthProvider';
import Login from './components/Login';
import Signout from './components/Signout';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <AuthProvider>
      <Login />
      <Signout />
      <ShoppingList />
    </AuthProvider>
  );
}

export default App;


