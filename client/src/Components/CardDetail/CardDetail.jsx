import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import Queries from '../../Utils/Queries/';
import {  useParams } from 'react-router-dom';




const CardDetail = () => {

  const [getProduct, result] = useLazyQuery(Queries.FIND_PRODUCT);
  const { id } = useParams()

  useEffect(() => {
    getProduct({ variables: { input: { id: id } } })

  }, [getProduct, id])

  //todo RESIVO LOS DATOS DE CADA PRODUCTO

  const product = result.data;
  console.log('DETALLE', product.ProductById.product.name);

  return (
    <div>
      <h2>
        Hello World desde CardDetail
      </h2>
    </div>
  )
}

export default CardDetail
