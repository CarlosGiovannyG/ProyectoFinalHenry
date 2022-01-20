import React from "react";
import s from './Footer.module.css';

export default function Footer(){
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.list}>
                    <p className={s.title}>Contact</p>
                    <p>Av. San Martin 4932, Palermo, CABA</p>
                    <p>+54 11 4315-9747</p>
                    <p>info@henryrestaurant.com</p>
                </div>
                <div className={s.list}>
                    <p className={s.title}>Opening Times</p>
                    <p>Monday to Thrusday</p>
                    <p>12:00 - 20:00</p>
                    <p>Friday to Sunday</p>
                    <p>12:00 - 00:00</p>
                </div>
            </div>
        </footer>
    )
}