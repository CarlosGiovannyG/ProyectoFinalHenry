import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import Mutations from '../../../Utils/Mutations';
import Queries from '../../../Utils/Queries';

import s from './createComments.module.css';
import { CSSTransition } from 'react-transition-group';
import { GrClose } from 'react-icons/gr';
import ReactTooltip from 'react-tooltip';

export function validate(input) {
  let errors = {};

  if (!input.title) {
    errors.title = '• Title is required.';
  }

  if (!input.comment) {
    errors.comment = '• Comment is required.';
  }

  if (input.comment.length > 256) {
    errors.comment = '• Please, maximun of 260 characters.';
  }

  if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = '• Invalid Email.';
  }

  if (!input.email) {
    errors.email = '• Email is required.';
  }

  return errors;
}


const ModalCreateComments = ({ modalControl, productId }) => {

  const [input, setInput] = React.useState({ title: '', comment: '', email: '' });
  const [errors, setErrors] = React.useState({});
  const [errorData, setErrorData] = React.useState();
  const handleInputChange = function (e) {    // esta funcion recibe los inputs para majearlos.

    setInput(prevInput => ({ ...prevInput, [e.target.name]: e.target.value }));  // copiamos el estado y la propiedad e.target.name definile el valor del evento

    let errors = validate({ ...input, [e.target.name]: e.target.value }); // pasamos el valor ingresado en vez del estado, porque puede que no este modificado todavia!
    setErrors(errors);

    let arr = [];
    for (const err in errors) {
      arr.push(errors[err]);
    }

    setErrorData(arr.join('\n'))

  }

  const [CreateComment] = useMutation(Mutations.CREATE_COMMENT, {
    refetchQueries: [{ query: Queries.FIND_PRODUCT }],
    onError: err => {
      console.log('ERRORES', err.graphQLErrors)
    }
  })

  const handleSubmit = async e => {
    e.preventDefault();

    let response = await CreateComment({
      variables: {
        "input": {
          "product_id": productId,
          "title": input.title,
          "comment": input.comment,
          "email": input.email,
        }
      }
    });

    setInput({ title: '', comment: '', email: '' })

    const resp = response.data.createComment.message
    console.log(resp)
    alert(resp)
    modalControl()
  }

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

        <div>
          <h1 className={s.title}>Create Comment</h1>
        </div>
        <div>
          <form>
            {/*  Inputs */}
            <div className={s.inputs}>
              <div className={s.inputDiv1}>
                <input
                  className={s.inputName}
                  name='title'
                  placeholder={'Motivo del comentario...'}
                  value={input.title}
                  onChange={handleInputChange} />
                <input
                  className={s.inputEmail}
                  type='text'
                  name='email'
                  placeholder={'Tu Email...'}
                  value={input.email}
                  onChange={handleInputChange} />

              </div>
              <div className={s.inputDiv2}>
                <textarea
                  rows="6" cols="90"
                  className={s.inputDescription}
                  type='text'
                  name='comment'
                  placeholder={'Descripción...'}
                  value={input.comment}
                  onChange={handleInputChange} />
              </div>
              <div className={s.inputDiv3}>

                {
                  (input.title !== ''
                    && !errors.comment
                    && !errors.email) ?
                    <button
                      className={s.btnRegister}
                      type="submit"
                      onClick={handleSubmit}
                    >Register</button> :
                    <button
                      className={s.btnRegisterError}
                      data-tip data-for='tooltip'
                      onClick={(e) => e.preventDefault()}
                    >Register</button>
                }
                {(Object.keys(errors).length > 0) ? (
                  <ReactTooltip className={s.tooltip} id='tooltip' place='top' effect="solid" >
                    {errorData.split("\n").map((i, key) => {
                      return <div key={key}>{i}</div>;
                    })}
                  </ReactTooltip>) : null
                }
              </div>
            </div>
          </form>
        </div>
      </div>
    </CSSTransition>

  )

}

export default ModalCreateComments
