import React from "react";
import s from './OrderSubmit.module.css';

export default function OrderSubmit(){

    return(
        <div className={s.container}>
            <div className={s.header}>
                <p className={s.subtotal} >SUBTOTAL: $3200</p>
                <p className={s.total}>TOTAL: $3350</p>
            </div>
            <div className={s.btn} onClick={'generar factura y enviar al back'} >CONFIRM</div>
        </div>
    )

}