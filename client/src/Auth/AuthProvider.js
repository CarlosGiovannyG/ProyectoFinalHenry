import { createContext } from 'react';
import React from 'react'
import { useState } from 'react';

export const AuthContex = createContext();


const AuthProvider = ({ children }) => {
  const [modalAllBills, setModalAllBills] = useState(false);
  const [modalCreateBill, setModalCreateBill] = useState(false);
  const [kitchenDeatil, setKitchenDeatil] = useState(false);
  const [billKitchenDetail, setBillKitchenDetail] = useState(null)

  const openCloseModal = (caso , idBill) => {
    (caso === 'allBills') && setModalAllBills(!modalAllBills);
    (caso === 'createBill') && setModalCreateBill(!modalCreateBill);
    if (caso === 'kitchenDeatil') {
      setKitchenDeatil(!billKitchenDetail)
      setBillKitchenDetail(idBill)
    };
    if (caso === 'kitchenDeatilClose') {
      setBillKitchenDetail(idBill)
      setKitchenDeatil(false)
    };

  }

  const contextValue = {
    modalAllBills,
    openCloseModal,
    modalCreateBill,
    kitchenDeatil,
    billKitchenDetail,
  }

  return (
    <AuthContex.Provider value={contextValue}>
      {children}
    </AuthContex.Provider>
  )
}

export default AuthProvider







