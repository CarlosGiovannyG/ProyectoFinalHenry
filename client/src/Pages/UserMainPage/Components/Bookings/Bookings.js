import React from "react";
import s from './Bookings.module.css';

export default function Bookings(){
    const [salon, setSalon] = React.useState(true);

    return(
        <div className={s.container}>
            <p>Bookings Component</p>
        </div>
        
    )

}