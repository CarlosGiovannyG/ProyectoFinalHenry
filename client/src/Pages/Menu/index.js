import React, { useState } from "react";
import { MenuJumbotron } from "./components/MenuJumbotron/MenuJumbotron";
import { MenuContainer } from "./components/MenuContainer/MenuContainer";
import { Footer } from "../../Components/Footer/Footer";
import { useQuery } from '@apollo/client';
import Queries from '../../Utils/Queries';
import { useModal } from 'react-hooks-use-modal';
import CardDetail from "../../Components/CardDetail/CardDetail";
import s from './index.module.css';
import ModalComments from "../../Components/Comments/ModalComments";



export const Menu = () => {

    const [Modal, open, close] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const [ModalCom, openModal, closeMod] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const { loading, data, error } = useQuery(Queries.ALL_PRODUCTS)
    const [idProduct, setIdProduct] = useState(null)

    if (loading) {
        return (
            <div>
                Cargando....
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
                    <CardDetail
                        modalControl={close}
                        productId={idProduct}
                        openComment={openModal}
                    />
                </Modal>
                <ModalCom>
                    <ModalComments
                        modalControl={closeMod}
                        productId={idProduct}
                    />
                </ModalCom>
            </div>
            <Footer />
        </div>
    )

}