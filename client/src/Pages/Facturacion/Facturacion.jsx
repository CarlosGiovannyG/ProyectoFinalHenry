import React from 'react';
import {Link} from 'react-router-dom'
import { useQuery } from '@apollo/client';
import Queries from '../../Utils/Queries';
import styles from './facturacion.module.css';

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

    console.log('FACTURAS', datos);
  return (
    <div className={styles.container}>
      <h1>
        Hello World desde Facturacion
      </h1>
        {/* TODO ENVIAMOS EL ID USUARIO */}
      <Link to={`/billClient/${'7'}`} >
        <button className={styles.line}>VER FACTURA CLIENTE</button>
      </Link>
        {/* TODO ENVIAMOS EL ID FACTURA */}
      <Link to={`/bill/${"61d4d449bd0a23ca1df110a8"}`} >
        <button className={styles.line}>VER UNA FACTURA </button>
      </Link>
    </div>
  )
}

export default Facturacion
