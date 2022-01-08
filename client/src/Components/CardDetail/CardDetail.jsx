import React, { useEffect, useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import Queries from '../../Utils/Queries/';
import Mutations from '../../Utils/Mutations'
import s from './cardDetail.module.css';
import { AiOutlineLike } from 'react-icons/ai'
import { GrClose, GrView, GrContact } from 'react-icons/gr';
import ReactTooltip from 'react-tooltip';
import { CSSTransition } from 'react-transition-group';


const CardDetail = ({ openComment, modalControl, productId }) => {

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
      <CSSTransition
        in={true}
        timeout={0}
        appear={true}
        key={0}
        classNames={{ appear: s.MyClassEnterActive, enterDone: s.MyClassEnterDone }}
      >
        <div className={s.container}>
          <GrClose size='1.5rem' className={s.close} onClick={modalControl} />
          <div className={s.info} >
            <h2 className={s.name}>
              {product.name}
            </h2>
            <div className={s.description}>
              {product.description}
            </div>
            <div className={s.description}>
              ${product.price}
            </div>
            <div className={s.icon}>
              <AiOutlineLike size='2rem' data-tip data-for='tooltip' onClick={handleLike} />
              <GrView size='2rem' data-tip data-for='views' />
              <GrContact
                size='2rem'
                data-tip data-for='comments'
                onClick={() => {
                  openComment()
                }} />
            </div>
          </div>
          <img className={s.imagen} src={product.image} alt={product.name} />
          <ReactTooltip className={s.tooltip} id='tooltip' place='top' effect="solid" >
            {newLike ? newLike : product.rating}
          </ReactTooltip>
          <ReactTooltip className={s.tooltip} id='views' place='top' effect="solid" >
            {product.views}
          </ReactTooltip>
          <ReactTooltip className={s.tooltip} id='comments' place='top' effect="solid" >
            Ver {product.comments}  comentarios
          </ReactTooltip>
        </div>
      </CSSTransition>
    )
  }
  return (
    <div className={s.loading}>
      <p></p>
    </div>
  )
}

export default CardDetail
