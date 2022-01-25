import React from "react";
import s from './Delivery.module.css';
import Transsition from "../../../../../Hooks/Transsition";
import Address from "../../../../../Components/Froms/Address/Address";
import { useModal } from 'react-hooks-use-modal';


export default function Delivery({ address }) {
    const [Modal, open, close] = useModal('root', {preventScroll: true,closeOnOverlayClick: true});

    return (
        <div className={s.container}>
            {address &&
                address.map(d => (
                    <div className={s.item} >{d.description}</div>

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