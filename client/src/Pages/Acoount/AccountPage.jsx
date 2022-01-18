import React from 'react';
import Modal from '../../Components/Modal/Modal';
import useModal from '../../Hooks/useModal';
import ChangePassword from './Components/ChangePassword/ChangePassword';
import imageDefault from '../../img/male_avatar.svg'
import styles from './account.module.css';
import DeleteAccount from './Components/DeleteAccount/DeleteAccount';
import EditAccount from './Components/EditAccount/EditAccount';
import Transsition from '../../Hooks/Transsition';
import useAuth from '../../Auth/useAuth';
import ProfilePic from './Components/ProfilePic/ProfilePic';
import Loading from '../../Components/Loading/Loading';

const AccountPage = () => {
  const { user } = useAuth();
  const [isOpenChangePassword, openChangePassword, closeChangePassword] = useModal();
  const [isOpenDeleteAccount, openDeleteAccount, closeDeleteAccount] = useModal();
  const [isOpenEditAccount, openEditAccount, closeEditAccount] = useModal();
  const [isOpenProfilePic, openProfilePic, closeProfilePic] = useModal();


  return (

    <div className={styles.container} >
      {!user ? (<Loading />) : (<div className={styles.containerCentro}>
        <div className={styles.containerImage}>
          <img
            src={user?.image || user?.avatar || imageDefault}
            alt='profile'
            className={styles.profile}
            onClick={openProfilePic}
          />
        </div>
        <div className={styles.containerInfo}>
          <p className="text-center"><b>Nombre de Usuario:</b>{user.username}</p>
          <p className="text-center"><b>Nombre:</b>{user.name}</p>
          <p className="text-center"><b>Apellido:</b>{user.last_name}</p>
          <p className="text-center"><b>Email:</b>{user.email}</p>
          <p className="text-center"><b>Telefono:</b>{user.phone}</p>
          <p className="text-center"><b>Direccion:</b>{user.addres}</p>
          <p className="text-center"><b>Rol:</b>{user.rool}</p>
        </div>
        <div className={styles.containerBotones}>
          <button className={styles.ButtonEdit} onClick={openEditAccount}>EDIT ACCOUNT</button>
          <button className={styles.ButtonChange} onClick={openChangePassword}>CHANGE PASSWORD</button>
          <button className={styles.ButtonDelete} onClick={openDeleteAccount}>DELETE ACCOUNT</button>
        </div>
      </div>)

      }

      <Transsition>
        <Modal isOpen={isOpenChangePassword} closeModal={closeChangePassword}>
          <ChangePassword />
        </Modal>
      </Transsition>
      <Modal isOpen={isOpenEditAccount} closeModal={closeEditAccount}>
        <Transsition>
          <EditAccount user={user} close={closeEditAccount} />
        </Transsition>
      </Modal>
      <Modal isOpen={isOpenDeleteAccount} closeModal={closeDeleteAccount}>
        <Transsition>
          <DeleteAccount close={closeDeleteAccount} />
        </Transsition>
      </Modal>
      <Modal isOpen={isOpenProfilePic} closeModal={closeProfilePic}>
        <Transsition>
          <ProfilePic close={closeProfilePic} />
        </Transsition>
      </Modal>
    </div>
  )
}

export default AccountPage
