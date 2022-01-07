import React from 'react';
import { useQuery } from '@apollo/client';
import Queries from '../../../Utils/Queries';
import { useMutation } from '@apollo/client';
import Mutations from '../../../Utils/Mutations'


const BillsChickend = () => {

  const { loading, data, error } = useQuery(Queries.BILLS_CHICKEND);
  const [ClosedBill] = useMutation(Mutations.CLOSED_BILL, {
    onError: error => {
      console.log(error);
    }
  })
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

  const handleClosedBill = async e => {
    e.preventDefault();
    
    let response = await ClosedBill({
      variables: {
        "input": {
          "id": '61d50063d65c4ce055ee0396' 
        }
      }
    })
console.log('response', response)
    const { message } = response.data.ClosedBill
    alert(message)
  }

  return (
    <div>
      <h3>
        Hello World desde Factura cocina
      </h3>
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={handleClosedBill}
      >PEDIDO ENTREGADO</button>

    </div>
  )
}

export default BillsChickend
