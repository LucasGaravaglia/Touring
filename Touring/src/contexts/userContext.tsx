import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';
import points from '../../data/points'
import Point from '../../interfaces/Point'

interface UserContextData {
  updatePoints: () => void,
  points: Point[]
}

export const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({ children }) => { 

  const [ points, setPoints ] = useState<Point[]>()

  function updatePoints() {
    
  }

  return (
    <UserContext.Provider value={
      {
        updatePoints,
        points
      }
    }>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;
