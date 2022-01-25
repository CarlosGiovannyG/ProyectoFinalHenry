import React, { useState } from "react";
import s from './Delivery.module.css';
import Transsition from "../../../../../Hooks/Transsition";
import Address from "../../../../../Components/Froms/Address/Address";
import { useModal } from 'react-hooks-use-modal';


export default function Delivery({ address }) {
    const [Modal, open, close] = useModal('root', {preventScroll: true,closeOnOverlayClick: true});
    const [selected, setSelected] = useState(localStorage.getItem('address'));
    
    return (
        <div className={s.container}>
            {address &&
                address.map(d => (
                    <div>
                        <div className={ `${d.street} ${d.number}` === selected ? s.selected  : s.item} 
                            onClick={()=>{setSelected(`${d.street} ${d.number}`);
                                 localStorage.setItem('address', `${d.street} ${d.number}`);}} >

                                <p className={s.title}>{d.name}</p>
                                <p className={s.street}>{d.street}&nbsp;{d.number}</p>
                            </div>
                    </div>
                ))
            }
            <div className={s.item} onClick={open} >NEW ADRESS</div>
            <Modal>
                <Transsition>
                    <Address />
                </Transsition>
            </Modal>
        </div>)
}