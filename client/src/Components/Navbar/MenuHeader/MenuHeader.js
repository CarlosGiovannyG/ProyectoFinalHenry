import React from "react";
import { BiRestaurant } from "react-icons/bi";
import { NavBar } from "../NavBar/NavBar";
import { LogIn } from "../LogIn";
import { SignUp } from "../SignUp";
import "./MenuHeader.css"

export const MenuHeader = () => {
    return (
        <header className="menu-header">
            <div className="menu-nav">
                <BiRestaurant className="menu-logo"/>
                <NavBar />
            </div>
            <div className="menu-buttons">
                <LogIn />
                <SignUp />
            </div>
        </header>
    )
}