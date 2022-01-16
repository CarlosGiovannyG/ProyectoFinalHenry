import React from 'react';
import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import useAuth from '../../../../Auth/useAuth';
import CardProductBill from '../CardProducBill/CardProductBill';
import CardProductKitchen from '../CardProductKitchen/CardProductKitchen';
import styles from './cardKitchen.module.css';
import Transsition from '../../../../Hooks/Transsition';

const CardKitchen = ({ info, infoKitchen, close }) => {
  const [ready, setReady] = React.useState(false);

  const { openCloseModal } = useAuth();

  const handleButton = function(){
    setReady(!ready);
  }

  return (
    <Transsition>
        <div className={styles.container}>
          <div className={styles.containerHeader}>
            <div className={styles.titles}>
              <div className={styles.table}>TABLE {info.numeroMesa}</div>
              <div className={styles.type}>{info.tipoDePedido}</div>
            </div>
            <div className={styles.containerBotones}>
              <GrClose size={'2rem'} className={styles.btnCancel} onClick={() => close('kitchenDeatilClose', null)} />
            </div>
          </div>
          <div className={styles.containerProduct}>
            {info.products.map(dato => (
              <CardProductBill dato={dato} />
            ))}
          </div>
          <div className={styles.btnCloseContainer}>
            
            {
              !ready && <Transsition><button className={styles.btnClose} onClick={handleButton}  >MARK AS READY</button></Transsition>
            }
            {
              ready && <Transsition><button className={styles.btnClose} onClick={handleButton} >READY</button></Transsition>
            }
            
          </div>
        </div>
        </Transsition>

      //* {infoKitchen &&
      //   <div className={styles.containerModal}>
      //     <GrClose size='2.5rem' className={styles.close}  />
      //     <div className={styles.containerCentro}>
      //       <div className={styles.title}> {infoKitchen.description}</div>
      //       <div className={styles.title}>Mesa #: {infoKitchen.numeroMesa}</div>
      //       <div className={styles.title}>Status: {infoKitchen.statusCocina}</div>
      //       <div className={styles.title}>Entrega en: {infoKitchen.tipoDePedido}</div>
      //       <div className={styles.title}>Fecha creación: {infoKitchen.date}</div>
      //       <div className={styles.title}>Hora de entrega: </div>
      //     </div>
      //   </div>
      // }

  )
}

export default CardKitchen
