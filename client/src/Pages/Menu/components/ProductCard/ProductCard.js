import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css"

export const ProductCard = ({ product, modalControl, productId }) => {


    return (
        <div
            className={styles.cardContainer}
            style={{ backgroundImage: "url(" + product.image + ")" }}
            onClick={() => {
                modalControl()
                productId(product._id)
            }}
        >
            <h4 className={styles.title} >{product.name}</h4>
        </div>
    );
};