import React from "react";
import s from './AdminMainPage.module.css';
import { useNavigate } from 'react-router-dom';
import routes from '../../Helpers/Routes';
import { useModal } from 'react-hooks-use-modal';
import SignUpForm from '../../Components/Froms/SignUpForm/SignUpForm';
import CreateProduct from "../../Components/Froms/CreateProduct/CreateProduct";
import Transsition from '../../Hooks/Transsition';
import { useQuery } from '@apollo/client';
import Queries from '../../Utils/Queries';
import Loading from "../../Components/Loading/Loading";
import moment from 'moment';



export default function AdminMainPage() {
    const [ModalCreateAccount, openCreateAccount, closeCreateAccount] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const [ModalCreateProduct, openCreateProduct, closeCreateProduct] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
    const navigate = useNavigate();

    const { loading, data, error } = useQuery(Queries.STATS_APP)

    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        )
    }
    if (error) return null


    return (
        <div className={s.container}>
            <div className={s.buttons}>
                <button className={s.btn} onClick={() => navigate(routes.UserMainPage)} >Order</button>
                <button className={s.btn} onClick={() => navigate(routes.kitchen)}>Kitchen</button>
                <button className={s.btn} onClick={() => navigate(routes.bills)}>Billing</button>
                <button className={s.btn} onClick={openCreateAccount}>New Account</button>
                <button className={s.btn} onClick={openCreateProduct} >New Plate</button>
            </div>
            <div className={s.Titles}>
                    <h2>Stats</h2>
                <h2>New Comments</h2>
                <h2>Products Populated</h2>
                <h2>Most Viewed Products</h2>
            </div>
            <div className={s.resumen}>
                <div className={s.stats}>
                    <div>
                        <span className={s.Name}>Total Productos:
                            <label className={s.Detail}>{data.statsApp.resumen.stats.produts}</label>
                        </span>
                    </div>
                    <div>
                        <span className={s.Name}>Nuevos Comentarios:
                            <label className={s.Detail}>{data.statsApp.resumen.stats.comments}</label>
                        </span>
                    </div>
                    <div>
                        <span className={s.Name}>Total Likes:
                            <label className={s.Detail}>{data.statsApp.resumen.stats.rating}</label>
                        </span>
                    </div>
                    <div>
                        <span className={s.Name}>Total Vistas:
                            <label className={s.Detail}>{data.statsApp.resumen.stats.views}</label>
                        </span>
                    </div>
                </div>
                <div className={s.Comments}>
                    {data.statsApp.resumen.newComments.map((coment,i) => (
                        <div key={i} className={s.Comment}>
                            <div>
                                <span className={s.Name}>Titulo:
                                    <label className={s.Detail}>{coment.title}</label>
                                </span>
                            </div>
                            <div>
                                <span className={s.Name}>Comentario:
                                    <label className={s.Detail}>{coment.comment}</label>
                                </span>
                            </div>
                            <div>
                                <span className={s.Name}>Fecha de Publicacion:
                                    <label className={s.Detail}>{coment.timestamps.slice(0, 9)}</label>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={s.productsPopulated}>
                    {data.statsApp.resumen.productsPopulated.map((product,i) => (
                        <div key={i} className={s.Comment}>
                            <div>
                                <span className={s.Name}>
                                    Name Product:
                                    <label className={s.Detail}>{product.name}</label>
                                </span>
                            </div>
                            <div>
                                <span className={s.Name}>Category Product:
                                    <label className={s.Detail}>{product.category}</label>
                                </span>
                            </div>
                            <div>
                                <span className={s.Name}>Rating of Product:
                                    <label className={s.Detail}>{product.rating}</label>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={s.productsViewed}>
                    {data.statsApp.resumen.productsViewed.map((product,i) => (
                        <div key={i} className={s.Comment}>
                            <div>
                                <span className={s.Name}>Name Product:
                                    <label className={s.Detail}>{product.name}</label>
                                </span>
                            </div>
                            <div>
                                <span className={s.Name}>Category Product:
                                    <label className={s.Detail}>{product.category}</label>
                                </span>
                            </div>
                            <div>
                                <span className={s.Name}>Views of Product:
                                    <label className={s.Detail}>{product.views}</label>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
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