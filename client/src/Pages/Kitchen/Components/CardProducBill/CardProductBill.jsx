import React from 'react'
import styles from './cardProductBill.module.css';



const CardProductBill = ({ dato}) => {
  console.log('object',dato.name);
  return (
    <div className={styles.container}>
      <p>{dato.name}</p>
    </div>
  )
}

export default CardProductBill
