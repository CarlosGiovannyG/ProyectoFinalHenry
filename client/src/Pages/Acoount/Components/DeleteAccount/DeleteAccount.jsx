import React from 'react'
import useAuth from '../../../../Auth/useAuth';

import styles from './deleteAccount.module.css'

const DeleteAccount = ({ close }) => {

  const { logout } = useAuth();

  const handleDelete = (e) => {
    e.preventDefault();

    logout();
    close()
  }

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Delete Account</h1>
      </div>
      <div className={styles.containerDialog}>
        <label className={styles.containerDialog}>
          Estas seguro de eliminar permanentemente tu cuenta?
          <br />
          <b>Se perderá toda tu información</b>

        </label>
      </div>
      <div className={styles.containerBotones} >
        <button className={styles.ButtonCancel} >CANCEL</button>
        <button
          className={styles.ButtonConfir}
          onClick={handleDelete}
        >DELETE ACCOUNT</button>
      </div>
    </div>
  )
}

export default DeleteAccount
