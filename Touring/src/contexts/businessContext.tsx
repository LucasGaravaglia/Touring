
import React, { createContext, useState } from 'react';
import { Alert } from 'react-native'
import Axios from 'axios'

interface BusinessContextData {
    loading: boolean,
    registerTouristSpot: (touristSpotName: string, touristSpotAddress: string, touristSpotDescription: string, touristSpotSchedule) => void
}

export const BusinessContext = createContext<BusinessContextData>({} as BusinessContextData);

const BusinessProvider: React.FC = ({ children }) => { 

    const [ loading, setLoading ] = useState(false)

    function checkName(name: string){
        if(name === '')
            throw "Nome inválido."
    }

    function sendToDatabase(route,data,successMessage){
      setLoading(true)
      Axios.post("/"+route,data).then( ( response ) => {
          Alert.alert(successMessage)
      }).catch( ( err ) => {
          throw err
      })
      setLoading(false)
  }

    function registerTouristSpot(touristSpotName: string, touristSpotAddress: string, touristSpotDescription: string, touristSpotSchedule){
      try{
        checkName(touristSpotName)
        sendToDatabase("",{ touristSpotName, touristSpotAddress, touristSpotDescription, touristSpotSchedule },"Ponto turístico registrado com sucesso.")
      } catch(err) {
        throw err
      }
    }

  return (
    <BusinessContext.Provider value={
      {
        loading,
        registerTouristSpot
      }
    }>
      {children}
    </BusinessContext.Provider>
  )
}

export default BusinessProvider;
