import React from 'react';
import s from './Card.module.css';



export default function Card({ setProductID, openModalProduct, product }) {
    return (
        <div
            className={s.cardContainer}
            onClick={() => {
                openModalProduct()
                setProductID(product._id)
            }}
        >
           <div style={{ backgroundImage: "url(" + product.image + ")"}} className={s.image}/> 
            <h4 className={s.title} >{product.name}</h4>
        </div>
    )
}