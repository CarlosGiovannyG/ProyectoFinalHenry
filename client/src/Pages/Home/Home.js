import React from 'react';
import s from './Home.module.css';
import NewSwiper from '../../Components/NewSwiper/NewSwiper';
import NavBar from '../../Components/NavBar/NavBar';
import SignUpForm from '../../Components/Froms/SignUpForm/SignUpForm';
import LogInForm from '../../Components/Froms/LogInForm/LogInForm';
import useModalPage from '../../Hooks/useModalPage'
import Transsition from '../../Hooks/Transsition';
import Closed from '../../Hooks/Closed';
export default function Home() {

    const [ModalLogin, openLogin, closeLogin] = useModalPage();
    const [ModalRegister, openRegister, closeRegister] = useModalPage();

    return (
        <div className={s.mainContainer}>
            <div className={s.info}>
                <h2 className={s.title}>Henry<br />Restaurant</h2>
                <div className={s.line} />
                <p className={s.subtitle}>Fine Dining &amp; Whine</p>
            </div>
            <div className={s.carousel} >
                <NewSwiper />
            </div>
            <NavBar openLogin={openLogin} openRegister={openRegister} />
            <div style={{ position: 'absolute' }} >
                <ModalRegister>
                    <Transsition>
                        <div className={s.modal}>
                            <Closed style={s.cross} click={closeRegister} size='1.5rem' />
                            <SignUpForm />
                        </div>
                    </Transsition>
                </ModalRegister>

                <ModalLogin>
                    <Transsition>
                        <div className={s.modal2}>
                            <Closed style={s.cross} click={closeLogin} size='1.5rem' />
                            <LogInForm />
                        </div>
                    </Transsition>
                </ModalLogin>
            </div>
        </div>
    )

}

