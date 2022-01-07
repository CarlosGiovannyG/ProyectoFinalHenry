import { createContext } from 'react';
import React from 'react'
import { useState } from 'react';

export const AuthContex = createContext();


const AuthProvider = ({ children }) => {
 
  const [productsHistory, setProductsHistory] = useState(null)

  const productsHis = (response) => {
    setProductsHistory()
  }
  
    const contextValue = {
    productsHis,
      productsHistory,
  }

  return (
    <AuthContex.Provider value={contextValue}>
      {children}
    </AuthContex.Provider>
  )
}

export default AuthProvider







