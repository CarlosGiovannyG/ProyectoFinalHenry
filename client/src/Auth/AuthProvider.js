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
  const [user, setUser] = useState(null)

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



  const login = async (object) => {

    let responseLogin = await axios.post(`${URL_USERS}/login`, object);
    if (responseLogin.status === 200) {
      const { message, token } = responseLogin.data
      localStorage.setItem('token', token)

      let responseAccess = await axios.post(`${URL_USERS}/access`, {}, {
        headers: {
          'Authorization': token
        }
      })

      const { userId, rool } = responseAccess.data


      localStorage.setItem('login', true)
      localStorage.setItem('userId', userId)
      localStorage.setItem('rool', rool)

      let responseUser = await axios.get(`${URL_USERS}/${userId}`,
        {
          headers: {
            Authorization: `${localStorage.getItem('token')}`
          }
        });
      const { addres, avatar, email, id, image, last_name, name, phone, username } = responseUser.data
      setUser({
        addres: addres,
        avatar: avatar,
        email: email,
        name: name,
        phone: phone,
        username: username,
        id: id,
        image: image,
        last_name: last_name,
        rool: rool,
      })
      return { message }
    } else {
      let status = responseLogin.status
      const { message } = responseLogin.data
      return { message, status }
    }
  }

  const userById = async (userId) => {

    let responseUser = await axios.get(`${URL_USERS}/${userId}`,
      {
        headers: {
          Authorization: `${localStorage.getItem('token')}`
        }
      });


    // const { addres, avatar, email, id, image, last_name, name, phone, rool, username } = responseUser.data


    return responseUser.data
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
    login,
    isLogged,
    userById,
    user,
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







