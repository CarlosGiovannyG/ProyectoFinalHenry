import React, { useRef } from 'react';
import { useState } from 'react';
import useAuth from '../../../../Auth/useAuth';
import toast from 'react-hot-toast';
import styles from './profilePic.module.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import routes from '../../../../Helpers/Routes'




const ProfilePic = ({ close, userId }) => {

  const navigate = useNavigate();
  const inputFileRef = useRef()
  const formData = new FormData()
  const { URL_USERS } = useAuth();
  const [fileName, setFileName] = useState('Subir Imagen')
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = (e) => {
    const [file] = e.target.files
    const sizeImage_50MB = 25 * 512 * 512;
    const isValidSize = file.size < sizeImage_50MB
    const isNameOfOneImageRegEx = /.(jpe?g|gif|png)$/i;
    const isValidType = isNameOfOneImageRegEx.test(file.name);

    if (!isValidSize) return toast.error('El máximo es de 25MB')
    if (!isValidType) return toast.error('Solo se permiten imagenes')

    setFileName(file.name)
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedFile(reader.result)
    }
    reader.readAsDataURL(file)
  }

  const handleCancel = () => {

    setFileName('Subir Imagen')
    setSelectedFile(null)
    close()
    navigate(`${routes.home}`)

  }


  const handleUpdateProfilePic = async () => {

    if (!selectedFile) return toast.error('Debes seleccionar una imagen');

    const image = inputFileRef.current.files[0];
    formData.append('image', image)

    const response = await axios({
      url: `${URL_USERS}/${userId()}/image`,
      method: 'POST',
      data: formData,
    })

    const { message } = response.data
    toast.success(message)
    setFileName('Subir Imagen')
    setSelectedFile(null)
    close()


  }

  return (
    <div className={styles.container} >
      <div>
        <h1 className={styles.title}>Change Profile Picture</h1>
      </div>
      <form>
        <div>
          <label className={styles.LabePic} for="picture">{fileName}</label>
          <input
            type="file"
            id="picture"
            ref={inputFileRef}
            accept='.jpg, .jpeg, .gif, .png'
            className={styles.PicturInput}
            onChange={handleFileChange}
          />
        </div>
      </form>
      {selectedFile &&

        // TODO: PREVISUALIZACION DE IMAEN CARGADA
        <img
          className={styles.picture}
          src={selectedFile}
          alt='profile-previw'
        />
      }
      <div className={styles.containerBotones} >
        <button className={styles.ButtonCancel} onClick={handleCancel} >CANCEL</button>
        <button
          className={styles.ButtonConfir}
          onClick={handleUpdateProfilePic}
        >CONFIRM IMAGE</button>
      </div>
    </div>
  )
}

export default ProfilePic
