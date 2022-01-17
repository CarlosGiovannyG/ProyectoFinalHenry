import React from 'react';
import { useQuery } from '@apollo/client';
import Queries from '../../../../Utils/Queries';
import columns from '../../../../Helpers/ColumsMaterial';
import MaterialTable from 'material-table';


import styles from './billsAll.module.css'
import { GrClose } from 'react-icons/gr';


const BillsAll = ({ close}) => {

  const { loading, data, error } = useQuery(Queries.ALL_BILLS);
  if (loading) {
    return (
      <div>
        Cargando....
      </div>
    )
  }
  if (error) return null

  const datos = data.allBills
  const modalTable = datos.map(({ description, idUser, numeroMesa, status, statusCocina, subTotal, total, products }) => { return { description, idUser, numeroMesa, status, statusCocina, subTotal, total, products } })


  return (
    <div className={styles.container}>
      <GrClose size='2.5rem' className={styles.close} onClick={() => close('allBills')} />
      <div className={styles.containerCentro}>
        <MaterialTable
          columns={columns.allBills}
          data={modalTable}
          title="Listado de Facturas"
          actions={[
            {
              icon: 'edit',
              tooltip: 'Editar Factura',
              onClick: (event, rowData) => window.confirm(`has hecho click en editar${rowData.idUser}`)
            },
            {
              icon: 'save',
              tooltip: 'Guardar Factura',
              onClick: (event, rowData) => alert(`has hecho click en editar${rowData.idUser}`)
            },
            {
              icon: 'delete',
              tooltip: 'Eliminar Factura',
              onClick: (event, rowData) => alert(`has hecho click en editar${rowData.idUser}`)
            },
            {
              icon: 'refresh',
              tooltip: 'Refresh Data',
              isFreeAction: true,

            }
          ]}
          options={{
            headerStyle: {
              backgroundColor: '#e8eaf5',
            },
            actionsColumnIndex: -1,
          }}
          localization={{
            header: {
              actions: 'Acciones'
            }
          }}
        />
     </div>
    </div>
  )
}

export default BillsAll
