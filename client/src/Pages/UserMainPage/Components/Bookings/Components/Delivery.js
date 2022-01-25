import React from "react";
import s from './Delivery.module.css';

export default function Delivery({ address }) {
    return (
        <div className={s.container}>
            {address &&
                address.map(d => (
                    <div className={s.item} >{d.description}</div>

                ))
            }
            <div className={s.item} onClick={'abrir el modal de agregar direccion del perfil'} >NEW ADRESS</div>
        </div>)
}