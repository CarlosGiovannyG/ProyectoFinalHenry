import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import routes from '../Helpers/Routes';
import BillClient from '../Pages/Facturacion/BillClient/BillClient';
import Home from '../Pages/Home/Home';
import { Menu } from '../Pages/Menu';
import Layouts from '../Components/Layuots/Layouts';
import Bills from '../Pages/Facturacion/Bills';
import CreateBill from '../Pages/Facturacion/Components/CreateBill/CreateBill';
import Kitchen from '../Pages/Kitchen/Kitchen';
import AccountPage from '../Pages/Acoount/AccountPage';
import UserMainPage from '../Pages/UserMainPage/UserMainPage';
import Cart from '../Pages/Cart/Cart';
import AdminMainPage from '../Pages/AdminMainPage/AdminMainPage';
import Address from '../Components/Froms/Address/Address';

const Rout = () => {
  return (


    <>
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.menu} element={<Menu />} />
          <Route path={routes.cart} element={<Layouts><Cart /></Layouts>} />
          <Route path={routes.checkIn} element={<CreateBill />} />
          <Route path={routes.bills} element={<Layouts><Bills /></Layouts>} />
          <Route path={routes.kitchen} element={<Layouts><Kitchen /></Layouts>} />
          <Route path={routes.account} element={<Layouts><AccountPage /></Layouts>} />
          <Route path={routes.UserMainPage} element={<Layouts><UserMainPage /></Layouts>} />
          <Route path={routes.AdminMainPage} element={<Layouts><AdminMainPage /></Layouts>} />
          <Route path={routes.billClient()} element={<BillClient />} />
          <Route path={'/Address'} element={<Layouts><Address /></Layouts>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Rout
