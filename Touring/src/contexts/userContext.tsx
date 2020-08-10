import React, { createContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import testData from '../../data/pontosTuristicos';
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
  tour_spot_id: number,
  tour_spot_image: string,
  tour_spot_location: string,
  tour_spot_name: string,
  tour_spot_schedules: string,
}

export const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({ children }) => { 

  const [ points, setPoints ] = useState<Point[]>({} as Point[])
  const [ loading, setLoading] = useState(false);



  function translate(data: ResponsePoint[]){
    const translatedData: Point[] = data.map( p => {
      return {
        key: p.tour_spot_id,
        linkImg: p.tour_spot_image,
        rating: 4.5,
        state: p.tour_spot_schedules,
        name: p.tour_spot_name,
        adress: p.tour_spot_address,
        description: p.tour_spot_description
      }
    });

    setPoints(translatedData);
  }

  function updatePoints(pointType: string) {
    const newData: Point[] = testData.map( t => {
      
      return {
        key: t.id,
        linkImg: t.pictureUrl,
        rating: 4.5,
        state: t.schedule,
        name: t.name,
        adress: t.adress,
        description: t.description
      }

    });
    setPoints(newData);

    
    /*
    setLoading(true);
    const response = await api.get('/spot?tour_spot_category=tourist_place');
    translate(response.data[0]);
    setLoading(false);*/
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


