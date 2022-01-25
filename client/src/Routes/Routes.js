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
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const Rout = () => {
  return (

    // <Layouts><AdminMainPage /></Layouts>

    <>
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<Home />} />

          <Route path={routes.menu} element={<Menu />} />
          
          
          {/* RUTAS PUBLICAS */}
          
          
          <Route path={routes.UserMainPage} element={<PublicRoutes  />}>
            <Route path={routes.UserMainPage} element={<Layouts><UserMainPage /></Layouts>} />
          </Route>
          
          <Route path={routes.account} element={<PublicRoutes  />}>
            <Route path={routes.account} element={<Layouts><AccountPage /></Layouts>} />
          </Route>



          {/* RUTAS PRIVADAS */}
          <Route path={routes.AdminMainPage} element={<PrivateRoutes hasRole='admin' />}>
            <Route path={routes.AdminMainPage} element={<Layouts><AdminMainPage /></Layouts>} />
          </Route>

          <Route path={routes.kitchen} element={<PrivateRoutes hasRole='admin' hasRole2='cook' />}>
            <Route path={routes.kitchen} element={<Layouts><Kitchen /></Layouts>} />
          </Route>
         
          <Route path={routes.bills} element={<PrivateRoutes hasRole='admin' hasRole2='cashier' />}>
            <Route path={routes.bills} element={<Layouts><Bills /></Layouts>} />
          </Route>
         
          <Route path={routes.cart} element={<PrivateRoutes hasRole='admin' hasRole2='regular' />}>
            <Route path={routes.cart} element={<Layouts><Cart /></Layouts>} />
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default Rout
