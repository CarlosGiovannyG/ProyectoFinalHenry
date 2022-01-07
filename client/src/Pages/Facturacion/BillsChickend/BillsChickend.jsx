import React from 'react';
import { useQuery } from '@apollo/client';
import Queries from '../../../Utils/Queries';

const BillsChickend = () => {

  const { loading, data, error } = useQuery(Queries.BILLS_CHICKEND);

  if (loading) {
    return (
      <div>
        Cargando....
      </div>
    )
  }
  if (error) return null


  const billChickend = data;

  console.log('FACTURA COCINA', billChickend);

  return (
    <div>
      <h3>
        Hello World desde Factura cocina
      </h3>
    </div>
  )
}

export default BillsChickend
