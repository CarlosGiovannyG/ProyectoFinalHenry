import { createContext } from 'react';
import React from 'react'
import { useState } from 'react';

export const AuthContex = createContext();


const AuthProvider = ({ children }) => {
  const [modalAllBills, setModalAllBills] = useState(false);
  const [modalCreateBill, setModalCreateBill] = useState(false)
  const onpenModal = caso => {
    (caso === 'allBills') && setModalAllBills(!modalAllBills);
    (caso === 'createBill') && setModalCreateBill(!modalCreateBill);

  }

  const contextValue = {
    modalAllBills,
    onpenModal,
    modalCreateBill,
  }

  return (
    <AuthContex.Provider value={contextValue}>
      {children}
    </AuthContex.Provider>
  )
}

export default AuthProvider







