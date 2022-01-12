import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import Queries from '../../../Utils/Queries';



const BillClient = () => {

  const [getBillClient, result] = useLazyQuery(Queries.BILL_BY_CLIENT);

  //TODO EL ID DEBE SER DEL URUASRIO
  const { id } = useParams()

  useEffect(() => {
    getBillClient({ variables: { input: { id: id } } })

  }, [getBillClient, id])

  //todo RESIVO LOS DATOS DE CADA PRODUCTO

  const billClient = result.data;
  console.log('FACTURA CLIENTE', billClient);

  return (
    <div>
      <h3>
        Hello World desde Factura Cliente
      </h3>
    </div>
  )
}

export default BillClient
