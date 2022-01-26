import React from "react";
import "./MenuContainer.css";
import { ProductCard } from "../ProductCard/ProductCard";

export const MenuContainer = ({ products, modalControl, productId }) => {

    console.log(products)

    let main = products.filter(p=> p.category === 'main')
    let sides = products.filter(p=> p.category === 'sides')
    let beverages = products.filter(p=> p.category === 'beverages')
    let dessert = products.filter(p=> p.category === 'dessert')

    let arranged = main.concat(sides);
    arranged = arranged.concat(beverages);
    arranged = arranged.concat(dessert)

    console.log(products)
    return (
        <main id="menu" className="">
            <div className="menu">
                <h3>Menu</h3>
            </div>
            <section className="menu-list">
                {arranged.map(e => {
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