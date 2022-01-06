import React from 'react';
import { useQuery } from '@apollo/client';
import Queries from '../Utils/Queries';


const QueriesPage = () => {
 
   const { loading, data, error } = useQuery(Queries.ALL_PRODUCTS)
  
   
//   console.log('LOADING' ,loading);
  console.log('DATA' ,data);
//   console.log('ERROR' ,error);
//   
//   if (error) return null
//   const info = data.allProducts
// 
//   console.log(info);

  return (
    <div>
      <h1>
        Hello World desde Queries
      </h1>
    </div>
  )
}

export default QueriesPage
