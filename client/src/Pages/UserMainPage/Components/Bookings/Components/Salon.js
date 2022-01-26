import React, { useState, useEffect } from "react";
import s from './Salon.module.css';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import Queries from '../../../../../Utils/Queries';
import Transsition from '../../../../../Hooks/Transsition';
import useAuth from "../../../../../Auth/useAuth";


export default function Salon() {

    const { btnValidate } = useAuth();

    const [booking, setBooking] = useState({date: localStorage.getItem('date')})
    const [freeTables, setFreeTables] = useState(null);
    const [FreeTables] = useLazyQuery(Queries.FREE_TABLES);
    const [dateSelected, setDateSelected] = useState(null); // Utilizo este estado para saber que se elegio una date y ahi renderizar la cantidad de personas
    const defaultDate = localStorage.getItem('date');

    useEffect(async() => {
        
        let resultado = await FreeTables({
            variables: {
                "input": {
                    "fecha": `${booking.date}`
                }
            }
        })

        let tables = resultado.data.FreeTables.arrmesas

        setFreeTables(tables);
        
    }, []);

    const handleDateChange = async (e) => {

        setDateSelected(e.target.value);  // Utilizo este estado para saber que se elegio una date y ahi renderizar la cantidad de personas

        setBooking(prev => ({ ...prev, [e.target.name]: e.target.value }))

        localStorage.setItem(`date`, e.target.value);

        let resultado = await FreeTables({
            variables: {
                "input": {
                    "fecha": `${booking.date}`
                }
            }
        })

        let tables = resultado.data.FreeTables.arrmesas

        setFreeTables(tables);

        

        //consolefreeTables.map(t =>  console.log('MESA',t.mesa,'CAPACIDAD',t.cap))

    }



    const renderInput = function () {
        const mesa = localStorage.getItem('mesa');
        const cap = localStorage.getItem('cap');

        return (
            <Transsition>
                <div className={s.table}>
                    <p className={s.label}>TABLE FOR </p>
                    <select
                        className={s.input1}
                        name="mesa"
                        onChange={e => { 
                            let obj = JSON.parse(e.target.value);
                            localStorage.setItem(`mesa`, obj.mesa);
                            localStorage.setItem(`cap`, obj.cap);
                        }}
                    >
                        {
                            mesa ? 
                            <option id={cap} value={cap} >{cap}</option> : 
                            <option key={Math.random()*20 } value='select'>Select...</option>
                        }
                        {freeTables &&
                            freeTables.map(t => (
                                <option value={JSON.stringify(t)} key={Math.random()*20 }  >{t.cap}</option>
                            ))
                        }
                    </select>
                </div>
                {/* <div className={s.table}>
                    <p className={s.label}>TABLE FOR </p>
                    <input className={s.input1} type='number' min='1' max='50' name="people" value={booking.people} onChange={handleInputChange} />
                </div> */}
            </Transsition>
        )
    }

    let newDate = new Date()  // Hoy
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();

    let twoWeeks = new Date(newDate.getTime() + 13*24*60*60*1000);  //  2 semanas desde hoy
    let date2 = twoWeeks.getDate();
    let month2 = twoWeeks.getMonth() + 1;
    let year2 = twoWeeks.getFullYear();
    let hours2 = twoWeeks.getHours();
    let minutes2 = twoWeeks.getMinutes();


    return (
        <div className={s.container}>
            <div className={s.date}>
                <p className={s.label}>DATE</p>
                <input className={s.input2}
                    type="datetime-local"
                    name='date'
                    defaultValue={(defaultDate) ? defaultDate : `${year}-${month < 10 ? `0${month}` : `${month}`}-${date < 10 ? `0${date}` : `${date}`}T${hours}:${minutes}`}
                    min={`${year}-${month < 10 ? `0${month}` : `${month}`}-${date < 10 ? `0${date}` : `${date}`}T${hours}:${minutes}`}
                    max={`${year2}-${month2 < 10 ? `0${month2}` : `${month2}`}-${date2 < 10 ? `0${date2}` : `${date2}`}T${hours2}:${minutes2}`}
                    onChange={handleDateChange} />
            </div>
            {(dateSelected || defaultDate) && renderInput()}
        </div>
    )
}