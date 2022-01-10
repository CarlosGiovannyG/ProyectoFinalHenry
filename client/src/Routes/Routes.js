import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import routes from '../Helpers/Routes'
import BillModal from '../Pages/Facturacion/BillById/BillModal';
import BillClient from '../Pages/Facturacion/BillClient/BillClient';
import Home from '../Pages/Home/Home';
import { Menu } from '../Pages/Menu';
import BillsChickend from '../Pages/Facturacion/BillsChickend/BillsChickend';
import Layouts from '../Components/Layuots/Layouts';
import Bills from '../Pages/Facturacion/Bills';
import CreateBill from '../Pages/Facturacion/Components/CreateBill/CreateBill';

const Rout = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.menu} element={
            <Layouts>
              <Menu />
            </Layouts>
          } />
          <Route path={routes.checkIn} element={<CreateBill />} />
          <Route path={routes.bills} element={
            <Layouts>
              <Bills />
            </Layouts>
          } />
          <Route path={routes.billClient()} element={<BillClient />} />
          <Route path={routes.bill()} element={<BillModal />} />
          <Route path={routes.chickend} element={<BillsChickend />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Rout
