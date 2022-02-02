import React, { useState, useEffect } from "react";
import s from './Salon.module.css';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import Queries from '../../../../../Utils/Queries';
import Transsition from '../../../../../Hooks/Transsition';
import useAuth from "../../../../../Auth/useAuth";


export default function Salon({ setDisplaySubmit }) {

    const { btnValidate } = useAuth();

    const [booking, setBooking] = useState({ date: localStorage.getItem('date') })
    const [freeTables, setFreeTables] = useState(null);
    const [FreeTables] = useLazyQuery(Queries.FREE_TABLES);
    const [dateSelected, setDateSelected] = useState(null); // Utilizo este estado para saber que se elegio una date y ahi renderizar la cantidad de personas
    const defaultDate = localStorage.getItem('date');

    useEffect(async () => {

        let resultado = await FreeTables({
            variables: {
                "input": {
                    "fecha": `${booking.date}`
                }
            }
        })

        let tables = resultado.data.FreeTables.arrmesas

        setFreeTables(tables);

        const mesa = localStorage.getItem('mesa');

        if (mesa) {
            setDisplaySubmit(prev => ({ ...prev, mesa: mesa }))
        }

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
                            setDisplaySubmit(prev => ({ ...prev, mesa: obj.mesa }))
                        }}
                    >
                        {
                            mesa ?
                                <option id={cap} value={cap} >{cap}</option> :
                                <option key={Math.random() * 20} value='select'>Select...</option>
                        }
                        {freeTables &&
                            freeTables.map(t => (
                                <option value={JSON.stringify(t)} key={Math.random() * 20}  >{t.cap}</option>
                            ))
                        }
                    </select>
                </div>
            </Transsition>
        )
    }

    let newDate = new Date()  // Hoy



    return (
        <div className={s.container}>
            <div className={s.date}>
                <p className={s.label}>DATE</p>
                <input className={s.input2}
                    type="datetime-local"
                    name='date'
                    defaultValue={newDate}

                    onChange={handleDateChange} />
            </div>
            {(dateSelected || defaultDate) && renderInput()}
        </div>
    )
}