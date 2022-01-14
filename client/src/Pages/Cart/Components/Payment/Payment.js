import React from "react";
import s from './Payment.module.css';


export default function Payment(){

    return(

        <div className={s.container}>
            <div className={s.header}>
                <h3 className={s.title} >PAYMENT</h3>
            </div>
                <div className={s.item} >VISA XXXX XXXX 0954</div>
                <div className={s.item} onClick={'abrir el modal de agregar metodo de pago del perfil'} >NEW CARD</div>
        </div>
    )

}