import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import Queries from '../../../Utils/Queries';
import s from './comments.module.css';
import SwiperComments from '../../Swiper/Swiper';
import Transsition from '../../../Hooks/Transsition';

const ModalComments = ({ productId }) => {

  const [commentByProduct, { loading, error, data }] = useLazyQuery(Queries.COMMENT_BY_PRODUCT);

  useEffect(() => {
    commentByProduct({ variables: { input: { id: `${productId}` } } })
  }, [commentByProduct, productId])
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
    var comments = data.commentByProduct.comments;

    return (
      <Transsition>
        <SwiperComments comments={comments} />
      </Transsition>
    )
  }
  return (
    <div className={s.loading}>
      <p></p>
    </div>
  )
}

export default ModalComments
