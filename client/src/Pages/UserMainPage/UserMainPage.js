import React from 'react';
import s from './UserMainPage.module.css';
import OrderMenu from './Components/OrderMenu/OrderMenu';
import { useModal } from 'react-hooks-use-modal';
import Bookings from './Components/Bookings/Bookings';
import ReactTooltip from 'react-tooltip';
import routes from '../../Helpers/Routes';
import { useNavigate } from 'react-router-dom';
import Transsition from '../../Hooks/Transsition';
import { useQuery } from '@apollo/client';
import Queries from '../../Utils/Queries';
import loadingGif from '../../img/loading.gif';
import ProductDetail from '../Menu/components/ProdutDetail/ProductDetail';
import ModalComments from '../../Components/Comments/CommentsViews/ModalComments';
import ModalCreateComments from '../../Components/Comments/CommentsCreate/CreateComments';

export default function UserMainPage() {
    const [ModalProduct, openModalProduct, closeModalProduct] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const [ModalCom, openModal, closeMod] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const [ModalCreateCom, openCreateCom, closeCreteCom] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const [productID, setProductID] = React.useState(null);
    const [cart, setCart] = React.useState([]);
    const navigate = useNavigate();
    const { loading, data, error } = useQuery(Queries.ALL_PRODUCTS) // data.allProducts.products tiene nuestros productos

    if (loading) {
        return (
            <div>
                <img className={s.loading} src={loadingGif} alt="Loading Gif"/>
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
                    <button className={s.btnCart} data-tip data-for='tooltip' onClick={redirect} >YOUR ORDER ({cart.length})</button>
                </Transsition>
                <Transsition>
                    <Bookings />
                </Transsition>
            </div>

            <ReactTooltip className={s.tooltip} id='tooltip' place='bottom' effect="solid" >
                Your Order: <br />
                {cart.map(p => (
                    `• ${p.name}\n`
                ))}
                <br />
                Total: $la data hardcodeada no tiene precio jeje
            </ReactTooltip>


            <div className={s.modal} >
                <ModalProduct>
                    <ProductDetail
                        modalControl={closeModalProduct}
                        productId={productID}
                        openComment={openModal}
                        openCreateCom={openCreateCom}
                        setCart={setCart}
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