
import React, { createContext, useState } from 'react';

interface BusinessContextData {

}

export const BusinessContext = createContext<BusinessContextData>({} as BusinessContextData);

const BusinessProvider: React.FC = ({ children }) => { 
  

  return (
    <BusinessContext.Provider value={
      {

      }
    }>
      {children}
    </BusinessContext.Provider>
  )
}

export default BusinessProvider;
