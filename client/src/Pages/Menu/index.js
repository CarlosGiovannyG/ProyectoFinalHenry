import React from "react";
import { MenuJumbotron } from "./components/MenuJumbotron/MenuJumbotron";
import { MenuContainer } from "./components/MenuContainer/MenuContainer";
import { Footer } from "../../Components/Footer/Footer";
import { useQuery } from '@apollo/client';
import Queries from '../../Utils/Queries';
import { useModal } from 'react-hooks-use-modal';
import CardDetail from "../../Components/CardDetail/CardDetail";
import s from './index.module.css';



export const Menu = () => {

    const [Modal, open, close] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const { loading, data, error } = useQuery(Queries.ALL_PRODUCTS)

    if (loading) {
        return (
            <div>
                Cargando....
            </div>
        )
    }
    if (error) return null
    
    return (
            <div>
                <MenuJumbotron />
                <MenuContainer
                    products={data.allProducts.products}
                    modalControl={open}
                />
                <div className={s.modal} >
                    <Modal>
                        <CardDetail modalControl={close} />
                    </Modal>
                </div>
                <Footer />
            </div>
        )
   
}