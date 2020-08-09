import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';

interface UserContextData {
    
}

export const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({ children }) => { 

    
  
    return (
      <UserContext.Provider value={
        {
          
        }
      }>
        {children}
      </UserContext.Provider>
    )
}

export default UserProvider;
