import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import "../styles/MenuJumbotron.css"

export const MenuJumbotron = () => {
    return (
        <section className="menu-jumbotron">
            <div className="menu-info">
                <h2>Menu</h2>
                <div className="line"/>
                <p>Checkout our menu</p>
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