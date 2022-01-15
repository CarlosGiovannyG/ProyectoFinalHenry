import { createContext } from 'react';
import React from 'react'
import { useState } from 'react';

export const AuthContex = createContext();


const AuthProvider = ({ children }) => {
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

  //TODO LOGIN RECIBO TOKEN
  //TODO VOY ABACK I COMPRUEBO TOKEN RECIBO ID MESSAGE EXITO

  const [user, setUser] = useState(null);

  const login = (credencials) => {
    setUser({
      id: 1,
      name: 'Carlos',
      email: 'cggualtero@hotmail.com',
      phone: '3043912387',
      role: 'regular' //TODO: 'cashier'  'regular' 
    })
  }

  const updateUser = (data) => {
    setUser({
      ...user,
      ...data,
    })
  }
  const isLogged = () => !!user;
  const logout = () => setUser(null);
  const hasRole = (role) => user?.role === role;

  const contextValue = {
    modalAllBills,
    openCloseModal,
    kitchenDeatil,
    billKitchenDetail,

    user,
    login,
    isLogged,
    logout,
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







