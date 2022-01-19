import { createContext } from 'react';
import React from 'react'
import { useState } from 'react';
import axios from 'axios'



export const AuthContex = createContext();



const AuthProvider = ({ children }) => {
  const URL_USERS = 'http://localhost:5002/users'
  const [modalAllBills, setModalAllBills] = useState(false);
  const [kitchenDeatil, setKitchenDeatil] = useState(false);
  const [billKitchenDetail, setBillKitchenDetail] = useState(null)

  const openCloseModal = (caso, idBill) => {
    (caso === 'allBills') && setModalAllBills(!modalAllBills);
    if (caso === 'kitchenDeatil') {
      setKitchenDeatil(!billKitchenDetail)
      setBillKitchenDetail(idBill)
    };
    if (caso === 'kitchenDeatilClose') {
      setBillKitchenDetail(idBill)
      setKitchenDeatil(false)
    };

  }

  const updateUser = (data) => {

  }

  const isLogged = () => localStorage.getItem('login');
  const hasRole = (role) => localStorage.getItem('rool') === role;

  const contextValue = {
    modalAllBills,
    openCloseModal,
    kitchenDeatil,
    billKitchenDetail,

    URL_USERS,
    isLogged,
    hasRole,
    updateUser,
  }

  return (
    <AuthContex.Provider value={contextValue}>
      {children}
    </AuthContex.Provider>
  )
}

export default AuthProvider
