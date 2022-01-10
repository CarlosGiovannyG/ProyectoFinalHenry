import React from 'react';
import { GrClose } from 'react-icons/gr';
import SwiperComments from '../../../../Components/Swiper/Swiper';
import styles from './cardProductKitchen.module.css'

const CardProductKitchen = ({ close, infoKitchenBill}) => {
  return (
    <div className={styles.container}>
      <GrClose size='2.5rem' className={styles.close} onClick={() => close('kitchenDeatilClose', null)} />
      <div className={styles.containerCentro}>
        <SwiperComments infoKitchenBill={infoKitchenBill} />
      </div>
    </div>
  )
}

export default CardProductKitchen
