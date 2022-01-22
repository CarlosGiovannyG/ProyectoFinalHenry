import React from 'react';
import s from './Cards.module.css';
import Card from '../Card/Card';

export default function Cards({ setProductID, openModalProduct, products }) {
    return (
        <div className={s.grid}>
            {
                products.map(p => (
                    <Card key={p._id} openModalProduct={openModalProduct} setProductID={setProductID} product={p} />
                ))
            }
        </div>
    )
}