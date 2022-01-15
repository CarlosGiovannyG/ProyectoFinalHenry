import React from 'react';
import s from './Home.module.css';
import NewSwiper from '../../Components/NewSwiper/NewSwiper';
import NavBar from '../../Components/NavBar/NavBar';
import SignUpForm from '../../Components/Froms/SignUpForm/SignUpForm';
import LogInForm from '../../Components/Froms/LogInForm/LogInForm';
import Transsition from '../../Hooks/Transsition';
import useModal from '../../Hooks/useModal';
import Modal from '../../Components/Modal/Modal';

export default function Home() {

    const [isOpenModalLogin, openLogin, closeLogin] = useModal();
    const [isOpenModalRegister, openRegister, closeRegister] = useModal();

    return (
        <div className={s.mainContainer}>
            <div className={s.info}>
                <h2 className={s.title}>Henry<br />Restaurant</h2>
                <div className={s.line} />
                <p className={s.subtitle}>Fine Dining &amp; Wine</p>
            </div>
            <div className={s.carousel} >
                <NewSwiper />
            </div>
            <NavBar openLogin={openLogin} openRegister={openRegister} />
            <div style={{ position: 'absolute' }} >
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
        </div>
    )

}

