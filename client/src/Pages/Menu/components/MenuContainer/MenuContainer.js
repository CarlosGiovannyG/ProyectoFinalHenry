import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import "./MenuContainer.css";
import { ProductCard } from "../ProductCard/ProductCard";

export const MenuContainer = ({ products, modalControl, productId }) => {


    return (
        <main id="menu" className="">
            <div className="menu-input">
                <h3>Menu</h3>
                <SearchBar />
            </div>
            <section className="menu-list">
                {products.map(e => {
                    return (
                        <ProductCard
                            key={e._id}
                            product={e}
                            modalControl={modalControl}
                            productId={productId}
                        />
                    )
                })}
            </section>
        </main>
    )
}