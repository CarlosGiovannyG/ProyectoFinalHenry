import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../Auth/useAuth';
import routes from '../Helpers/Routes';



const PrivateRoutes = ({ hasRole: role, hasRole2:role2}) => {


  const { hasRole, isLogged} = useAuth();


  if (!isLogged()) return <Navigate to={routes.home}/>
  
  return (
    <Outlet/>
  );
};

export default PrivateRoutes;
