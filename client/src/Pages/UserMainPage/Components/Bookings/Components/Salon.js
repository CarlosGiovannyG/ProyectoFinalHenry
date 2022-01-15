import React, { useState } from "react";
import s from './Salon.module.css';

export default function Salon() {
    const [setBooking] = useState({ people: 1, date: '0' })

    const handleInputChange = function (e) {
        setBooking(prev => ({ ...prev, people: e.target.value }))
    }

    const handleDateChange = function (e) {
        setBooking(prev => ({ ...prev, date: e.target.value }))
    }

    return (
        <div className={s.container}>
            <div className={s.table}>
                <p className={s.label}>TABLE FOR </p>
                <input className={s.input1} type='number' min='1' max='50' onChange={handleInputChange} />
            </div>
            <div className={s.date}>
                <p className={s.label}>DATE</p>
                <input className={s.input2} type="datetime-local" onChange={handleDateChange} />
            </div>
        </div>
    )
}