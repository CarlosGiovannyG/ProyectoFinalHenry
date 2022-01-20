import React, { useEffect }  from 'react';
import { useNavigate } from 'react-router';
import s from './Home.module.css';
import NewSwiper from '../../Components/NewSwiper/NewSwiper';
import NavBar from '../../Components/NavBar/NavBar';
import SignUpForm from '../../Components/Froms/SignUpForm/SignUpForm';
import LogInForm from '../../Components/Froms/LogInForm/LogInForm';
import Transsition from '../../Hooks/Transsition';
import useModal from '../../Hooks/useModal';
import Modal from '../../Components/Modal/Modal';
import Info from './Components/Info/Info';
import Footer from '../../Components/Footer/Footer';
import { IoIosArrowDown } from 'react-icons/io';


export default function Home() {
    const navigate = useNavigate();
    const url = window.location.href.slice(21);
    const [isOpenModalLogin, openLogin, closeLogin] = useModal();
    const [isOpenModalRegister, openRegister, closeRegister] = useModal();

    useEffect(() => {
        if(url===('/')){
            window.scrollTo(0, 0)
        }
        if(url.includes('#AboutUs')){
            window.scrollTo(0, window.innerHeight*4.44)
        }
        if(url.includes('#Navbar')){
            window.scrollTo(0, window.innerHeight*0.91)
        }
        if(url.includes('#AboutUs')){
            window.scrollTo(0, window.innerHeight*4.44)
        }
    }, [url]); 


    return (
        <div className={s.mainContainer}>
            <div className={s.info}>
                <h2 className={s.title}>Henry<br />Restaurant</h2>
                <div className={s.line} />
                <p className={s.subtitle}>Fine Dining &amp; Wine</p>
                <div className={s.scroll}>
                    <p className={s.scrollTitle} >Scroll for more </p>
                    <a href="#Navbar">
                        <IoIosArrowDown color='white' />
                    </a>
            </div>
            </div>

            <div className={s.carousel} >
                <NewSwiper />
            </div>
            <NavBar openLogin={openLogin} openRegister={openRegister} />
            <Info/>
            <Footer/>

            <div style={{ position: 'absolute' }} >
                <Modal isOpen={isOpenModalRegister} closeModal={closeRegister}>
                    <Transsition>
                        <SignUpForm close={closeRegister} />
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

