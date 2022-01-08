import React from 'react';
import s from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import { useModal } from 'react-hooks-use-modal';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import LogInForm from '../../Components/LogInForm/LogInForm';
import icon from '../../img/MAIN_ICON.png';
import { CSSTransition } from 'react-transition-group';
import { GrClose } from 'react-icons/gr';
import NewSwiper from '../../Components/NewSwiper/NewSwiper';

export default function Home() {
    
    const navigate = useNavigate();
    const [Modal, open, close] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const [Modal2, open2, close2] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    
    
    return (
        <div >
            <div className={s.carousel} >
                <NewSwiper/>
            </div>
            <div className={s.header}>
                <img className={s.icon} src={icon} alt='Restaurant Logo' />
                <div className={s.headerbtns}>
                    <div className={s.btnDiv1} >
                        <button className={s.btnsHeader} onClick={()=>{navigate('/Menu')}} >MENU</button>
                        <button className={s.btnsHeader} >ABOUT US</button>
                        <button  className={s.btnsHeader}>CONTACT</button>
                        <button className={s.btnsHeader} onClick={() => { navigate("/bills") }}>CHECK IN</button>
                    </div>
                    <div className={s.btnDiv2}>
                        <button className={s.btnsHeader} onClick={open2} >LOG IN</button>
                        <button className={s.btnsHeader} onClick={open} >SIGN UP</button>
                    </div>
                </div>
            </div>
            <div style={{position: 'absolute'}} >
                <Modal>
                    <CSSTransition
                    in={true}
                    timeout={0}
                    appear={true}
                    key={0}
                    classNames={{ appear: s.MyClassEnterActive, enterDone: s.MyClassEnterDone}}
                    >
                        <div className={s.modal}>
                            <GrClose className={s.cross} onClick={close} size='1.5rem' />
                            <SignUpForm />
                        </div>
                    </CSSTransition>
                </Modal>
            
                <Modal2>
                    <CSSTransition
                    in={true}
                    timeout={0}
                    appear={true}
                    key={0}
                    classNames={{ appear: s.MyClassEnterActive, enterDone: s.MyClassEnterDone}}
                    >
                        <div className={s.modal2}>
                        <GrClose className={s.cross} onClick={close2} size='1.5rem' />
                            <LogInForm />
                        </div>
                    </CSSTransition>
                </Modal2>
            </div>
        </div>
    )

}

