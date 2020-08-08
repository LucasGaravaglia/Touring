
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
        if(name !== '')
            return true
        return false
    }

    function registerTouristSpot(touristSpotName: string, touristSpotAddress: string, touristSpotDescription: string, touristSpotSchedule){
        if(checkName(touristSpotName)){
            setLoading(true)
            Axios.post("/", { touristSpotName, touristSpotAddress, touristSpotDescription, touristSpotSchedule }).then( (response) => {
                Alert.alert("Ponto turístico registrado com sucesso.")
            }).catch( (err) => {
                throw err
            })
            setLoading(false)

        }else{
            throw "Nome inválido"
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
