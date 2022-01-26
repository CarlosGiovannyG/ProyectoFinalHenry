import React, { useEffect } from "react";
import s from './Bookings.module.css';
import { Switch } from 'antd';
import Salon from './Components/Salon';
import Delivery from './Components/Delivery';
import Transsition from '../../../../Hooks/Transsition';
import useAuth from "../../../../Auth/useAuth";

export default function Bookings({ address, setDisplaySubmit }) {

    const { btnValidate} = useAuth();

    const [toggle, setToggle] = React.useState(false);

    useEffect(async() => {

        if (localStorage.getItem('tipoDePedido') === 'salon' ){
            setToggle(false);
            setDisplaySubmit(prev=>({...prev, tipo: 'salon'}))
        }
        if (localStorage.getItem('tipoDePedido') === 'domicilio' ){
            setToggle(true);
            setDisplaySubmit(prev=>({...prev, tipo: 'domicilio'}))
        }
        if (!(localStorage.getItem('tipoDePedido'))){
            setToggle(false);
            localStorage.setItem('tipoDePedido', 'salon')
            setDisplaySubmit(prev=>({...prev, tipo: 'salon'}))
        }
        
    }, []);


    const handleToggle = function () {
        
        toggle ? setToggle(false) : setToggle(true);

        if(toggle){
            localStorage.setItem('tipoDePedido', 'salon');
            setDisplaySubmit(prev=>({...prev, tipo: 'salon'}))
        }else{
            localStorage.setItem('tipoDePedido', 'domicilio');
            setDisplaySubmit(prev=>({...prev, tipo: 'domicilio'}))
        }
        
        
    }


    return (
        <div className={s.container}>
            <div className={s.header}>
                <h3 className={!toggle ? s.titleOn : s.titleOff} >SALON</h3>
                <h3 className={s.title} >/</h3>
                <h3 className={toggle ? s.titleOn : s.titleOff} >DELIVERY</h3>
                <Switch className={s.toggle} onClick={handleToggle} checked={toggle} />

            </div>
            <div className={s.modules} >

                {
                    !toggle && (<Transsition><Salon setDisplaySubmit={setDisplaySubmit} /></Transsition>)
                }
                {
                    toggle && (<Transsition><Delivery address={address} setDisplaySubmit={setDisplaySubmit} /></Transsition>)
                }
            </div>
        </div>

    )

}