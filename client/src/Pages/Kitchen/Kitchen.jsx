import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import Queries from '../../Utils/Queries';
import Mutations from '../../Utils/Mutations'
import s from './kitchen.module.css';
import { Modal } from '@material-ui/core';
import CardKitchen from './Components/CardKitchen/CardKitchen';
import useAuth from '../../Auth/useAuth';
import CardProductKitchen from './Components/CardProductKitchen/CardProductKitchen';
import loadingGif from '../../img/loading.gif';

const makeados = [{
  date: "2022-01-07T15:44:36.009Z",
  description: null,
  numeroMesa: null,
  statusCocina: "Open",
  tipoDePedido: null,
  _id: "61d85fe88afe91ecfa4612cf",
}, {
  date: "2022-01-07T15:44:36.009Z",
  description: null,
  numeroMesa: null,
  statusCocina: "Open",
  tipoDePedido: null,
  _id: "61d85fe88afe91ecfa4612cf",
}, {
  date: "2022-01-07T15:44:36.009Z",
  description: null,
  numeroMesa: null,
  statusCocina: "Open",
  tipoDePedido: null,
  _id: "61d85fe88afe91ecfa4612cf",
}, {
  date: "2022-01-07T15:44:36.009Z",
  description: null,
  numeroMesa: null,
  statusCocina: "Open",
  tipoDePedido: null,
  _id: "61d85fe88afe91ecfa4612cf",
}, {
  date: "2022-01-07T15:44:36.009Z",
  description: null,
  numeroMesa: null,
  statusCocina: "Open",
  tipoDePedido: null,
  _id: "61d85fe88afe91ecfa4612cf",
}]

const Kitchen = () => {

  const { billKitchenDetail, kitchenDeatil, openCloseModal } = useAuth()
  const { loading, data, error } = useQuery(Queries.BILLS_KITCHEN);    // Query a las las bills abiertas
  const [ClosedBill] = useMutation(Mutations.CLOSED_BILL, {            // Mutationa que postea bills que cerramos
    refetchQueries: [{ query: Queries.BILLS_KITCHEN }],
    onError: error => {
      console.log(error);
    }
  })

  const handleClosedBill = async e => {
    e.preventDefault();

    let response = await ClosedBill({
      variables: {
        "input": {
          "id": '61d861dc8afe91ecfa4612d5'
        }
      }
    })
    console.log('response', response)
    const { message } = response.data.ClosedBill
    alert(message)
  }



  if (loading) {
    return (
      <div>
        <img className={s.loading} src={loadingGif} alt="Loading Gif"/>
      </div>
    )
  }
  if (error) return null
  
  //.map(({ description, idUser, numeroMesa, status, statusCocina, subTotal, total, products }) => { return { description, idUser, numeroMesa, status, statusCocina, subTotal, total, products } })
  const infoKitchenBill = data.BillsKitchen
    .filter(bill => bill._id === billKitchenDetail)
    .map(({ products }) => products)


  //<CardKitchen info={info} />

  const infoKitchen = data.BillsKitchen //.map(({ _id, description, date, numeroMesa, tipoDePedido, statusCocina }) => { return { _id, description, date, numeroMesa, tipoDePedido, statusCocina } });
  //infoKitchen.map(info=>console.log(info))
  console.log(infoKitchen)

  return (
    <div className={s.container}>
      <div className={s.containerCentro}>
        {infoKitchen &&
          makeados.map(info => (
            <CardKitchen info={infoKitchen[0]} />
          ))
        }
      </div>
      {/* <Modal open={kitchenDeatil} >
        <CardProductKitchen close={openCloseModal} infoKitchenBill={infoKitchenBill[0]} />
      </Modal> */}

    </div>
  )
}

export default Kitchen
