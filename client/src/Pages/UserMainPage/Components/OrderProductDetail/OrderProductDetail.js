import React from 'react';
import s from './OrderProductDetail.module.css';
import { GrClose } from 'react-icons/gr';
import { CSSTransition } from 'react-transition-group';
import ReactTooltip from 'react-tooltip';
import { useModal } from 'react-hooks-use-modal';
import routes from '../../../../Helpers/Routes';
import Transsition from '../../../../Hooks/Transsition';


export default function OrderProductDetail({setCart, product, closeModalProduct}) {

  const url = window.location.href.slice(21)

  const removeProduct = function(product){
    // cart filter product (en cuanto tenga data real y pueda usar estados globales)
  }

  return(
    <Transsition>
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
            { url === routes.UserMainPage ?  // Si estamos en userMainPage, renderizamos botones para agregar pedidos
            <div className={s.icons}>
            {/* Faltan los de comments y todo eso, lo subo cuando tenga la data real (que no use por el tema de categorias)*/}
              <div className={s.price}>
                $5000
              </div>
              <button className={s.btnAdd} onClick={()=>{setCart((prev)=>[...prev, product])}} data-tip data-for='tooltip' >ADD</button>
            </div> :  // Si no, renderizamos botones para sacar el pedido del cart
            <div className={s.icons}>
            {/* Faltan los de comments y todo eso, lo subo cuando tenga la data real (que no use por el tema de categorias)*/}
              <div className={s.price}>
                $5000
              </div>
              <button className={s.btnAdd} onClick={removeProduct(product)} data-tip data-for='tooltip' >REMOVE</button>
            </div>

            }
          
        </div>
      </div>
    </Transsition>
  )
}