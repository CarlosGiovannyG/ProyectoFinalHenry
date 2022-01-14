import React from 'react';
import s from './UserMainPage.module.css';
import OrderMenu from './Components/OrderMenu/OrderMenu';
import { useModal } from 'react-hooks-use-modal';
import OrderProductDetail from './Components/OrderProductDetail/OrderProductDetail';
import Bookings from './Components/Bookings/Bookings';
import ReactTooltip from 'react-tooltip';
import routes from '../../Helpers/Routes';
import { useNavigate } from 'react-router-dom';
import Transsition from '../../Hooks/Transsition';

const products = [
    {   
        id: 0,
        category: "main",
        name: 'American Burger',
        img: 'https://pro2-bar-s3-cdn-cf.myportfolio.com/dacb8e78de24efe448ebaf3436816d26/8139b5a3-0a95-414a-a432-66d712fbb845_rw_1920.jpg?h=4302608c2b4dc5d171ba28c3e149ac6d'
    },
    {
        id: 1,
        category: "main",
        name: 'Argentine Steak',
        img: 'https://images.squarespace-cdn.com/content/v1/579bd3a2197aea7c6b7aa2e2/1481929164004-R9KPQJ5MRSUL7I8G7W28/ARGENTINIAN+STEAKHOUSE+with+chimichurri'
    },
    {
        id: 2,
        category: "main",
        name: 'Italian Spaghetti',
        img: 'https://image.freepik.com/foto-gratis/spaghetti-bolonesa-spaghetti-pasta-italiana-servida-plato-negro-tomate-perejil-restaurante-comida-italiana-menu_73523-3814.jpg'
    },
    {
        id: 3,
        category: "main",
        name: 'Grilled Salmon',
        img: 'https://hips.hearstapps.com/delish/assets/18/11/1520957481-grilled-salmon-horizontal.jpg'
    },
    {
        id: 4,
        category: "main",
        name: 'Chcken Fried Steak',
        img: 'https://saboryestilo.com.mx/wp-content/uploads/elementor/thumbs/recetas-superama-milanesa-de-pollo-oosqp7df208ryx0pe2kcysh6p0w1h92igfgyih0g8w.jpg'
    },
    {
        id: 5,
        category: "beverages",
        name: 'Fresh Lemonade',
        img: 'https://www.blossmangas.com/wp-content/uploads/2020/05/Lemonade-1-1-2560x1707.jpg'
    },
    {
        id: 6,
        category: "beverages",
        name: 'Orange Juice',
        img: 'https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/article/public/field/image/istock_000015165728small.jpg?itok=s4R16St5'
    },
    {
        id: 7,
        category: "beverages",
        name: 'Malbec Wine',
        img: 'https://mendoza.puntoapunto.com.ar/wp-content/uploads/2021/12/gran-reserva-malbec-2017-horiz.jpeg'
    },
    {
        id: 8,
        category: "sides",
        name: 'French Fries',
        img: 'https://www.tasteofhome.com/wp-content/uploads/2021/02/Air-Fryer-French-Fries_EXPS_FT21_235671_F_0128_1-3.jpg'
    },
    {
        id: 9,
        category: "sides",
        name: 'Mashed Potatoes',
        img: 'https://www.jocooks.com/wp-content/uploads/2019/03/mashed-potatoes-1-7.jpg'
    },
    {
        id: 10,
        category: "sides",
        name: 'Garlic Bread',
        img: 'https://spicecravings.com/wp-content/uploads/2021/09/Air-Fryer-Garlic-Bread-Featured.jpg'
    },
    {
        id: 11,
        category: "desserts",
        name: 'Lemon Pie',
        img: 'https://www.pequerecetas.com/wp-content/uploads/2021/07/lemon-pie-receta-tarta-de-limon-y-merengue.jpg'
    },
    {
        id: 12,
        category: "desserts",
        name: 'Apple Pie',
        img: 'https://images.media-allrecipes.com/userphotos/7291534.jpg'
    },
    {
        id: 13,
        category: "desserts",
        name: 'Tiramisu',
        img: 'https://vinomanos.com/wp-content/uploads/2021/02/Tiramisu-min.jpg'
    },
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
        id: 16,
        category: "main",
        name: 'Chcken Fried Steak',
        img: 'https://saboryestilo.com.mx/wp-content/uploads/elementor/thumbs/recetas-superama-milanesa-de-pollo-oosqp7df208ryx0pe2kcysh6p0w1h92igfgyih0g8w.jpg'
    },
    {
        id: 17,
        category: "beverages",
        name: 'Fresh Lemonade',
        img: 'https://www.blossmangas.com/wp-content/uploads/2020/05/Lemonade-1-1-2560x1707.jpg'
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
        id: 21,
        category: "sides",
        name: 'Mashed Potatoes',
        img: 'https://www.jocooks.com/wp-content/uploads/2019/03/mashed-potatoes-1-7.jpg'
    },
    {
        id: 22,
        category: "sides",
        name: 'Garlic Bread',
        img: 'https://spicecravings.com/wp-content/uploads/2021/09/Air-Fryer-Garlic-Bread-Featured.jpg'
    },
    {
        id: 23,
        category: "desserts",
        name: 'Lemon Pie',
        img: 'https://www.pequerecetas.com/wp-content/uploads/2021/07/lemon-pie-receta-tarta-de-limon-y-merengue.jpg'
    },
    {
        id: 24,
        category: "desserts",
        name: 'Apple Pie',
        img: 'https://images.media-allrecipes.com/userphotos/7291534.jpg'
    },
    {
        id: 25,
        category: "desserts",
        name: 'Tiramisu',
        img: 'https://vinomanos.com/wp-content/uploads/2021/02/Tiramisu-min.jpg'
    },

];

export default function UserMainPage() {
    const [ModalProduct, openModalProduct, closeModalProduct] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const [productID, setProductID] = React.useState(null);
    const [cart, setCart] = React.useState([]);
    const navigate = useNavigate();

    // Aca va la query de productos, que esta hardcodeada en products por el tema del filtrado por categorias que no estan cargadas todavia.

    const redirect = function (){
        navigate(`${routes.cart}`)
    }

    return(
        <div className={s.container}>
            <Transsition>
                <OrderMenu products={products} openModalProduct={openModalProduct} setProductID={setProductID} />
            </Transsition>
            
            <div className={s.rightDiv}>
                <Transsition>
                    <button className={s.btnCart} data-tip data-for='tooltip' onClick={redirect} >YOUR ORDER ({cart.length})</button>
                </Transsition>
                <Transsition>
                    <Bookings/>
                </Transsition>
            </div>

            <ReactTooltip className={s.tooltip} id='tooltip' place='bottom' effect="solid" >
                Your Order: <br/>
                {cart.map(p => (
                    `• ${p.name}\n`
                ))}
                <br/>
                Total: $la data hardcodeada no tiene precio jeje
            </ReactTooltip>

            <ModalProduct>
                <OrderProductDetail 
                closeModalProduct={closeModalProduct} 
                product={(products.filter((p)=>{return p.id === productID}))[0]}
                setCart={setCart}
                />
            </ModalProduct>
        </div>
    )
}