import React, { useState } from "react";
import s from './Salon.module.css';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import Queries from '../../../../../Utils/Queries';



export default function Salon() {

    const [booking, setBooking] = useState({ people: 1, date: new Date() })
    const [freeTables, setFreeTables] = useState(null);
    const [FreeTables] = useLazyQuery(Queries.FREE_TABLES);

    const handleInputChange = function (e) {
        setBooking(prev => ({ ...prev, [e.target.name]: e.target.value }))

        //let mesa = freeTables.filter(x => (x.cap === e.target.value || x.cap === e.target.value + 1));  //(x.cap === booking.people || x.cap === booking.people + 1)
        //console.log(freeTables, 'mesa arriba');
        // returnconsole.log(booking, 'mesa abajo');
        //console.log(mesa,'mesa');


    }

    const handleDateChange = async (e) => {
        // setBooking(prev => ({ ...prev, [e.target.name]: e.target.value }))


        let resultado = await FreeTables({
            variables: {
                "input": {
                    "fecha": `${booking.date}`
                }
            }
        })

        let tables = resultado.data.FreeTables.arrmesas
        //console.log(tables, 'llegada');
        //setFreeTables(tables)
        //consolefreeTables.map(t =>  console.log('MESA',t.mesa,'CAPACIDAD',t.cap))

    }





    return (
        <div className={s.container}>
            <div className={s.table}>
                <p className={s.label}>TABLE FOR </p>
                <input className={s.input1} type='number' min='1' max='50' name="people" value={booking.people} onChange={handleInputChange} />
            </div>
            <div className={s.date}>
                <p className={s.label}>DATE</p>
                <input className={s.input2} type="datetime-local" name='date' value={booking.date} onChange={handleInputChange} />
            </div>
        </div>
    )
}