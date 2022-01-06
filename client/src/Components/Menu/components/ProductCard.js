import React from "react";
import "../styles/ProductCard.css";

export const ProductCard = ({title}) => {
    return (
        <div className="card-container">
            <h4>{title}</h4>
            <div className="line"></div>
        </div>
    );
};