import React from "react";
import s from './OrderSubmit.module.css';

export default function OrderSubmit({ total, subTotal, handleSubmit }) {

    return (
        <div className={s.container}>
            <div className={s.header}>
                <p className={s.subtotal} >SUBTOTAL: ${subTotal}</p>
                <p className={s.total}>TOTAL: ${total}</p>
            </div>
            <div className={s.btn} onClick={handleSubmit} >CONFIRM</div>
        </div>
    )

}