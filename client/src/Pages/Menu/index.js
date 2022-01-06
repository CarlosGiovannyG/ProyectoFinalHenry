import React, { useEffect, useState } from "react";
import { MenuJumbotron } from "./components/MenuJumbotron/MenuJumbotron";
import { MenuContainer } from "./components/MenuContainer/MenuContainer";
import { Footer } from "../../Components/Footer/Footer";
import { useQuery } from '@apollo/client';
import Queries from '../../Utils/Queries';



export const Menu = () => {

    const { loading, data, error } = useQuery(Queries.ALL_PRODUCTS)

    if (loading) {
        return (
            <div>
                Cargando....
            </div>
        )
    }
if(error) return null

    const allProducts=data.allProducts

    // console.log('MNEU', allProducts);

    return (
        <div>
            <MenuJumbotron />
            <MenuContainer
            products={data.allProducts.products}

            />
            <Footer />
        </div>
    )
}