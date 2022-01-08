import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CardDetail from '../Components/CardDetail/CardDetail';
import routes from '../Helpers/Routes'
import { MenuHeader } from '../Components/Navbar/MenuHeader/MenuHeader';
import BillModal from '../Pages/Facturacion/BillById/BillModal';
import BillClient from '../Pages/Facturacion/BillClient/BillClient';
import CreateBill from '../Pages/Facturacion/CreateBill/CreateBill';
import Facturacion from '../Pages/Facturacion/Facturacion';
import Home from '../Pages/Home/Home';
import { Menu } from '../Pages/Menu';
import QueriesPage from '../Pages/Queries';
import BillsChickend from '../Pages/Facturacion/BillsChickend/BillsChickend';



const Rout = () => {
  return (
    <>
      <BrowserRouter>
        <MenuHeader/>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.menu} element={<Menu />} />
        <Route path={routes.account} element={<QueriesPage />} />
          <Route path={routes.product()} element={<CardDetail />} />
        <Route path={routes.checkIn} element={<CreateBill />} />
        <Route path={routes.bills} element={<Facturacion />} />
        <Route path={routes.billClient()} element={<BillClient />} />
        <Route path={routes.bill()} element={<BillModal />} />
        <Route path={routes.chickend} element={<BillsChickend />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Rout
