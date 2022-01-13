import React from 'react'
import styles from './cardProductBill.module.css';



const CardProductBill = ({ dato}) => {
  return (
    <div className={styles.container}>
      <p>{dato.name}</p>
    </div>
  )
}

export default CardProductBill
