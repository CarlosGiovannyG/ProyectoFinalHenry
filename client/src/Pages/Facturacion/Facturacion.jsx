import React from 'react';
import styles from './facturacion.module.css';
import { useQuery } from '@apollo/client';
import Queries from '../../Utils/Queries';

const Facturacion = () => {

  const { loading, data, error } = useQuery(Queries.ALL_BILLS)

  
  if (loading) {
    return (
      <div>
        Cargando....
      </div>
    )
  }
  if (error) return null
  
//TODO INFORMACION LISTA PARA USAR 
  // son todas las facturas
  const datos = data.allBills

    console.log('BILSS', datos);
  return (
    <div className={styles.container}>
      <h1>
        Hello World desde Facturacion
      </h1>
    </div>
  )
}

export default Facturacion
