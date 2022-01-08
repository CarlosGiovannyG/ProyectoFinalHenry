import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import Queries from '../../../Utils/Queries';
import s from './comments.module.css';
import { CSSTransition } from 'react-transition-group';
import { GrClose } from 'react-icons/gr';


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
      comments.map(comment => (
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
                {comment.title}
              </h2>
              <div className={s.description}>
                {comment.comment}
              </div>
              <div className={s.description}>
                {comment.timestamps}
              </div>
            </div>
            <img className={s.imagen} src={`http://gravatar.com/avatar/${comment.avatar}?d=monsterid&s=300`} alt={comment.name} />
          </div>
        </CSSTransition>
      ))
    )
  }
  return (
    <div className={s.loading}>
      <p></p>
    </div>
  )
}

export default ModalComments
