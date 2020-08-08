
import React, { createContext, useState } from 'react';

interface ClientContextData {

}

export const ClienteContext = createContext<ClientContextData>({} as ClientContextData);

const ClientProvider: React.FC = ({ children }) => { 

  return (
    <ClienteContext.Provider value={
      {

      }
    }>
      {children}
    </ClienteContext.Provider>
  )
}

export default ClientProvider;
