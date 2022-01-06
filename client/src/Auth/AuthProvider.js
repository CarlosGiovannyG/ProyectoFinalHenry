import { createContext, useEffect, useState } from 'react';
import React from 'react';
import { useQuery } from '@apollo/client';
import Queries from '../Utils/Queries';

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {

  //const { loading, data, error } = useQuery(Queries.ALL_PRODUCTS);
  //const {allProducts } = data
  
  
  
//console.log('PROVIDER', allProducts);
  
  const constextValue = {
    
  };
  
  //if(error) return null;
  return (
    <AuthContext.Provider value={constextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
