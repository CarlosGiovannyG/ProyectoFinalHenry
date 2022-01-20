import { createContext } from 'react';
import React from 'react'
import { useState } from 'react';



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
  const hasRole = (role) => localStorage.getItem('rool') === role;

  const contextValue = {
    openCloseModal,
    kitchenDeatil,
    billKitchenDetail,

    URL_USERS,
    isLogged,
    hasRole,
  }

  return (
    <AuthContex.Provider value={contextValue}>
      {children}
    </AuthContex.Provider>
  )
}

export default AuthProvider
