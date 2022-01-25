import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../Auth/useAuth';
import routes from '../Helpers/Routes';




const PublicRoutes = () => {

  const { isLogged } = useAuth();
  
  if (!isLogged()) return <Navigate to={routes.home} />

  return (
    <Outlet/>
  );
};

export default PublicRoutes;
