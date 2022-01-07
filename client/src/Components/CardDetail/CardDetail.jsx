import React, { useEffect } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import Queries from '../../Utils/Queries/';
import Mutations from '../../Utils/Mutations'
import { useParams } from 'react-router-dom';
import styles from './carDetail.module.css'



const CardDetail = () => {

  const [getProduct, { loading, error, data }] = useLazyQuery(Queries.FIND_PRODUCT);
  const [ProductLike] = useMutation(Mutations.LIKE_PRODUCTS, {
    onError: error => {
      
      alert('ERROR', error.graphQLErrors[0])
    }
  });

  const { id } = useParams()

  useEffect(() => {
    getProduct({ variables: { input: { id: id } } })
  }, [getProduct, id])

  const handleLike = async e => {
    
console.log('id', id)
    let response = await ProductLike({
      variables: {
        "input": {
          "id": id
        }
    }
        
      }
    )
console.log(response);
    alert('RESPUESTA', response.data)
  }



  //todo RESIVO LOS DATOS DE CADA PRODUCTO
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>There was an error..</p>
  }
  if (data && !loading) {
    var { product } = data.ProductById;
    return (
      <div className="container">
        <img className={styles.Imagen} src={product.image} alt={product.name} />
        <h2>
          {product.name}
        </h2>
        <p>price: {product.price}</p>
        <p>rating: {product.rating}</p>
        <button
          className="btn btn-outline-primary size=lg "
          onClick={handleLike}
        > Me Gusta </button>
      </div>
    )
  }
  return (
    <p>Loading..</p>
  )
}

export default CardDetail
