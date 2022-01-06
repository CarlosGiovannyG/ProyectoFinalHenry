import React from "react";
import { BiRestaurant } from "react-icons/bi";
import { NavBar } from "./NavBar";
import { LogIn } from "./LogIn";
import { SignUp } from "./SignUp";
import "../styles/MenuHeader.css"

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