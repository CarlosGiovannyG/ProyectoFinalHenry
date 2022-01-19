import React, { useEffect } from 'react';
import Modal from '../../Components/Modal/Modal';
import useModal from '../../Hooks/useModal';
import ChangePassword from './Components/ChangePassword/ChangePassword';
import imageDefault from '../../img/male_avatar.svg'
import styles from './account.module.css';
import DeleteAccount from './Components/DeleteAccount/DeleteAccount';
import EditAccount from './Components/EditAccount/EditAccount';
import Transsition from '../../Hooks/Transsition';
import ProfilePic from './Components/ProfilePic/ProfilePic';
import Loading from '../../Components/Loading/Loading';
import { useLazyQuery } from '@apollo/client';
import Queries from '../../Utils/Queries';
import useAuth from '../../Auth/useAuth';
import toast from 'react-hot-toast';



const AccountPage = () => {
  const [UserById, { loading, error, data }] = useLazyQuery(Queries.USER_BY_ID);
  const userId = localStorage.getItem('userId')
  const [isOpenChangePassword, openChangePassword, closeChangePassword] = useModal();
  const [isOpenDeleteAccount, openDeleteAccount, closeDeleteAccount] = useModal();

  const [isOpenEditAccount, openEditAccount, closeEditAccount] = useModal();

  const [isOpenProfilePic, openProfilePic, closeProfilePic] = useModal();

  useEffect(() => {
    UserById({ variables: { input: { id: `${userId}` } } })
  }, [UserById, userId])

  if (loading) {
    return <div >

    </div>

  }
  if (error) {
    return <div className={styles.error}>
      <p></p>
    </div>
  }
  if (data && !loading) {
    const { UserById } = data

    if (UserById.message) {
      toast.error(UserById.message)
    } else {
      return (
        <div className={styles.container} >
          <div className={styles.containerCentro}>
            <div className={styles.containerImage}>
              <img
                src={UserById?.image || UserById?.avatar || imageDefault}
                alt='profile'
                className={styles.profile}
                onClick={openProfilePic}
              />
            </div>
            <div className={styles.containerInfo}>
              <p className="text-center"><b>Nombre de Usuario:</b>{UserById.username}</p>
              <p className="text-center"><b>Nombre:</b>{UserById.name}</p>
              <p className="text-center"><b>Apellido:</b>{UserById.last_name}</p>
              <p className="text-center"><b>Email:</b>{UserById.email}</p>
              <p className="text-center"><b>Telefono:</b>{UserById.phone}</p>
              <p className="text-center"><b>Direccion:</b>{UserById.addres}</p>
              <p className="text-center"><b>Rol:</b>{UserById.rool}</p>
            </div>
            <div className={styles.containerBotones}>
              <button className={styles.ButtonEdit} onClick={openEditAccount}>EDIT ACCOUNT</button>
              <button className={styles.ButtonChange} onClick={openChangePassword}>CHANGE PASSWORD</button>
              <button className={styles.ButtonDelete} onClick={openDeleteAccount}>DELETE ACCOUNT</button>
            </div>
          </div>

          <Transsition>
            <Modal isOpen={isOpenChangePassword} closeModal={closeChangePassword}>
              <ChangePassword userId={userId} close={closeChangePassword} />
            </Modal>
          </Transsition>
          <Modal isOpen={isOpenEditAccount} closeModal={closeEditAccount}>
            <Transsition>
              <EditAccount user={UserById} close={closeEditAccount} />
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

  }
  return (
    <div className={styles.loading}>
      <p></p>
    </div>
  )
}

export default AccountPage
