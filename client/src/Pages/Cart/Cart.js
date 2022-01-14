import React from 'react';
import s from './Cart.module.css';
import { useModal } from 'react-hooks-use-modal';
import Transsition from '../../Hooks/Transsition';
import OrderMenu from '../UserMainPage/Components/OrderMenu/OrderMenu';
import Bookings from '../UserMainPage/Components/Bookings/Bookings';
import OrderProductDetail from '../UserMainPage/Components/OrderProductDetail/OrderProductDetail';
import Payment from './Components/Payment/Payment';
import OrderSubmit from './Components/OrderSubmit/OrderSubmit';

const products = [
    {
        id: 14,
        category: "main",
        name: 'Italian Spaghetti',
        img: 'https://image.freepik.com/foto-gratis/spaghetti-bolonesa-spaghetti-pasta-italiana-servida-plato-negro-tomate-perejil-restaurante-comida-italiana-menu_73523-3814.jpg'
    },
    {
        id: 15,
        category: "main",
        name: 'Grilled Salmon',
        img: 'https://hips.hearstapps.com/delish/assets/18/11/1520957481-grilled-salmon-horizontal.jpg'
    },
    {
        id: 18,
        category: "beverages",
        name: 'Orange Juice',
        img: 'https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/article/public/field/image/istock_000015165728small.jpg?itok=s4R16St5'
    },
    {
        id: 19,
        category: "beverages",
        name: 'Malbec Wine',
        img: 'https://mendoza.puntoapunto.com.ar/wp-content/uploads/2021/12/gran-reserva-malbec-2017-horiz.jpeg'
    },
    {
        id: 20,
        category: "sides",
        name: 'French Fries',
        img: 'https://www.tasteofhome.com/wp-content/uploads/2021/02/Air-Fryer-French-Fries_EXPS_FT21_235671_F_0128_1-3.jpg'
    },
    {
        id: 23,
        category: "desserts",
        name: 'Lemon Pie',
        img: 'https://www.pequerecetas.com/wp-content/uploads/2021/07/lemon-pie-receta-tarta-de-limon-y-merengue.jpg'
    }

];

export default function Cart() {
    const [ModalProduct, openModalProduct, closeModalProduct] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const [productID, setProductID] = React.useState(null);

    // Lee los datos del carrito del store o estado global

    return(
        <div className={s.container}>
            <Transsition>
                <OrderMenu products={products} openModalProduct={openModalProduct} setProductID={setProductID} />
            </Transsition>
            <div className={s.rightDiv}>
                <Transsition>
                    <Bookings/>
                </Transsition>
                <Transsition>
                    <Payment/>
                </Transsition>
                <Transsition>
                    <OrderSubmit />
                </Transsition>

            </div>

            <ModalProduct>
                <OrderProductDetail 
                closeModalProduct={closeModalProduct} 
                product={(products.filter((p)=>{return p.id === productID}))[0]}
                />
            </ModalProduct>
        </div>
    )
}