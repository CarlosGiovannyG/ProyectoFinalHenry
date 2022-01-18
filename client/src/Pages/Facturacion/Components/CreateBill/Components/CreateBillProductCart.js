import React from "react";
import s from './CreateBillProductCard.module.css';
import Transsition from '../../../../../Hooks/Transsition';

export default function CreateBillProductCard({name, setNewBill, newBill, index}){

    const handleButton = function(e){
        e.preventDefault();

        // let indexB = productsCart.findIndex(product => product._id === id);
        // productsCart = productsCart.filter((product, index) => index !== indexB)

        let newProducts = newBill.products.filter((product, ind) => ind !== index)
        setNewBill((prev)=>({...prev, products: newProducts}));
    }

    return (
        <Transsition>
            <div className={s.container}>
                <div className={s.title}>{name}</div>
                <button onClick={handleButton} className={s.btn}>X</button>
            </div>
        </Transsition>
    )
}