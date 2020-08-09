import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';
import testData from '../../data/points'
import Point from '../../interfaces/Point'

interface UserContextData {
  updatePoints: () => void,
  points: Array<Point>,
  loading: boolean
}

export const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({ children }) => { 

  const [ points, setPoints ] = useState<Point[]>(testData)
  const [ loading, setLoading] = useState(false);

  function updatePoints() {
    setLoading(true);

    setLoading(false);
  }

  return (
    <UserContext.Provider value={
      {
        updatePoints,
        points,
        loading
      }
    }>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;
