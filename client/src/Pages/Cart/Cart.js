import React, { useEffect, useState } from 'react';
import s from './Cart.module.css';
import { useModal } from 'react-hooks-use-modal';
import Transsition from '../../Hooks/Transsition';
import OrderMenu from '../UserMainPage/Components/OrderMenu/OrderMenu';
import Bookings from '../UserMainPage/Components/Bookings/Bookings';
import Payment from './Components/Payment/Payment';
import OrderSubmit from './Components/OrderSubmit/OrderSubmit';
import ProductDetail from '../Menu/components/ProdutDetail/ProductDetail';
import { useMutation } from '@apollo/client';
import Mutations from '../../Utils/Mutations';
import Queries from '../../Utils/Queries';
import useAuth from '../../Auth/useAuth';
import { useNavigate } from 'react-router-dom';
import routes from '../../Helpers/Routes';
import axios from 'axios'


export default function Cart() {
    const { userId } = useAuth();
    const navigate = useNavigate();
    const [ModalProduct, openModalProduct, closeModalProduct] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const [ModalCom, openModal, closeMod] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const [ModalCreateCom, openCreateCom, closeCreteCom] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const [productID, setProductID] = React.useState(null);
    const [address, setAddress] = useState(null);

    useEffect(() => {

        axios.get(`http://localhost:5002/users/address/${userId()}`)
            .then(rsp => rsp.data)
            .then(data => setAddress(data.address))
            .catch(err => console.error(err))

    }, [userId])

    console.log(address);

    const [CreateBills] = useMutation(Mutations.CREATE_BILL, {
        refetchQueries: [{ query: Queries.BILLS_CHICKEND }],
        onError: err => {
            console.log('ERRORES', err.graphQLErrors)
        }
    })
    const [BookTable] = useMutation(Mutations.BOOK_TABLES, {
        refetchQueries: [{ query: Queries.BILLS_CHICKEND }],
        onError: err => {
            console.log('ERRORES', err.graphQLErrors)
        }
    })

    // Lee los datos del carrito del store o estado global

    const Cart = () => {

        if (localStorage.getItem('order')) {
            let products = localStorage.getItem('order')
            products = JSON.parse(products)
            return products
        }
        return []
    }

    let products = Cart()


    let subTotal = 0
    let total = 0

    for (let i = 0; i < products.length; i++) {
        subTotal = products[i].price + subTotal
        total = (subTotal * 20 / 100) + subTotal
    }

    let aux = products.map(({ _id, name, price }) => { return { _id, name, price } })




    const handleSubmit = async e => {
        e.preventDefault();

        let responseTable = await BookTable({
            variables: {
                "input": {
                    "fechaIn": `${localStorage.getItem('date')}`,
                    "estamesa": `${localStorage.getItem('mesa')}`,
                    "idclient": `${userId()}`
                }
            }
        })

        const { message, messagefinal } = responseTable.data.BookTable

        let response;
        if (messagefinal) {
            response = await CreateBills({
                variables: {
                    "input": {
                        "idUser": `${userId()}`,
                        "products": aux,
                        "numeroMesa": `${localStorage.getItem('mesa')}`,
                        "tipoDePedido": `${localStorage.getItem('tipoDePedido')}`,
                        "fechaEntrega": `${localStorage.getItem('date')}`,
                        subTotal: Math.ceil(subTotal),
                        total: Math.ceil(total),
                    }
                }
            })

        }
        console.log(responseTable, 'RTESPUESTA MESAS');
        console.log(response, 'FACTURAS');

        alert(message)
        alert(messagefinal)

        const resp = response.data.CreateBills.message
        resp && alert(resp)

        localStorage.removeItem('order')
        localStorage.removeItem('date')
        localStorage.removeItem('mesa')
        localStorage.removeItem('tipoDePedido')
        navigate(`${routes.UserMainPage}`)
    }



    return (
        <div className={s.container}>
            <Transsition>
                <OrderMenu products={products} openModalProduct={openModalProduct} setProductID={setProductID} />
            </Transsition>
            <div className={s.rightDiv}>
                <Transsition>
                    <Bookings address={address} />
                </Transsition>
                <Transsition>
                    <Payment total={total} />
                </Transsition>
                <Transsition>
                    <OrderSubmit handleSubmit={handleSubmit} total={total} subTotal={subTotal} />
                </Transsition>
            </div>

            <ModalProduct>
                <ProductDetail
                    modalControl={closeModalProduct}
                    productId={productID}
                    openComment={openModal}
                    openCreateCom={openCreateCom}
                />
            </ModalProduct>
        </div>
    )
}