import React from "react";
import { MenuHeader } from "./components/MenuHeader";
import { MenuJumbotron } from "./components/MenuJumbotron";
import { MenuContainer } from "./components/MenuContainer";
import { MenuFooter } from "./components/MenuFooter";

export const Menu = () => {
    return (
        <div>
            <MenuHeader />
            <MenuJumbotron />
            <MenuContainer />
            <MenuFooter />
        </div>
    )
}