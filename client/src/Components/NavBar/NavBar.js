import React from 'react';
import s from './NavBar.module.css';
import { useNavigate } from 'react-router-dom';
import icon from '../../img/MAIN_ICON.png';
import links from '../../Helpers/Navgation'
import useAuth from '../../Auth/useAuth';


export default function NavBar({ openLogin, openRegister }) {

    // const [ModalLogin, openLogin, closeLogin] = useModalPage();
    // const [ModalRegister, openRegister, closeRegister] = useModalPage();
    const { isLogged, hasRole } = useAuth()
    const logueado = isLogged()



    const navigate = useNavigate();
    const url = window.location.href.slice(21);

    return (
        <div className={s.header}>
            <img className={s.icon} src={icon} alt='Restaurant Logo' />
            <div className={s.headerbtns}>
                <div className={s.btnDiv1} >
                    {
                        links.notLogin.map(link => (
                            <button
                                key={link.id}
                                className={s.btnsHeader}
                                onClick={() => {
                                    navigate(`${link.path}`)
                                }}
                            >{link.title}</button>
                        ))
                    }
                </div>
                <div className={s.btnDiv2}>
                    <button className={s.btnsHeader} onClick={openLogin} >LOG IN</button>
                    <button className={s.btnsHeader} onClick={openRegister} >SIGN UP</button>
                </div>
            </div>
        </div>
    )
}
