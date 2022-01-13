import React from 'react';
import s from './OrderProductDetail.module.css';
import { GrClose } from 'react-icons/gr';
import { CSSTransition } from 'react-transition-group';
import ReactTooltip from 'react-tooltip';
import { useModal } from 'react-hooks-use-modal';


export default function OrderProductDetail({setCart, product, closeModalProduct}) {

  return(
      <CSSTransition
      in={true}
      timeout={0}
      appear={true}
      key={0}
      classNames={{ appear: s.MyClassEnterActive, enterDone: s.MyClassEnterDone }}
    >
      <div className={s.container}>
        <GrClose size='1.5rem' className={s.close} onClick={closeModalProduct} />
        <div className={s.info} >
          <h2 className={s.name}>
            {product.name}
          </h2>
          <div className={s.description}>
            Descripcion hardcodeada de prueba
          </div>
        </div>
        <div>
          <img className={s.imagen} src={product.img} alt={product.name} />
          <div className={s.icons}>
            {/* Faltan los de comments y todo eso, lo subo cuando tenga la data real (que no use por el tema de categorias)*/}
            <div className={s.price}>
              $5000
            </div>
            <button className={s.btnAdd} onClick={()=>{setCart((prev)=>[...prev, product])}} data-tip data-for='tooltip' >ADD</button>
          </div>
        </div>
      </div>
      </CSSTransition>
    )
}