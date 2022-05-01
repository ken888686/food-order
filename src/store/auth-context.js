import { createContext } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => { console.log('onLogout not implemented'); },
});

export default AuthContext;
