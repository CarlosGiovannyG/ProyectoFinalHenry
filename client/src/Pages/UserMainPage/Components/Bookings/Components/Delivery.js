import React from "react";
import s from './Delivery.module.css';

export default function Delivery(){
    return(
    <div className={s.container}>
        <div className={s.item} >Av. San Martin 2950, Palermo</div>
            <div className={s.item} onClick={'abrir el modal de agregar direccion del perfil'} >NEW ADRESS</div>
    </div>)
}