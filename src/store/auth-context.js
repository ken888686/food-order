import {
  createContext, useState, useEffect, useMemo,
} from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
});

export function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const logginStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(logginStatus === '1');
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const loginHandler = (email, password) => {
    console.log(email, password);
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const authMemo = useMemo(() => ({
    isLoggedIn,
    onLogout: logoutHandler,
    onLogin: loginHandler,
  }), [isLoggedIn]);

  return (
    <AuthContext.Provider value={authMemo}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
