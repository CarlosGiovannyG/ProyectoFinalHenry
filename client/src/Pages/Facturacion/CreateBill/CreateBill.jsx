import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import Mutations from '../../../Utils/Mutations';
import Queries from '../../../Utils/Queries';



const CreateBill = () => {
//PRODUCTS_BILLS

  const { loading, data, error } = useQuery(Queries.PRODUCTS_BILLS);
  
  const [CreateBills] = useMutation(Mutations.CREATE_BILL, {
    refetchQueries: [{ query: Queries.BILLS_CHICKEND }],
    onError: err => {
console.log('ERRORES', err.graphQLErrors)
    }
  })

  const [newBill, setNewBill] = useState({
    idUser:'',
    description:'',
    products:[],
    numeroMesa:'',
    tipoDePedido:''
  })
  
  const handleInputs = e => {
    setNewBill({...newBill, [e.target.name]: e.target.value})
  }
  const handleSelect = e => {
    let aux = products.filter(product => { return product._id === e.target.value })
    setNewBill({ ...newBill, products: [...newBill.products, aux[0]]})
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
    }})

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
  const products = data.ProductsBills.products.map(({_id,name,price})=>{return{_id,name,price}})
  return (
    <div className="container mt-5 col-12  ">
      <div className="container p-5 col-10 bg-secondary ">
        <form >
          <div className="form-group">
            <label className="form-label  bg-light col-12 mt-2">Descripcion</label>
            <textarea
              className="col-12"
              name="description"
              value={newBill.description}
              placeholder="Agrega una descripcion"
              onChange={handleInputs}
            />
          </div>
          <div className="form-group " >
            <label className="form-label  bg-light col-3 mt-2 me-2">idUser</label>
            <input
              type='text'
              className="col-3"
              name="idUser"
              value={newBill.idUser}
              onChange={handleInputs}
            />
          </div>
          <div className="form-group " >
            <label className="form-label  bg-light col-3 mt-2 me-2">Mesa</label>
            <input
              type='number'
              className="col-3"
              name="numeroMesa"
              value={newBill.numeroMesa}
              onChange={handleInputs}
            />
          </div>
          <div className="form-group " >
            <label className="form-label  bg-light col-4 mt-2 me-4">Productos</label>
            <select
              name='es' className='col-5'
              onChange={handleSelect}
            >
              <option  selected>Selecciona...</option>
              {products &&
                products.map(e => (
                  <option value={e._id} key={e._id}> {e.name} </option>
                ))
              }

            </select>
          </div>

          <div className="form-group " >
            <label className="form-label  bg-light col-4 mt-2 me-4">Tipo Entrega</label>
            <select name='tipoDePedido' className='col-5' onChange={handleInputs} >
              <option  selected >Selecciona...</option>
              <option value='salon' >Salon...</option>
              <option value='mesa' >Domicilio...</option>
            </select>
          </div>
          <input className="btn btn-outline-danger" type="reset" value="Restaurar"/>
        </form>

      </div>
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={handleSubmit}
      >FACTURAR</button>
   </div>
  )
}

export default CreateBill
