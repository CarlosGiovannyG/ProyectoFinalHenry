import React, { useEffect } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import Queries from '../../Utils/Queries/';
import Mutations from '../../Utils/Mutations'
import s from './CardDetail.module.css';
import {AiOutlineLike} from 'react-icons/ai'
import { GrClose } from 'react-icons/gr';
import ReactTooltip from 'react-tooltip';
import { CSSTransition } from 'react-transition-group';

const CardDetail = ({modalControl}) => {

  const id='61d5d3c7deb697b70e172047';

  const [getProduct, { loading, error, data }] = useLazyQuery(Queries.FIND_PRODUCT);
  const [ProductLike] = useMutation(Mutations.LIKE_PRODUCTS, {
    onError: error => {

      console.log(error.graphQLErrors[0].message)
    }
  });

  useEffect(() => {
    getProduct({ variables: { input: { id: id } } })
  }, [getProduct, id])

  const handleLike = async e => {
    
    let response = await ProductLike({
      variables: {
        "input": {
          "id": id
        }
    }
        
      }
    )
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
      classNames={{ appear: s.MyClassEnterActive, enterDone: s.MyClassEnterDone}}
      >
      <div className={s.container}>
        <GrClose size='1.5rem' className={s.close} onClick={modalControl} />
        <div className={s.info} >
          <h2 className={s.name}>
            {product.name}
            <AiOutlineLike size='2rem' className={s.icon} data-tip data-for='tooltip' onClick={handleLike} />
          </h2>
          <div className={s.description}>
            {product.description}, esta harcodeado para que muestre siempre el primero
          </div>
        </div>
        <img className={s.imagen} src={product.image} alt={product.name} />
        <ReactTooltip className={s.tooltip} id='tooltip' place='top' effect="solid" >
          {product.rating}
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
