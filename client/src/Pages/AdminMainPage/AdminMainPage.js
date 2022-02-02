import React from "react";
import s from './AdminMainPage.module.css';
import { useNavigate } from 'react-router-dom';
import routes from '../../Helpers/Routes';
import { useModal } from 'react-hooks-use-modal';
import SignUpForm from '../../Components/Froms/SignUpForm/SignUpForm';
import CreateProduct from "../../Components/Froms/CreateProduct/CreateProduct";
import Transsition from '../../Hooks/Transsition';

export default function AdminMainPage() {
    const [ModalCreateAccount, openCreateAccount, closeCreateAccount] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const [ModalCreateProduct, openCreateProduct, closeCreateProduct] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const navigate = useNavigate();

    return (
        <div className={s.container}>
            <div className={s.buttons}>
                <button className={s.btn} onClick={() => navigate(routes.UserMainPage)} >Order</button>
                <button className={s.btn} onClick={() => navigate(routes.kitchen)}>Kitchen</button>
                <button className={s.btn} onClick={() => navigate(routes.bills)}>Billing</button>
                <button className={s.btn} onClick={openCreateAccount}>New Account</button>
                <button className={s.btn} onClick={openCreateProduct} >New Plate</button>
            </div>
            <ModalCreateAccount>
                <Transsition>
                    <SignUpForm close={closeCreateAccount} />
                </Transsition>
            </ModalCreateAccount>
            <ModalCreateProduct>
                <Transsition>
                    <CreateProduct close={closeCreateProduct} />
                </Transsition>
            </ModalCreateProduct>
        </div>
    )
}