import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';
import testData from '../../data/points'
import Point from '../../interfaces/Point'
import api from '../../services/api';

interface UserContextData {
  updatePoints: (pointType: string) => void,
  points: Array<Point>,
  loading: boolean
}


interface ResponsePoint{
  tour_spot_address: string,
  tour_spot_city: string,
  tour_spot_description: string,
  tour_spot_image: string,
  tour_spot_location: string,
  tour_spot_name: string,
  tour_spot_schedules: string,
}

export const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({ children }) => { 

  const [ points, setPoints ] = useState<Point[]>(testData)
  const [ loading, setLoading] = useState(false);



  function translate(data: ResponsePoint[]){
    /*const translatedData: Point[] = data.map( p => {
      return {
        key: p.tour_spot_name,
        linkImg: p.tour_spot_image,
        rating: p.,
        state: p.tour_spot_schedules,
        name: p.tour_spot_name,
      }
    });*/
  }

  async function updatePoints(pointType: string) {
    setLoading(true);
    //const response = await api.get('/spot?tour_spot_category=tourist_place');
    //console.log(response.data)
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
