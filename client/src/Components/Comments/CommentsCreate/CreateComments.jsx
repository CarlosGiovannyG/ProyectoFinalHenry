import React from 'react';
import { useMutation } from '@apollo/client';
import Mutations from '../../../Utils/Mutations';
import Queries from '../../../Utils/Queries';
import s from './createComments.module.css';
import { GrClose } from 'react-icons/gr';
import ReactTooltip from 'react-tooltip';
import Transsition from '../../../Hooks/Transsition';
import validate from '../../../validations'



const ModalCreateComments = ({ close, productId }) => {

  const [input, setInput] = React.useState({ title: '', comment: '', email: '' });
  const [errors, setErrors] = React.useState({});
  const [errorData, setErrorData] = React.useState();
  const handleInputChange = function (e) {    // esta funcion recibe los inputs para majearlos.

    setInput(prevInput => ({ ...prevInput, [e.target.name]: e.target.value }));  // copiamos el estado y la propiedad e.target.name definile el valor del evento

    let errors = validate.CreateComment({ ...input, [e.target.name]: e.target.value }); // pasamos el valor ingresado en vez del estado, porque puede que no este modificado todavia!
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
    alert(resp)
    close()
  }

  return (
    <Transsition>
      <div className={s.container}>
        <GrClose size='1.5rem' className={s.close} onClick={close} />

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
                  placeholder={'Motive...'}
                  value={input.title}
                  onChange={handleInputChange} />
                <input
                  className={s.inputEmail}
                  type='text'
                  name='email'
                  placeholder={'Name...'}
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
                    >Create</button> :
                    <button
                      className={s.btnRegisterError}
                      data-tip data-for='tooltip'
                      onClick={(e) => e.preventDefault()}
                    >Create</button>
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
    </Transsition>
  )

}

export default ModalCreateComments
