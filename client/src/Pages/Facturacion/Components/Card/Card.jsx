import React from 'react';
import styles from './card.module.css'
import useAuth from '../../../../Auth/useAuth';



const Card = ({ option }) => {
  
  const { onpenModal } = useAuth();


  console.log(onpenModal);


  return (
    <div className={styles.container}>
      
      <div className={styles.containerCentro} onClick={() => onpenModal(`${option.caso}`)}>
        <div className={styles.title}> {option.span}</div>
      <div className={styles.title}> {option.title}</div>
      </div>
    </div>
  )
}

export default Card

//   < div
// className = { styles.cardContainer }
// style = {{ backgroundImage: "url(" + product.image + ")" }}
// onClick = {() => navigate("/product/" + product._id)}
//         >
//                 <h4>{product.name}</h4>
//             <div className={styles.line}></div>
//         </ >