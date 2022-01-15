import React from 'react';
import s from './Cart.module.css';
import { useModal } from 'react-hooks-use-modal';
import Transsition from '../../Hooks/Transsition';
import OrderMenu from '../UserMainPage/Components/OrderMenu/OrderMenu';
import Bookings from '../UserMainPage/Components/Bookings/Bookings';
import Payment from './Components/Payment/Payment';
import OrderSubmit from './Components/OrderSubmit/OrderSubmit';
import ProductDetail from '../Menu/components/ProdutDetail/ProductDetail';

const products = [{
    category: "main",
    comments: 1,
    description: "American beef patty  with cheddar cheese, caramelized onions, bacon and BBQ sauce.",
    image: "http://res.cloudinary.com/drbbfr7mz/image/upload/v1641834197/cdrb3yqtryvammixfgl8.jpg",
    name: "American Burger",
    price: 28000,
    public_id: "cdrb3yqtryvammixfgl8",
    rating: 7,
    timestamps: "2022-01-10T16:06:40.428Z",
    views: 10,
    __typename: "ProductDetail",
    _id: "61dc66d84fab02dd51816af7"
},
{
    category: "main",
    comments: 0,
    description: " Juicy Argentine beef Steak with side of fries.",
    image: "http://res.cloudinary.com/drbbfr7mz/image/upload/v1641834348/bngj2cblkc6xu7usczoa.jpg",
    name: "Argentine Steak",
    price: 48000,
    public_id: "bngj2cblkc6xu7usczoa",
    rating: 0,
    timestamps: "2022-01-10T16:06:40.428Z",
    views: 4,
    __typename: "ProductDetail",
    _id: "61dc676e4fab02dd51816af9"
}, {
    category: "main",
    comments: 0,
    description: "Classic Italian spaghetti with tomato sauce.",
    image: "http://res.cloudinary.com/drbbfr7mz/image/upload/v1641834430/ajo2qtw6tluvewduzrqo.jpg",
    name: "Italian Spaghetti",
    price: 34000,
    public_id: "ajo2qtw6tluvewduzrqo",
    rating: 0,
    timestamps: "2022-01-10T16:06:40.428Z",
    views: 3,
    __typename: "ProductDetail",
    _id: "61dc67c04fab02dd51816afb",
}, {
    category: "main",
    comments: 0,
    description: "A nice filet of  with Kosher salt, black pepper and a side of fried eggs.",
    image: "http://res.cloudinary.com/drbbfr7mz/image/upload/v1641834502/l7gwwtfx5tn6ed3yk0mp.jpg",
    name: "Grilled Salmon",
    price: 54000,
    public_id: "l7gwwtfx5tn6ed3yk0mp",
    rating: 0,
    timestamps: "2022-01-10T16:06:40.428Z",
    views: 4,
    __typename: "ProductDetail",
    _id: "61dc68084fab02dd51816afd"
}
];

export default function Cart() {
    const [ModalProduct, openModalProduct, closeModalProduct] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const [ModalCom, openModal, closeMod] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const [ModalCreateCom, openCreateCom, closeCreteCom] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const [productID, setProductID] = React.useState(null);
    const [cart, setCart] = React.useState(products);

    // Lee los datos del carrito del store o estado global

    return (
        <div className={s.container}>
            <Transsition>
                <OrderMenu products={products} openModalProduct={openModalProduct} setProductID={setProductID} />
            </Transsition>
            <div className={s.rightDiv}>
                <Transsition>
                    <Bookings />
                </Transsition>
                <Transsition>
                    <Payment />
                </Transsition>
                <Transsition>
                    <OrderSubmit />
                </Transsition>
            </div>

            <ModalProduct>
                <ProductDetail
                    modalControl={closeModalProduct}
                    productId={productID}
                    openComment={openModal}
                    openCreateCom={openCreateCom}
                    setCart={setCart}
                />
            </ModalProduct>
        </div>
    )
}