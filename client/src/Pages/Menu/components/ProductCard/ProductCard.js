import React from "react";
import { Link } from 'react-router-dom'



import styles from "./ProductCard.module.css"

export const ProductCard = ({  products }) => {

    return (
        <div className={styles.cardContainer}>
            {products.map(product => (
                
                <div key={product._id}>
                
                    <img className={styles.Image} src={product.image} alt={product.name} key={product._id} />
                    <h3 key={product._id}>{product.name}</h3>
            <div className={styles.line}>
            <Link to={`/product/${product._id}`} >
                <button className={styles.line}>VISITAR</button>
            </Link>
            </div>
                </div>
                
            ))}
        </div>
    );
};