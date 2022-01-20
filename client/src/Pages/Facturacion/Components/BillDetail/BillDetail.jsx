import React from 'react';
import styles from './billDetail.module.css'
import { useMutation } from '@apollo/client';
import Queries from '../../../../Utils/Queries';
import Mutations from '../../../../Utils/Mutations'
import { GrTrash } from 'react-icons/gr';
import ReactTooltip from 'react-tooltip';
import { useState } from 'react';


const BillDetail = ({ billDeatil, setBillDeatil, close }) => {

  const [change, setChange] = useState(false)

  const [UpdateBill] = useMutation(Mutations.UPDATE_BILL, {
    refetchQueries: [{ query: Queries.ALL_BILLS }, { query: Queries.BILLS_KITCHEN }],
    onError: error => { console.log(error.graphQLErrors) }
  });


  const removeProduct = (id) => {

    let indexB = billDeatil.products.findIndex(product => product._id === id);
    let aux = billDeatil.products.filter((product, index) => index !== indexB)
    setBillDeatil({ ...billDeatil, products: aux })

    setChange(true)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Submit')
    let products = billDeatil.products.map(({ _id, name, price }) => { return { _id, name, price } })

    let subTotal = 0
    let total = 0

    for (let i = 0; i < products.length; i++) {
      subTotal = Number(products[i].price) + subTotal
      total = (subTotal * 20 / 100) + subTotal
    }

    let response = await UpdateBill({
      variables: {
        "input": {
          "id": billDeatil._id,
          "idUser": '456445',
          "description": billDeatil.description,
          "products": products,
          "numeroMesa": Number(billDeatil.numeroMesa),
          "tipoDePedido": billDeatil.tipoDePedido,
          statusCocina: 'Open',
          "subTotal": subTotal,
          "total": total
        }
      }

    })

    let res = response.data.UpdateBill.message
    close()

  }

  if (!billDeatil) return null;
  return (
    <div className={styles.container}>

      <div className={styles.containerTitle}>
        <h1 className={styles.title}>Edit Invoice</h1>

        {change &&
          <div classname={styles.containerButton}>
            <button
              className={styles.Button}
              onClick={handleSubmit}
            >EDIT</button>
          </div>
        }

      </div>
      <div className={styles.containerCenter}>
        <div className={styles.containerInfo}>
          <div className={styles.containerDate}>
            <label className={styles.infoLabel}>Creation Date:</label><br />
            <label className={styles.infoLabel1}>{billDeatil.date}</label><br />
            <label className={styles.infoLabel}>Table Number:</label><br />
            <label className={styles.infoLabel1}>{billDeatil.numeroMesa}</label><br />
            <label className={styles.infoLabel}>Status Kitchen:</label><br />
            <label className={styles.infoLabel1}>{billDeatil.statusCocina}</label>
          </div>
          <div className={styles.containerDescription}>
            <label className={styles.infoLabel}>Description: </label><br />
            <p className={styles.infoLabel1}>{billDeatil.description}</p>
          </div>

          <div className={styles.containerPrice}>
            <label className={styles.infoLabel}>Subtotal:</label><br />
            <label className={styles.infoLabel1}>{billDeatil.subTotal}</label><br />
            <label className={styles.infoLabel}>Total: </label><br />
            <label className={styles.infoLabel1}>{billDeatil.total}</label>
          </div>

        </div>
        <div className={styles.containerProducts}>

          {
            billDeatil.products.map(product => (
              <div className={styles.containerProdut}>
                <div>
                  <labe>Name:{product.name}</labe>
                </div>
                <div>
                  <labe>Price:{product.price}</labe>
                </div>
                <div>
                  <td ><GrTrash
                    size='1.5rem'
                    data-tip data-for='delete'
                    onClick={() => { removeProduct(product._id) }}
                  /></td>
                </div>
              </div>
            ))
          }
        </div>

        <ReactTooltip id='delete' place='left' effect="solid" >DELETE </ReactTooltip>
      </div>

    </div>
  )

}
// 
export default BillDetail


// fecha = Date()
// 2022 - 01 - 17T01: 26: 15.235Z
// fecha.toLocaleString()
// '1/16/2022, 7:26:15 PM'