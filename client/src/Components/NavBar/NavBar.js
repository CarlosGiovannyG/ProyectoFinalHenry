import React from 'react';
import s from './NavBar.module.css';
import { useNavigate } from 'react-router-dom';
import icon from '../../img/MAIN_ICON.png';
import links from '../../Helpers/Navigation'
import useAuth from '../../Auth/useAuth';
import routes from '../../Helpers/Routes'




export default function NavBar({ openLogin, openRegister }) {

    const { isLogged, hasRole } = useAuth()
    const login = isLogged()

    const navigate = useNavigate();
    const url = window.location.href.slice(21);

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('login')
        localStorage.removeItem('token')
        navigate(`${routes.home}`)
    }

    return (
        <div className={s.header}>
            <img className={s.icon} src={icon} alt='Restaurant Logo' />
            {!login &&
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
                    {url === '/' || url === '/Menu' ?
                        (<div className={s.btnDiv2}>
                            <button className={s.btnsHeader} onClick={openLogin} >LOG IN</button>
                            <button className={s.btnsHeader} onClick={openRegister} >SIGN UP</button>
                        </div>) : null
                    }
                </div>
            }
            {login && hasRole('regular') ?
                (<div className={s.headerbtns}>
                    <div className={s.btnDiv1} >
                        {
                            links.isLogin.map(link => (
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
                        <button className={s.btnsHeader} onClick={handleLogout} >LOGOUT</button>

                    </div>

                </div>) : null
            }
            {login && hasRole('cashier') ?
                (<div className={s.headerbtns}>
                    <div className={s.btnDiv1} >
                        {
                            links.iscashier.map(link => (
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
                        <button className={s.btnsHeader} onClick={handleLogout} >LOGOUT</button>
                    </div>

                </div>) : null
            }
            {login && hasRole('cook') ?
                (<div className={s.headerbtns}>
                    <div className={s.btnDiv1} >
                        {
                            links.iscook.map(link => (
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
                        <button className={s.btnsHeader} onClick={handleLogout} >LOGOUT</button>
                    </div>

                </div>) : null
            }
            {login && hasRole('admin') ?
                (<div className={s.headerbtns}>
                    <div className={s.btnDiv1} >
                        {
                            links.isAdmin.map(link => (
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
                        <button className={s.btnsHeader} onClick={handleLogout} >LOGOUT</button>
                    </div>

                </div>) : null
            }
        </div>
    )
}
