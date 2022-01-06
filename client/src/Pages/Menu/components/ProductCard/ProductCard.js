import React from "react";


import styles from "./ProductCard.module.css"

export const ProductCard = ({  products }) => {

    return (
        <div className={styles.cardContainer}>
            {products.map(product => (
                <h3 key={product.id}>{ product.name }</h3>
            ))}
            <div className="line"></div>
        </div>
    );
};