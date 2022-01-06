import React from "react";


import styles from "./ProductCard.module.css"

export const ProductCard = ({  products }) => {

    return (
        <div className={styles.cardContainer}>
            {products.map(product => (
                <div key={product.id}>
                    <img className={styles.Image} src={product.image} alt={product.name} key={product.id} />
                    <h3 key={product.id}>{product.name}</h3>
                </div>
                
            ))}
            <div className="line"></div>
        </div>
    );
};