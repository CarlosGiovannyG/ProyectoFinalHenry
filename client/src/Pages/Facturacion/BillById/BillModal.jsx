import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import Queries from '../../../Utils/Queries';


const BillModal = () => {

  const [getBillClient, result] = useLazyQuery(Queries.BILL_BY_ID);

  //TODO EL ID DEBE SER DE LA FACTURA
  const { id } = useParams()

  useEffect(() => {
    getBillClient({ variables: { input: { id: id } } })

  }, [getBillClient, id])

  //todo RESIVO LOS DATOS DE CADA PRODUCTO

  const bill = result.data;
  console.log('UNA FACTURA', bill);

  return (
    <div>
      
    </div>
  )
}

export default BillModal
