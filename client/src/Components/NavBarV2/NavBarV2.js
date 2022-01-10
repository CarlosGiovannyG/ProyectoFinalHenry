import React from 'react';
import s from './NavBarV2.module.css';
import { useNavigate } from 'react-router-dom';
import icon from '../../img/MAIN_ICON.png';
import routes from '../../Helpers/Routes'


export default function NavBarV2({ modalControl1, modalControl2 }) {
    const navigate = useNavigate();
    const url = window.location.href.slice(21);
    console.log('NAV', url);

    
    return (
        <div className={s.header}>
            <img className={s.icon} src={icon} alt='Restaurant Logo' />
            <div className={s.headerbtns}>
                <div className={s.btnDiv1} >
                    {
                        (url === '/') && <button className={s.btnsHeader} onClick={() => { navigate(`${routes.menu}`) }} >MENU</button>
                    }
                    {
                        (url === '/Menu') && <button className={s.btnsHeader} onClick={() => { navigate(`${routes.home}`) }} >HOME</button>
                    }
                    <button className={s.btnsHeader} >ABOUT US</button>
                    <button className={s.btnsHeader}>CONTACT</button>
                    <button className={s.btnsHeader} onClick={() => { navigate(`${routes.bills}`) }}>CHECK IN</button>
                    <button className={s.btnsHeader} onClick={() => { navigate(`${routes.kitchen}`) }}>KITCHEN</button>
                </div>
                <div className={s.btnDiv2}>
                    <button className={s.btnsHeader} onClick={modalControl2} >LOG IN</button>
                    <button className={s.btnsHeader} onClick={modalControl1} >SIGN UP</button>
                </div>
            </div>
        </div>
    )
}