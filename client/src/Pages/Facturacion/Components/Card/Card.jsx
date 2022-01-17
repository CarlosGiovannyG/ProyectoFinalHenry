import React from 'react';
import styles from './card.module.css'
import useAuth from '../../../../Auth/useAuth';



const Card = ({ option }) => {
  


  return (
    <div className={styles.container}>
      
      <div className={styles.containerCentro}>
        <div className={styles.title}> {option.span}</div>
      <div className={styles.title}> {option.title}</div>
      </div>
    </div>
  )
}

export default Card
