import React from 'react';
import s from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import { useModal } from 'react-hooks-use-modal';
import { CSSTransition } from 'react-transition-group';
import { GrClose } from 'react-icons/gr';
import NewSwiper from '../../Components/NewSwiper/NewSwiper';
import NavBarV2 from '../../Components/NavBarV2/NavBarV2';
import SignUpForm from '../../Components/Froms/LogInForm/LogInForm';
import LogInForm from '../../Components/Froms/LogInForm/LogInForm';

export default function Home() {

    const navigate = useNavigate();
    const [Modal, open, close] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const [Modal2, open2, close2] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });


    return (
        <div className={s.mainContainer}>
            <div className={s.info}>
                <h2 className={s.title}>Henry<br/>Restaurant</h2>
                <div className={s.line}/>
                <p  className={s.subtitle}>Fine Dining &amp; Wine</p>
            </div>
            <div className={s.carousel} >
                <NewSwiper />
            </div>
            <NavBarV2 modalControl1={open} modalControl2={open2} />
            <div style={{ position: 'absolute' }} >
                <Modal>
                    <CSSTransition
                        in={true}
                        timeout={0}
                        appear={true}
                        key={0}
                        classNames={{ appear: s.MyClassEnterActive, enterDone: s.MyClassEnterDone }}
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
                        classNames={{ appear: s.MyClassEnterActive, enterDone: s.MyClassEnterDone }}
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

