import React from "react";
import { useNavigate } from "react-router";
import s from './BotonCart.module.css';
import routes from "../../../../Helpers/Routes";
import ReactTooltip from "react-tooltip";

export default function BotonCart({cart}){

    const navigate = useNavigate();

    return(<div>
        <button className={s.btnCart} data-tip data-for='tooltip'
        onClick={() => { navigate(`${routes.cart}`) }}
        >YOUR ORDER ({cart.length})</button>
        </div>
    )
}