import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import Queries from '../../../Utils/Queries';
import s from './comments.module.css';
import { CSSTransition } from 'react-transition-group';
import { GrClose } from 'react-icons/gr';
import SwiperComments from '../SwiperComments/SwiperComments';

const ModalComments = ({ modalControl, productId}) => {

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
      <CSSTransition
      in={true}
      timeout={0}
      appear={true}
      key={0}
      classNames={{ appear: s.MyClassEnterActive, enterDone: s.MyClassEnterDone }}
    >
      <SwiperComments comments={comments} />
      </CSSTransition>
    )
  }
  return (
    <div className={s.loading}>
      <p></p>
    </div>
  )
}

export default ModalComments
