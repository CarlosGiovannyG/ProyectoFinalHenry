import React, { useEffect } from "react";
import s from './Bookings.module.css';
import { Switch } from 'antd';
import Salon from './Components/Salon';
import Delivery from './Components/Delivery';
import Transsition from '../../../../Hooks/Transsition';


export default function Bookings({ address }) {
    const [toggle, setToggle] = React.useState(false);



    const handleToggle = function () {
        toggle ? setToggle(false) : setToggle(true);
        localStorage.setItem('tipoDePedido', 'domicilio')

    }

    return (
        <div className={s.container}>
            <div className={s.header}>
                <h3 className={!toggle ? s.titleOn : s.titleOff} >SALON</h3>
                <h3 className={s.title} >/</h3>
                <h3 className={toggle ? s.titleOn : s.titleOff} >DELIVERY</h3>
                <Switch className={s.toggle} onClick={handleToggle} />

            </div>
            <div className={s.modules} >

                {
                    !toggle && (<Transsition><Salon /></Transsition>)
                }
                {
                    toggle && (<Transsition><Delivery address={address} /></Transsition>)
                }
            </div>
        </div>

    )

}