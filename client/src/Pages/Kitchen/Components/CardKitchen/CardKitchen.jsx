import React from 'react';
import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import useAuth from '../../../../Auth/useAuth';
import CardProductBill from '../CardProducBill/CardProductBill';
import CardProductKitchen from '../CardProductKitchen/CardProductKitchen';
import styles from './cardKitchen.module.css';
import Transsition from '../../../../Hooks/Transsition';
import { useMutation } from '@apollo/client';
import Mutations from '../../../../Utils/Mutations';
import Queries from '../../../../Utils/Queries';

const CardKitchen = ({ info, infoKitchen, close }) => {
  const [ready, setReady] = React.useState(false);

  const [ClosedBill] = useMutation(
    Mutations.CLOSED_BILL,
    {
      refetchQueries: [{ query: Queries.BILLS_KITCHEN }],
      onError: (error) => { console.log('Errores', error.graphQLErrors); }
    }
  )

  const [WorkingBill] = useMutation(
    Mutations.WORKING_BILL,
    {
      refetchQueries: [{ query: Queries.ALL_BILLS }],
      onError: (error) => { console.log('Errores', error.graphQLErrors); }
    }
  )

  const handleClose = async function (id) {

    const response = await ClosedBill({
      variables: {
        "input": {
          "id": info._id
        }
      }
    })
    let respuesta = response.data.ClosedBill.message;
    alert(respuesta);
  }

  const handleButton = async function () {
    setReady(!ready);


    const response = await WorkingBill({
      variables: {
        "input": {
          "id": info._id
        }
      }
    })
    let respuesta = response.data.WorkingBill.message;
    alert(respuesta);
  }

  function getRandomInt(max) {           // vamos a asignar una mesa aleatoria hasta que tenamos las reales
    return Math.floor(Math.random() * max);
  }

  return (
    <Transsition>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <div className={styles.titles}>
            <div className={styles.table}>TABLE {getRandomInt(20)}</div>
            <div className={styles.type}>{info.tipoDePedido}</div>
          </div>
          <div className={styles.containerBotones}>
            <GrClose size={'2rem'} className={styles.btnCancel} onClick={handleClose} />
          </div>
        </div>
        <div className={styles.containerProduct}>
          {info.products.map(dato => (
            <CardProductBill dato={dato} />
          ))}
        </div>
        <div className={styles.btnCloseContainer}>

          {
            !ready && <Transsition><button className={styles.btnClose} onClick={handleButton}  >MARK AS READY</button></Transsition>
          }
          {
            ready && <Transsition><button className={styles.btnClose}  >WORKING</button></Transsition>
          }

        </div>
      </div>
    </Transsition>


  )
}

export default CardKitchen
