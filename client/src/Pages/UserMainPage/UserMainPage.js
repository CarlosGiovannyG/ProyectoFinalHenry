import React from 'react';
import s from './UserMainPage.module.css';
import OrderMenu from './Components/OrderMenu/OrderMenu';
import { useModal } from 'react-hooks-use-modal';
import Bookings from './Components/Bookings/Bookings';
import ReactTooltip from 'react-tooltip';
import Transsition from '../../Hooks/Transsition';
import { useQuery } from '@apollo/client';
import Queries from '../../Utils/Queries';
import ProductDetail from '../Menu/components/ProdutDetail/ProductDetail';
import ModalComments from '../../Components/Comments/CommentsViews/ModalComments';
import ModalCreateComments from '../../Components/Comments/CommentsCreate/CreateComments';
import Loading from '../../Components/Loading/Loading';
import { useEffect } from 'react';
import BotonCart from './Components/BotonCart/BotonCart';
import axios from 'axios';
import useAuth from '../../Auth/useAuth';

export default function UserMainPage() {
    const [ModalProduct, openModalProduct, closeModalProduct] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const [ModalCom, openModal, closeMod] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const [ModalCreateCom, openCreateCom, closeCreteCom] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const [productID, setProductID] = React.useState(null);
    const [cart, setCart] = React.useState([]);
    const { loading, data, error } = useQuery(Queries.ALL_PRODUCTS) // data.allProducts.products tiene nuestros productos
    const compra = localStorage.getItem('order');
    const [address, setAddress] = React.useState(null);
    const { userId } = useAuth();
    const [displaySubmit, setDisplaySubmit] = React.useState({ tipo: null, mesa: null, address: null });
    const [validateBtn, setValidateBtn] = React.useState(false);

    useEffect(() => {

        if (displaySubmit.mesa && displaySubmit.tipo === 'salon') {
            setValidateBtn(true);
        }
        if (displaySubmit.tipo === 'domicilio' && displaySubmit.address) {
            setValidateBtn(true);
        }
        if (!displaySubmit.mesa && displaySubmit.tipo === 'salon') {
            setValidateBtn(false);
        }
        if (displaySubmit.tipo === 'domicilio' && !displaySubmit.address) {
            setValidateBtn(false);
        }
        if (!cart.length) {
            setValidateBtn(false);
        }

    }, [displaySubmit, cart])

    useEffect(() => {

        axios.get(`http://localhost:5002/users/address/${userId()}`)
            .then(rsp => rsp.data)
            .then(data => setAddress(data.address))
            .catch(err => console.error(err))

    }, [userId])


    useEffect(() => {
        (function Cart() {
            if (localStorage.getItem('order')) {
                let productsCart = localStorage.getItem('order')
                productsCart = JSON.parse(productsCart)
                return setCart(productsCart)
            }
            return []
        })()
    }, [compra])

    let subTotal = 0
    let total = 0

    for (let i = 0; i < cart.length; i++) {
        subTotal = cart[i].price + subTotal
        total = (subTotal * 20 / 100) + subTotal
    }


    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        )
    }
    if (error) return null

    return (
        <div className={s.container}>
            <Transsition>
                <OrderMenu products={data.allProducts.products} openModalProduct={openModalProduct} setProductID={setProductID} />
            </Transsition>

            <div className={s.rightDiv}>
                <Transsition>
                    <BotonCart validateBtn={validateBtn} data-tip data-for='tooltip' cart={cart} />
                </Transsition>
                <Transsition>
                    <Bookings address={address} setDisplaySubmit={setDisplaySubmit} />
                </Transsition>
            </div>

            {
                validateBtn ?
                    <ReactTooltip className={s.tooltip} id='tooltip' place='bottom' effect="solid" >
                        Your Order: <br />
                        {cart.map(p => (
                            `• ${p.name}\n`
                        ))}
                        <br />
                        Total: $ {total}
                    </ReactTooltip> :
                    (cart.length ?
                        <ReactTooltip className={s.tooltip} id='tooltip' place='bottom' effect="solid" >
                            Select date and table or delivery adress.
                        </ReactTooltip> :
                        <ReactTooltip className={s.tooltip} id='tooltip' place='bottom' effect="solid" >
                            Please add at least one item to your order.
                        </ReactTooltip>
                    )
            }

            <div className={s.modal} >
                <ModalProduct>
                    <ProductDetail
                        modalControl={closeModalProduct}
                        productId={productID}
                        openComment={openModal}
                        openCreateCom={openCreateCom}

                    />
                </ModalProduct>
                <ModalCom>
                    <ModalComments
                        modalControl={closeMod}
                        productId={productID}
                    />
                </ModalCom>
                <ModalCreateCom>
                    <ModalCreateComments
                        modalControl={closeCreteCom}
                        productId={productID}
                    />
                </ModalCreateCom>
            </div>
        </div>
    )
}