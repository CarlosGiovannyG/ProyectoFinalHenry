import React, { useEffect, useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import Queries from '../../../../Utils/Queries';
import Mutations from '../../../../Utils/Mutations'
import s from './ProductDetail.module.css';
import { AiOutlineLike } from 'react-icons/ai'
import { GrClose, GrView, GrContact, GrChatOption } from 'react-icons/gr';
import ReactTooltip from 'react-tooltip';
import Transsition from '../../../../Hooks/Transsition';
import routes from '../../../../Helpers/Routes';

const ProductDetail = ({ openCreateCom, openComment, productId, setCart }) => {

  const url = window.location.href.slice(21);
  const [newLike, setNewLike] = useState(null)
  const [getProduct, { loading, error, data }] = useLazyQuery(Queries.FIND_PRODUCT);
  const [ProductLike] = useMutation(Mutations.LIKE_PRODUCTS, {

    // refetchQueries: [{ query: Queries.ALL_PRODUCTS }],
    onError: error => {

      console.log(error.graphQLErrors[0].message)
    }
  });

  useEffect(() => {
    getProduct({ variables: { input: { id: `${productId}` } } })
  }, [getProduct, productId])

  const handleLike = async e => {

    let response = await ProductLike({
      variables: {
        "input": {
          "id": productId
        }
      }
    }
    )
    setNewLike(response.data.ProductLike.rating)
  }

  //todo RESIVO LOS DATOS DE CADA PRODUCTO
  if (loading) {
    return <div className={s.loading}>
      <p></p>
    </div>
  }
  if (error) {
    return <div className={s.error}>
      <p>There was an error..</p>
    </div>
  }
  if (data && !loading) {
    var { product } = data.ProductById;
    return (
      <Transsition>
        <div className={s.container}>
          <div className={s.info} >
            <h2 className={s.name}>
              {product.name}
            </h2>
            <div className={s.description}>
              {product.description}
            </div>
          </div>
          <div className={s.divDerecha}>
            <img className={s.imagen} src={product.image} alt={product.name} />
            <div className={s.icons}>
              <div className={s.price}>
                ${product.price}
              </div>
              <AiOutlineLike size='2rem' data-tip data-for='tooltip' onClick={handleLike} />
              <GrView size='2rem' data-tip data-for='views' />
              <GrContact
                size='2rem'
                data-tip data-for='comments'
                onClick={() => {
                  openComment()
                }} />
              <GrChatOption
                size='2rem'
                data-tip data-for='createcomment'
                onClick={() => {
                  openCreateCom()
                }} />
              {
                url === routes.UserMainPage &&
                <button className={s.btnAdd} onClick={() => { setCart((prev) => [...prev, product]) }} >ADD</button>
              }
              {
                url === routes.cart &&
                <button className={s.btnAdd}
                  onClick={() => { alert('Sacar item del carrito en estado global,cerrar modal y actualizar el carrito') }}>REMOVE</button>
              }
            </div>
          </div>
          <ReactTooltip className={s.tooltip} id='tooltip' place='top' effect="solid" >
            {newLike ? newLike : product.rating}
          </ReactTooltip>
          <ReactTooltip className={s.tooltip} id='views' place='top' effect="solid" >
            {product.views}
          </ReactTooltip>
          <ReactTooltip className={s.tooltip} id='comments' place='top' effect="solid" >
            Ver {product.comments}  comentarios
          </ReactTooltip>
          <ReactTooltip className={s.tooltip} id='createcomment' place='top' effect="solid" >
            Deja tu comentario
          </ReactTooltip>
        </div>
      </Transsition>
    )

  }
  return (
    <div className={s.loading}>
      <p></p>
    </div>
  )
}

export default ProductDetail
