import React from 'react';
import styles from './card.module.css'
import useAuth from '../../../../Auth/useAuth';



const Card = ({ option }) => {
  
  const { openCloseModal } = useAuth();


  return (
    <div className={styles.container}>
      
      <div className={styles.containerCentro} onClick={() => openCloseModal(`${option.caso}`)}>
        <div className={styles.title}> {option.span}</div>
      <div className={styles.title}> {option.title}</div>
      </div>
    </div>
  )
}

export default Card
