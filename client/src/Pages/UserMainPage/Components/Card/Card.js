import React from 'react';
import s from './Card.module.css';



export default function Card({setProductID,openModalProduct,product}) {
    return(
        <div
        onClick={()=>{
            openModalProduct();
            setProductID(product.id);
        }}
        className={s.cardContainer}
        style={{ backgroundImage: "url(" + product.img + ")" }}
        >
            <h4 className={s.title} >{product.name}</h4>
        </div>
    )
}