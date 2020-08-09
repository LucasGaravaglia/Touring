import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';

interface UserContextData {
  getPoints: () => Array<Object>
}

export const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({ children }) => { 

    function getPoints() {

      // Conecta no banco e pega os pontos.
      // Retorna os pontos.

      return [{}]
    }

  
    return (
      <UserContext.Provider value={
        {
          getPoints
        }
      }>
        {children}
      </UserContext.Provider>
    )
}

export default UserProvider;
