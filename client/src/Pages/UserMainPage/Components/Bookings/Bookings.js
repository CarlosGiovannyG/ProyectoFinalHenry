import React from "react";
import s from './Bookings.module.css';
import { Switch } from 'antd';
import Salon from './Components/Salon';
import Delivery from './Components/Delivery';
import Transsition from '../../../../Hooks/Transsition';


export default function Bookings(){
    const [toggle, setToggle] = React.useState(false);

    const handleToggle = function(){
        toggle ? setToggle(false) : setToggle(true);
    }

    return(
        <div className={s.container}>
            <div className={s.header}>
                <h3 className={s.title} >SALON / DELIVERY</h3>
                <Switch className={s.toggle} onClick={handleToggle}/>
            </div>
            <div className={s.modules} >
                
                {
                    !toggle && (<Transsition><Salon/></Transsition>)
                }
                {
                    toggle && ( <Transsition><Delivery/></Transsition>)
                }
            </div>
        </div>
        
    )

}