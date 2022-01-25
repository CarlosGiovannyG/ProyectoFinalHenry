import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../Auth/useAuth';
import routes from '../Helpers/Routes';



const PrivateRoutes = ({ hasRole: role, hasRole2:role2}) => {


  const { hasRole} = useAuth();


  console.log(hasRole(role),'PRIVATE');
  if (role && !hasRole(role) && !hasRole(role2)) return <Navigate to={routes.home}/>
  
  return (
    <Outlet/>
  );
};

export default PrivateRoutes;
