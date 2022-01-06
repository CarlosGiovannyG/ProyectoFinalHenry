import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import "./MenuContainer.css";
import { ProductCard } from "../ProductCard/ProductCard";

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


export const MenuContainer = ({ products }) => {
    console.log(products);

    return (
        <main id="menu" className="">
            <div className="menu-input">
                <h3>Menu</h3>
                <SearchBar />
            </div>
            <section className="menu-list">
                <ProductCard
                    products={products}
                />
            </section>
            {/* <section className="menu-list">
                {fakeData.map(e => {
                    return (
                        <ProductCard
                            products={products}
                        />
                    )
                })}
            </section> */}
        </main>
    )
}