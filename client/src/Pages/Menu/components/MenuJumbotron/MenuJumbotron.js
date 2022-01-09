import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./MenuJumbotron.css"

export const MenuJumbotron = () => {
    return (
        <section className="menu-jumbotron">
            <div className="menu-info">
                <h2 className="menu-title">Menu</h2>
                <div className="line"/>
                <p  className="menu-subtitle">Checkout Our Menu</p>
            </div>
            <div className="menu-btn">
                <p>Scroll for more </p>
                <a href="#menu">
                    <IoIosArrowDown />
                </a>
            </div>
        </section>
    )
}