import { createContext } from 'react';
import React from 'react'
import { useState } from 'react';
import jwt_decode from "jwt-decode";



export const AuthContex = createContext();



const AuthProvider = ({ children }) => {
  const URL_USERS = 'http://localhost:5002/users'
  const [kitchenDeatil, setKitchenDeatil] = useState(false);
  const [billKitchenDetail, setBillKitchenDetail] = useState(null)

  const openCloseModal = (caso, idBill) => {
    if (caso === 'kitchenDeatil') {
      setKitchenDeatil(!billKitchenDetail)
      setBillKitchenDetail(idBill)
    };
    if (caso === 'kitchenDeatilClose') {
      setBillKitchenDetail(idBill)
      setKitchenDeatil(false)
    };

  }

  const isLogged = () => localStorage.getItem('login');


  const token = localStorage.getItem('token');
  let decoded = token && jwt_decode(token);

  const hasRole = (role) => decoded?.rol === role;

  const userId = () => decoded.sub;


  const contextValue = {
    openCloseModal,
    kitchenDeatil,
    billKitchenDetail,

    URL_USERS,
    isLogged,
    hasRole,
    userId,
  }

  return (
    <AuthContex.Provider value={contextValue}>
      {children}
    </AuthContex.Provider>
  )
}

export default AuthProvider
