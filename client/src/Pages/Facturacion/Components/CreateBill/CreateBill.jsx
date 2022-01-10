import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import Mutations from '../../../../Utils/Mutations';
import Queries from '../../../../Utils/Queries';
import { GrClose } from 'react-icons/gr';
import s from './createBill.module.css'


const CreateBill = ({ close }) => {
  //PRODUCTS_BILLS

  const { loading, data, error } = useQuery(Queries.PRODUCTS_BILLS);

  const [CreateBills] = useMutation(Mutations.CREATE_BILL, {
    refetchQueries: [{ query: Queries.BILLS_CHICKEND }],
    onError: err => {
      console.log('ERRORES', err.graphQLErrors)
    }
  })

  const [newBill, setNewBill] = useState({
    idUser: '',
    description: '',
    products: [],
    numeroMesa: '',
    tipoDePedido: ''
  })

  const handleInputs = e => {
    setNewBill({ ...newBill, [e.target.name]: e.target.value })
  }
  const handleSelect = e => {
    let aux = products.filter(product => { return product._id === e.target.value })
    setNewBill({ ...newBill, products: [...newBill.products, aux[0]] })
  }




  const handleSubmit = async e => {
    e.preventDefault();

    let response = await CreateBills({
      variables: {
        "input": {
          "idUser": newBill.idUser,
          "description": newBill.description,
          "products": newBill.products,
          "numeroMesa": newBill.numeroMesa,
          "tipoDePedido": newBill.tipoDePedido,
        }
      }
    })

    setNewBill({
      idUser: '',
      description: '',
      products: [],
      numeroMesa: '',
      tipoDePedido: ''
    })

    const resp = response.data.CreateBills.message
    alert(resp)
  }
  if (loading) {
    return (
      <div>
        Cargando....
      </div>
    )
  }
  if (error) return null
  const products = data.ProductsBills.products.map(({ _id, name, price }) => { return { _id, name, price } })
  return (
    <div className={s.modalContainer}>

      <div className={s.container}>
        <GrClose size='1.5rem' className={s.close} onClick={() => close('createBill')} />
        <h3 className={s.title} >New Bill</h3>
        <div className={s.form}>
          <form >
            <div className={s.inputs1}>
              <input
                placeholder='Client ID...'
                type='text'
                className={s.id}
                name="idUser"
                value={newBill.idUser}
                onChange={handleInputs}
              />
              <input
                placeholder='Table Number...'
                type='number'
                className={s.table}
                name="numeroMesa"
                value={newBill.numeroMesa}
                onChange={handleInputs}
              />
            </div>
            <div className={s.inputs2}>
              <select
                className={s.products}
                name='es'
                onChange={handleSelect}
              >
                <option selected>Select...</option>
                {products &&
                  products.map(e => (
                    <option value={e._id} key={e._id}> {e.name} </option>
                  ))
                }
              </select>
              <select name='tipoDePedido' className={s.type} onChange={handleInputs} >
                <option selected >Select...</option>
                <option value='salon' >Salon...</option>
                <option value='mesa' >Delvery...</option>
              </select>
            </div>
            <div className={s.textareaContainer}>
              <textarea
                className={s.description}
                name="description"
                value={newBill.description}
                placeholder="Add a description..."
                onChange={handleInputs}
              />
            </div>
          </form>
          <button
            type="button"
            className={s.btnSubmit}
            onClick={handleSubmit}
          >Create Bill</button>
        </div>
      </div>

    </div>
  )
}

export default CreateBill
