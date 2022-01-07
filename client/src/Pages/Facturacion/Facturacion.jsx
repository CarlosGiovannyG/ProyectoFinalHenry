import React from 'react';
import {Link} from 'react-router-dom'
import { useQuery } from '@apollo/client';
import Queries from '../../Utils/Queries';
import routes from '../../Helpers/Routes'
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
      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
      <Link to={routes.billClient('7')} >
        {/*  ENVIAMOS EL ID USUARIO */}
        <button  type="button" className="btn btn-outline-primary">VER FACTURA CLIENTE</button>
      </Link>
        <Link to={`/bill/${"61d4d449bd0a23ca1df110a8"}` } >
        {/* ENVIAMOS EL ID FACTURA */}
          <button type="button" className="btn btn-outline-success">VER UNA FACTURA</button>
      </Link>
      <Link to={routes.checkIn} >
        <button type="button" className="btn btn-outline-info">FACTURAR</button>
      </Link>
      <Link to={routes.chickend} >
          <button type="button" className="btn btn-outline-warning">FACTURAS COCINA</button>
      </Link>
      </div>

    </div>
  )
}

export default Facturacion
