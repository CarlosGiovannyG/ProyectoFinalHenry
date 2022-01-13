import React from 'react';
import Closed from '../../Hooks/Closed';
import styles from './modal.module.css'

const Modal = ({ children, isOpen, closeModal }) => {
  const handlePropagation = e => e.stopPropagation();
  return (
    <article className={isOpen ? styles.isOpen : styles.modal} onClick={closeModal}>
      <div className={styles.container} onClick={handlePropagation}>
        <Closed style={styles.close} size='1.8rem' click={closeModal} />
        {children}
      </div>
    </article>
  )
}

export default Modal
