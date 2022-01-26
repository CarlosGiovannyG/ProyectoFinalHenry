import React from "react";
import { useNavigate } from "react-router";
import s from './BotonCart.module.css';
import routes from "../../../../Helpers/Routes";
import ReactTooltip from "react-tooltip";

export default function BotonCart({cart, validateBtn}){

    const navigate = useNavigate();

    return(<div>
        <button className={validateBtn ? s.btnCart : s.btnCartError} data-tip data-for='tooltip'
        onClick={() => { return validateBtn ? navigate(`${routes.cart}`) : null }}
        >YOUR ORDER ({cart.length})</button>
        </div>
    )
}