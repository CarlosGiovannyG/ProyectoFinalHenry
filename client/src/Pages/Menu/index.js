import React, { useState } from "react";
import { MenuJumbotron } from "./components/MenuJumbotron/MenuJumbotron";
import { MenuContainer } from "./components/MenuContainer/MenuContainer";
import { Footer } from "../../Components/Footer/Footer";
import { useQuery } from '@apollo/client';
import Queries from '../../Utils/Queries';
import { useModal } from 'react-hooks-use-modal';
import s from './index.module.css';
import ModalComments from "../../Components/Comments/CommentsViews/ModalComments";
import ModalCreateComments from "../../Components/Comments/CommentsCreate/CreateComments";
import ProductDetail from "./components/ProdutDetail/ProductDetail";
import loadingGif from '../../img/loading.gif';

export const Menu = () => {

    const [Modal, open, close] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const [ModalCom, openModal, closeMod] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const [ModalCreateCom, openCreateCom, closeCreteCom] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const { loading, data, error } = useQuery(Queries.ALL_PRODUCTS)
    const [idProduct, setIdProduct] = useState(null)

    if (loading) {
        return (
            <div>
                <img className={s.loading} src={loadingGif} alt="Loading Gif"/>
            </div>
        )
    }
    if (error) return null

    const productId = id => {
        setIdProduct(id)
    };

    return (
        <div>
            <MenuJumbotron />
            <MenuContainer
                products={data.allProducts.products}
                modalControl={open}
                productId={productId}
            />
            <div className={s.modal} >
                <Modal>
                    <ProductDetail
                        modalControl={close}
                        productId={idProduct}
                        openComment={openModal}
                        openCreateCom={openCreateCom}
                    />
                </Modal>
                <ModalCom>
                    <ModalComments
                        modalControl={closeMod}
                        productId={idProduct}
                    />
                </ModalCom>
                <ModalCreateCom>
                    <ModalCreateComments
                        modalControl={closeCreteCom}
                        productId={idProduct}
                    />
                </ModalCreateCom>
            </div>
            <Footer />
        </div>
    )

}