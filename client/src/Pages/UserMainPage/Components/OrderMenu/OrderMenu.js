import React, { useEffect } from 'react';
import s from './OrderMenu.module.css';
import Cards from '../Cards/Cards';

export default function OrderMenu({products, setProductID, openModalProduct}) {
    const [input, setInput] = React.useState('');
    
    const handleInputChange = function(e){
        setInput(e.target.value);
    }

    return(
    <div  className={s.mainDiv}>
        <h1 className={s.title}>MENU</h1>
        <input
            className={s.input}
            type='text'
            name='search'
            placeholder={'Find your plate...'}
            value={input} onChange={handleInputChange} />
        <div className={s.products}>
            <h3 className={s.subtitle} >MAIN COURSES</h3>
            <Cards openModalProduct={openModalProduct} setProductID={setProductID} products={products.filter((p)=>{return p.category === 'main'})} />
            <h3 className={s.subtitle} >SIDES</h3>
            <Cards openModalProduct={openModalProduct} setProductID={setProductID} products={products.filter((p)=>{return p.category === 'sides'})}/>
            <h3 className={s.subtitle} >BEVERAGES</h3>
            <Cards openModalProduct={openModalProduct} setProductID={setProductID} products={products.filter((p)=>{return p.category === 'beverages'})}/>
            <h3 className={s.subtitle} >DESSERTS</h3>
            <Cards openModalProduct={openModalProduct} setProductID={setProductID} products={products.filter((p)=>{return p.category === 'desserts'})} />
        </div>
    </div>
    )
}