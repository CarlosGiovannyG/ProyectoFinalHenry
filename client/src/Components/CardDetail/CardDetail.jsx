import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import Queries from '../../Utils/Queries/';
import {  useParams } from 'react-router-dom';




const CardDetail = () => {

  const [getProduct, {loading, error, data}] = useLazyQuery(Queries.FIND_PRODUCT);
  const { id } = useParams()

  useEffect(() => {
      getProduct({ variables: { input: { id: id } } })
  }, [getProduct, id])

  //todo RESIVO LOS DATOS DE CADA PRODUCTO
  if(loading) {
    return <p>Loading...</p>
  }
  if(error) {
    return <p>There was an error..</p>
  }
  if(data && !loading) {
    var { product } = data.ProductById;
    return (
      <div>
        <img src={product.image} alt={product.name}/>
        <h2>
          {product.name}
        </h2>
        <p>price: {product.price}</p>
        <p>rating: {product.rating}</p>
      </div>
    )
  }
  return (
    <p>Loading..</p>
  )
}

export default CardDetail
