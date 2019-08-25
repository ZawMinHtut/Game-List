import React from 'react';
import { Navbar, AdminLogin, GameList, GameForm } from './components';
import { NavbarContextProvider, ThemeContextProvider, AdminContextProvider, GameContextProvider } from './contexts';

import './App.scss';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AdminContextProvider>
          <NavbarContextProvider>
            <Navbar />
            <AdminLogin />
            <GameContextProvider>
              <GameList />
              <GameForm />
            </GameContextProvider>
          </NavbarContextProvider>
        </AdminContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
