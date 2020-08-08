
import React, { createContext, useState } from 'react';

interface AuthContextData {
  authenticated: boolean,
  loading: boolean
}

export const MainContext = createContext<AuthContextData>({} as AuthContextData);

const MainProvider: React.FC = ({ children }) => { 
  
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <MainContext.Provider value={
      {
        authenticated,
        loading
      }
    }>
      {children}
    </MainContext.Provider>
  )
}

export default AuthProvider;
