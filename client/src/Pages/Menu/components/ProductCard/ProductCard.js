import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css"

export const ProductCard = ({ product, modalControl, productId }) => {


    return (
        <div
            className={styles.cardContainer}
            onClick={() => {
                modalControl()
                productId(product._id)
            }}
        >
           <div style={{ backgroundImage: "url(" + product.image + ")"}} className={styles.image}/> 
            <h4 className={styles.title} >{product.name}</h4>
        </div>
    );
};