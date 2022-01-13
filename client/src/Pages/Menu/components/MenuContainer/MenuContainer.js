import React from "react";
import "./MenuContainer.css";
import { ProductCard } from "../ProductCard/ProductCard";

export const MenuContainer = ({ products, modalControl, productId }) => {

    console.log(products)
    return (
        <main id="menu" className="">
            <div className="menu">
                <h3>Menu</h3>
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