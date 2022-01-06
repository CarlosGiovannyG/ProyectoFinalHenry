import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CardDetail from '../Components/CardDetail/CardDetail';
import { MenuHeader } from '../Components/Navbar/MenuHeader/MenuHeader';
import BillModal from '../Pages/Facturacion/BillById/BillModal';
import BillClient from '../Pages/Facturacion/BillClient/BillClient';
import Facturacion from '../Pages/Facturacion/Facturacion';
import Home from '../Pages/Home/Home';
import { Menu } from '../Pages/Menu';
import QueriesPage from '../Pages/Queries';



const Rout = () => {
  return (
    <>
      <BrowserRouter>
        <MenuHeader/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/obout" element={<QueriesPage />} />
        <Route path="/bills" element={<Facturacion />} />
        <Route path="/product/:id" element={<CardDetail />} />
        <Route path="/billClient/:id" element={<BillClient />} />
        <Route path="/bill/:id" element={<BillModal />} />
        {/*<Route path="/SignUp" element={<SignUp />} />
                <Route path="/LogIn" element={<LogIn />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Rout
