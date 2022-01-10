import React from 'react';
import { GrClose } from 'react-icons/gr';
import useAuth from '../../../../Auth/useAuth';
import CardProductKitchen from '../CardProductKitchen/CardProductKitchen';
import styles from './cardKitchen.module.css'

const CardKitchen = ({ info, infoKitchen, close }) => {

  const { openCloseModal } = useAuth();

  return (
    <>

      {info &&
        <div className={styles.container}>
          <div className={styles.containerCentro}>
            <div className={styles.title}> {info.description}</div>
            <div className={styles.title}>Mesa #: {info.numeroMesa}</div>
            <div className={styles.title}>Status: {info.statusCocina}</div>
            <div className={styles.title}>Entrega en: {info.tipoDePedido}</div>
            <div className={styles.title}>Fecha creación: {info.date}</div>
            <div className={styles.title}>Hora de entrega: </div>
            <button className={styles.Button} onClick={() => openCloseModal('kitchenDeatil', info._id)}>Ver Detalles</button>
          </div>
        </div>
      }
      {infoKitchen &&
        <div className={styles.containerModal}>
          <GrClose size='2.5rem' className={styles.close} onClick={() => close('kitchenDeatilClose',null)} />
          <div className={styles.containerCentro}>
            <div className={styles.title}> {infoKitchen.description}</div>
            <div className={styles.title}>Mesa #: {infoKitchen.numeroMesa}</div>
            <div className={styles.title}>Status: {infoKitchen.statusCocina}</div>
            <div className={styles.title}>Entrega en: {infoKitchen.tipoDePedido}</div>
            <div className={styles.title}>Fecha creación: {infoKitchen.date}</div>
            <div className={styles.title}>Hora de entrega: </div>
          </div>
        </div>

      }
    </>
  )
}

export default CardKitchen
