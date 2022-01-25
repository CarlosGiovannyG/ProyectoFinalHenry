import React, { useState, useRef } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import Mutations from '../../../../Utils/Mutations';
import Queries from '../../../../Utils/Queries';
import s from './createBill.module.css'
import CreateBillProductCart from './Components/CreateBillProductCart';


const CreateBill = ({ close }) => {
  //PRODUCTS_BILLS

  const { loading, data, error } = useQuery(Queries.PRODUCTS_BILLS);
  const selector = useRef('Select...');

  const [CreateBills] = useMutation(Mutations.CREATE_BILL, {
    refetchQueries: [{ query: Queries.BILLS_KITCHEN },
    { query: Queries.ALL_BILLS },
    { query: Queries.BILLS_KITCHEN }],
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
    if (e.target.value !== 'Select...') {
      let aux = products.filter(product => { return product._id === e.target.value });
      setNewBill({ ...newBill, products: [...newBill.products, aux[0]] });
    }
  }


  const handleSubmit = async e => {
    e.preventDefault();
    let aux = newBill.products

    let subTotal = 0
    let total = 0

    for (let i = 0; i < aux.length; i++) {
      subTotal = aux[i].price + subTotal
      total = (subTotal * 20 / 100) + subTotal
    }



    let response = await CreateBills({
      variables: {
        "input": {
          "idUser": newBill.idUser,
          "description": newBill.description,
          "products": newBill.products,
          "numeroMesa": newBill.numeroMesa,
          "tipoDePedido": newBill.tipoDePedido,
          "fechaEntrega": Date.now(),
          "subTotal": subTotal,
          "total": total
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
    close('createBill')
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
        <h3 className={s.title} >New Bill</h3>
        <div className={s.form}>
          <form >
            <div className={s.inputs}>
              <input
                placeholder='Client ID...'
                type='text'
                className={s.input}
                name="idUser"
                value={newBill.idUser}
                onChange={handleInputs}
              />
              <input
                placeholder='Table Number...'
                type='number'
                className={s.input}
                name="numeroMesa"
                value={newBill.numeroMesa}
                onChange={handleInputs}
              />
            </div>
            <div className={s.inputs}>
              <select
                className={s.input}
                name='es'
                onChange={handleSelect}
                ref={selector}
              >
                <option selected>Select...</option>
                {products &&
                  products.map(e => (
                    <option value={e._id} key={e._id}> {e.name} </option>
                  ))
                }
              </select>
              <select name='tipoDePedido' className={s.input} onChange={handleInputs} >
                <option default selected >Select...</option>
                <option value='salon' >Salon...</option>
                <option value='mesa' >Delvery...</option>
              </select>
            </div>

            {
              newBill.products[0] &&
              <div className={s.cards}>{
                newBill.products.map((p, index) => {
                  return <CreateBillProductCart name={p.name} setNewBill={setNewBill} index={index} newBill={newBill} />
                })}
              </div>
            }

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
