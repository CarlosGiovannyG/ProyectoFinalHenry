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
import toast from 'react-hot-toast';


export default function Cart() {
    const { userId, btnValidate } = useAuth();
    const navigate = useNavigate();
    const [ModalProduct, openModalProduct, closeModalProduct] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const [ModalCom, openModal, closeMod] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const [ModalCreateCom, openCreateCom, closeCreteCom] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const [productID, setProductID] = React.useState(null);
    const [address, setAddress] = useState(null);
    const [displaySubmit, setDisplaySubmit] = useState();

   
    useEffect(() => {
        setDisplaySubmit(btnValidate(localStorage.getItem('tipoDePedido'),
            localStorage.getItem('mesa'),
            localStorage.getItem('address'),
            localStorage.getItem('order')?.length
        ))
    }, [btnValidate])

    useEffect(() => {

        axios.get(`http://localhost:5002/users/address/${userId()}`)
            .then(rsp => rsp.data)
            .then(data => setAddress(data.address))
            .catch(err => console.error(err))

    }, [userId])

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
        const tipoPedido = localStorage.getItem('tipoDePedido')
        let response;
        let messageTable;
        let messagefinalTable;
        let resp;
        


        if (tipoPedido === 'domicilio') {

            let newDate = new Date()  // hoy
        
            let twoWeeks = new Date(newDate.getTime() + 20*60*1000);
            let date2 = twoWeeks.getDate();
            let month2 = twoWeeks.getMonth() + 1;
            let year2 = twoWeeks.getFullYear();
            let hours2 = twoWeeks.getHours();
            let minutes2 = twoWeeks.getMinutes();

            response = await CreateBills({
                variables: {
                    "input": {
                        "idUser": `${userId()}`,
                        "products": aux,
                        description:'Pedio para entrega a domicilio',
                        "tipoDePedido": `${localStorage.getItem('tipoDePedido')}`,
                        "direccionEntrega": `${localStorage.getItem('address')}`,
                         "fechaEntrega": `${year2}-${month2 < 10 ? `0${month2}` : `${month2}`}-${date2 < 10 ? `0${date2}` : `${date2}`}T${hours2}:${minutes2}`,
                        subTotal: Math.ceil(subTotal),
                        total: Math.ceil(total),
                    }
                }
            })

            resp = response.data.CreateBills.message;
            messageTable = `${localStorage.getItem('address')}`
                messagefinalTable = "El pedido será entregado"
         
        }


        if (tipoPedido === 'salon') {

            let responseTable = await BookTable({
                variables: {
                    "input": {
                        "fechaIn": `${localStorage.getItem('date')}`,
                        "estamesa": `${localStorage.getItem('mesa')}`,
                        "idclient": `${userId()}`
                    }
                }
            })

            let { message, messagefinal } = responseTable.data.BookTable

             messageTable = message
             messagefinalTable = messagefinal

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
                resp = response.data.CreateBills.message;
            }
           
        }

        toast.success(messageTable);
        toast.success(messagefinalTable);
       

        toast.success(resp);

        localStorage.removeItem('order');
        localStorage.removeItem('date');
        localStorage.removeItem('cap');
        localStorage.removeItem('mesa');
        localStorage.removeItem('tipoDePedido');
        localStorage.removeItem('address');
        navigate(`${routes.UserMainPage}`);
    }

    return (
        <div className={products.length? s.container : s.containerEmpty}>
            <Transsition>
                <OrderMenu products={products} openModalProduct={openModalProduct} setProductID={setProductID} />
            </Transsition>
            <div className={s.rightDiv}>
                {products.length ?
                    <Transsition>
                        <Payment total={total} />
                    </Transsition>:
                    null
                }  

                {products.length ?
                    <Transsition>
                        <OrderSubmit handleSubmit={handleSubmit} total={total} subTotal={subTotal} />
                    </Transsition>:
                    null
                }  
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