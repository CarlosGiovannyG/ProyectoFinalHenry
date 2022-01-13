import React from 'react';
import Modal from '../../Components/Modal/Modal';
import useModal from '../../Hooks/useModal';
import ChangePassword from './Components/ChangePassword/ChangePassword';
import imageDefault from '../../img/male_avatar.svg'
import styles from './account.module.css';
import DeleteAccount from './Components/DeleteAccount/DeleteAccount';
import EditAccount from './Components/EditAccount/EditAccount';
import Transsition from '../../Hooks/Transsition';

const AccountPage = () => {
  const [isOpenChangePassword, openChangePassword, closeChangePassword] = useModal();
  const [isOpenDeleteAccount, openDeleteAccount, closeDeleteAccount] = useModal();
  const [isOpenEditAccount, openEditAccount, closeEditAccount] = useModal();

  return (
    <div className={styles.container} >
      <div className={styles.containerCentro}>
        <div className={styles.containerImage}>
          <img src={imageDefault} alt='profile' className={styles.profile} />
        </div>
        <div className={styles.containerInfo}>
          <p className="text-center"><b>Nombre:</b>Carlos</p>
          <p className="text-center"><b>Correo:</b>carlos@carlos.com</p>
          <p className="text-center"><b>Teléfono:</b>3043912387</p>
          <p className="text-center"><b>Rol:</b>User</p>
        </div>
        <div className={styles.containerBotones}>
          <button className={styles.ButtonEdit} onClick={openEditAccount}>EDIT ACCOUNT</button>
          <button className={styles.ButtonChange} onClick={openChangePassword}>CHANGE PASSWORD</button>
          <button className={styles.ButtonDelete} onClick={openDeleteAccount}>DELETE ACCOUNT</button>
        </div>
      </div>

        <Transsition>
      <Modal isOpen={isOpenChangePassword} closeModal={closeChangePassword}>
        <ChangePassword />
      </Modal>
        </Transsition>
      <Modal isOpen={isOpenDeleteAccount} closeModal={closeDeleteAccount}>
        <Transsition>
        <DeleteAccount />
        </Transsition>
      </Modal>
      <Modal isOpen={isOpenEditAccount} closeModal={closeEditAccount}>
        <Transsition>
        <EditAccount />
        </Transsition>
      </Modal>
    </div>
  )
}

export default AccountPage
