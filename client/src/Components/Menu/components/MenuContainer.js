import React from "react";
import { SearchBar } from "./SearchBar";
import "../styles/MenuContainer.css";
import { ProductCard } from "./ProductCard";

const fakeData = [
    "American Burguer",
    "Bolognese",
    "Omelette",
    "Carbonara",
    "French Fries",
    "Lasagne",
    "Shrimps",
    "Fish",
    ". . ."
]
export const MenuContainer = () => {
    return (
        <main id="menu" className="">
            <div className="menu-input">
                <h3>Menu</h3>
                <SearchBar />
            </div>
            <section className="menu-list">
                {fakeData.map(e => {
                    return (
                        <ProductCard
                            title={e}
                        />
                    )
                })}
            </section>
        </main>
    )
}