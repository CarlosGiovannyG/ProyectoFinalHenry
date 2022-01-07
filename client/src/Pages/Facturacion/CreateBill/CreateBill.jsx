import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Mutations from '../../../Utils/Mutations'
import useAuth from '../../../Auth/useAuth';


const CreateBill = () => {

  const { esHistory } = useAuth();
  const [CreateBill] = useMutation(Mutations.CREATE_BILL, {
    onError: err => {
console.error(err.graphQLErrors[0])
    }
  })

  const [newBill, setNewBill] = useState({
    idUser:'',
    description:'',
    es:'',
    numeroMesa:'',
    tipoDePedido:''
  })
  
  console.log('FACTURAScrear', esHistory);
  const handleInputs = e => {
    setNewBill({...newBill, [e.target.name]: e.target.value})
  }

  const handleSubmit = async e => {
    e.preventDefault();
    
    let response = await CreateBill({
      variables: {
        "input": {
          "idUser": null,
          "description": null,
          "es": [
            {
              "ide": null,
              "name": null,
              "price": null
            }
          ],
          "numeroMesa": null,
          "tipoDePedido": null
        }
    }})

console.log(response.data)
}

  return (
    <div className="container mt-5 col-6 bg-secondary ">
      <form onChange={handleSubmit}>
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
          <label className="form-label  bg-light col-2 mt-2 me-2">Mesa numero</label>
          <input
            type='number'
            className="col-2"
            name="numeroMesa"
            value={newBill.numeroMesa}
            onChange={handleInputs}
          />
        </div>
        <div className="form-group " >
          <label className="form-label  bg-light col-2 mt-2 me-2">Mesa numero</label>
          <input
            type='number'
            className="col-2"
            name="numeroMesa"
            value={newBill.numeroMesa}
            onChange={handleInputs}
          />
        </div>
        <div className="form-group " >
          <label className="form-label  bg-light col-12 mt-2 me-2">Selecciona eos</label>
          <select name='es'>
            <option defaultValue='' >Selecciona...</option>
            {esHistory &&
              esHistory.map(e => (
              <option value={e._id} key={e.name}>{e.name} </option>
            ))
            }
          </select>
        </div>
          
      </form>
    </div>
  )
}

export default CreateBill
