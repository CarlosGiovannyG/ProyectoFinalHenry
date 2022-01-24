import React from "react";
import ReactDOM from "react-dom";
import s from './Payment.module.css';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function Payment({ total }) {

    const createOrder = (data, actions) => {
        console.log(data, 'CREATE');
        return actions.order.create({
            purchase_units: [
                {
                    description: 'Pedido del restaurante',
                    amount: {
                        currency_code: 'USD',
                        value: total,
                    },
                },
            ],
        });
    }

    const onApprove = async (data, actions) => {

        const order = await actions.order.capture();
        console.log(order);
    }



    return (

        <div className={s.container}>
            {/* <div className={s.header}>
                <h3 className={s.title} >PAYMENT</h3>
            </div>
                <div className={s.item} >VISA XXXX XXXX 0954</div>
            <div className={s.item} onClick={() => { alert('abrir el modal de agregar metodo de pago del perfil') }} >NEW CARD</div> */}
            <div className="wrapper">
                <PayPalButton
                    createOrder={(data, actions) => createOrder(data, actions)}
                    onApprove={(data, actions) => onApprove(data, actions)}
                />
            </div>
        </div>
    )

}