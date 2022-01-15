import React, { useState } from "react";
import { MenuJumbotron } from "./components/MenuJumbotron/MenuJumbotron";
import { MenuContainer } from "./components/MenuContainer/MenuContainer";
import { Footer } from "../../Components/Footer/Footer";
import { useQuery } from '@apollo/client';
import Queries from '../../Utils/Queries';
import s from './index.module.css';
import ModalComments from "../../Components/Comments/CommentsViews/ModalComments";
import ModalCreateComments from "../../Components/Comments/CommentsCreate/CreateComments";
import ProductDetail from "./components/ProdutDetail/ProductDetail";
import NavBar from "../../Components/NavBar/NavBar";
import Transsition from "../../Hooks/Transsition";
import SignUpForm from "../../Components/Froms/SignUpForm/SignUpForm";
import LogInForm from "../../Components/Froms/LogInForm/LogInForm";
import useModal from "../../Hooks/useModal";
import Modal from "../../Components/Modal/Modal";
import Loading from "../../Components/Loading/Loading";

export const Menu = () => {
    const [isOpenModalLogin, openLogin, closeLogin] = useModal();
    const [isOpenModalRegister, openRegister, closeRegister] = useModal();
    const [isOpenProductDetail, openProductDetail, closeProductDetail] = useModal();
    const [isOpenComent, openComent, closeComent] = useModal();
    const [isOpenCreateComent, openCreateComent, closeCreateComent] = useModal();
    const { loading, data, error } = useQuery(Queries.ALL_PRODUCTS)
    const [idProduct, setIdProduct] = useState(null)

    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        )
    }
    if (error) return null

    const productId = id => {
        setIdProduct(id)
    };

    return (
        <div>
            <NavBar openLogin={openLogin} openRegister={openRegister} />
            <MenuJumbotron />
            <MenuContainer
                products={data.allProducts.products}
                modalControl={openProductDetail}
                productId={productId}
            />
            <div className={s.modal} >
                <Modal isOpen={isOpenProductDetail} closeModal={closeProductDetail}>
                    <Transsition>
                        <ProductDetail
                            productId={idProduct}
                            openComment={openComent}
                            openCreateCom={openCreateComent}
                        />
                    </Transsition>
                </Modal>

                <Modal isOpen={isOpenComent} closeModal={closeComent}>
                    <Transsition>
                        <ModalComments
                            productId={idProduct}
                        />
                    </Transsition>
                </Modal>

                <Modal isOpen={isOpenCreateComent} closeModal={closeCreateComent}>
                    <Transsition>
                        <ModalCreateComments
                            productId={idProduct}
                            close={closeCreateComent}
                        />
                    </Transsition>
                </Modal>

            </div>
            <Footer />
            <Modal isOpen={isOpenModalRegister} closeModal={closeRegister}>
                <Transsition>
                    <SignUpForm />
                </Transsition>
            </Modal>
            <Modal isOpen={isOpenModalLogin} closeModal={closeLogin}>
                <Transsition>
                    <LogInForm close={closeLogin} />
                </Transsition>
            </Modal>
        </div>
    )

}