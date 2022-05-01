import { useState, useEffect, useMemo } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loggingStatus = useMemo(() => ({ isLoggedIn }), []);
  useEffect(() => {
    const logginStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(logginStatus === '1');
  }, []);

  const loginHandler = (/* email, password */) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 1);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 0);
  };

  return (
    <AuthContext.Provider
      value={loggingStatus}
    >
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
