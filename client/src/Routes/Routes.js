import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import routes from '../Helpers/Routes'
import BillModal from '../Pages/Facturacion/BillById/BillModal';
import BillClient from '../Pages/Facturacion/BillClient/BillClient';
import Home from '../Pages/Home/Home';
import { Menu } from '../Pages/Menu';
import Layouts from '../Components/Layuots/Layouts';
import Bills from '../Pages/Facturacion/Bills';
import CreateBill from '../Pages/Facturacion/Components/CreateBill/CreateBill';
import Kitchen from '../Pages/Kitchen/Kitchen';
import UserMainPage from '../Pages/UserMainPage/UserMainPage';

const Rout = () => {
  return (


    <>
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.menu} element={<Layouts><Menu /></Layouts>} />
          <Route path={routes.checkIn} element={<CreateBill />} />
          <Route path={routes.bills} element={<Layouts><Bills /></Layouts>} />
          <Route path={routes.kitchen} element={<Layouts><Kitchen /></Layouts>} />
          <Route path={routes.billClient()} element={<BillClient />} />
          <Route path={routes.bill()} element={<BillModal />} />
          <Route path={routes.UserMainPage} element={<Layouts><UserMainPage /></Layouts>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Rout
