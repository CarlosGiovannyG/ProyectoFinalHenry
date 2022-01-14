import React from 'react';
import s from './Card.module.css';



export default function Card({setProductID,openModalProduct,product}) {
    return(
        <div
        onClick={()=>{
            openModalProduct();
            setProductID(product._id);
        }}
        className={s.cardContainer}
        style={{ backgroundImage: "url(" + product.image + ")" }}
        >
            <h4 className={s.title} >{product.name}</h4>
        </div>
    )
}