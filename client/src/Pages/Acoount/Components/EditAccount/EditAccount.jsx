import React from 'react';
import s from './editAccount.module.css';
import ReactTooltip from 'react-tooltip';
import validate from '../../../../validations';
import { useMutation } from '@apollo/client';
import Mutations from '../../../../Utils/Mutations';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import routes from '../../../../Helpers/Routes'



const EditAccount = ({ close, user }) => {

  const [ChangeInfo] = useMutation(Mutations.CHANGE_INFO, {
    onError: error => {
      toast.error(error.graphQLErrors[0].extensions.response.body.mensage)
      console.log(error.graphQLErrors[0])
    }
  });

  const navigate = useNavigate();

  const [input, setInput] = React.useState({
    username: user.username,
    name: user.name,
    last_name: user.last_name,
    email: user.email,
    addres: user.addres,
    phone: user.phone,
  });
  const [errors, setErrors] = React.useState({});
  const [errorData, setErrorData] = React.useState();

  const handleInputChange = function (e) {

    setInput(prevInput => ({ ...prevInput, [e.target.name]: e.target.value }));

    let errors = validate.EditAccount({ ...input, [e.target.name]: e.target.value });
    setErrors(errors);

    let arr = [];
    for (const err in errors) {
      arr.push(errors[err]);
    }

    setErrorData(arr.join('\n'))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let response = await ChangeInfo({
      variables: {
        "input": {
          "id": user.id,
          "username": input.username,
          "name": input.name,
          "last_name": input.last_name,
          "email": input.email,
          "addres": input.addres,
          "phone": input.phone,
        }
      }
    })

    const { data } = response

    if (data) {
      const { message, blocking } = data.ChangeInfo

      if (blocking) {
        toast.error(blocking)
        setInput({
          currentPassword: '',
          password1: '',
          password2: '',
        })
        setErrors({})
        setErrorData()
        close()
      } else {
        toast.success(message)
        localStorage.removeItem('login')
        localStorage.removeItem('rool')
        localStorage.removeItem('userId')
        localStorage.removeItem('token')
        close()
        navigate(`${routes.home}`)

      }

    } else {
      setInput({
        currentPassword: '',
        password1: '',
        password2: '',
      })
      setErrors({})
      setErrorData()
      close()
    }

  }

  return (
    <div className={s.container} >
      <div>
        <h1 className={s.title}>Edit Account</h1>
      </div>
      <div>
        <form>

          <div className={s.inputs}>
            <div className={s.inputDiv1}>
              <input
                className={s.inputName}
                type='text'
                name='username'
                placeholder={user.username}
                value={input.username}
                onChange={handleInputChange}
              />
              <input
                className={s.inputEmail}
                type='text'
                name='name'
                placeholder={user.name}
                value={input.name}
                onChange={handleInputChange}

              />

            </div>
            <div className={s.inputDiv2}>
              <input
                className={s.inputName}
                type='text'
                name='last_name'
                placeholder={user.last_name}
                value={input.last_name}
                onChange={handleInputChange}

              />
              <input
                className={s.inputEmail}
                type='text'
                name='email'
                placeholder={user.email}
                value={input.email}
                onChange={handleInputChange}
              />

            </div>
            <div className={s.inputDiv2}>
              <input
                className={s.inputName}
                type='text'
                name='addres'
                placeholder={user.addres}
                value={input.addres}
                onChange={handleInputChange}

              />
              <input
                className={s.inputEmail}
                type='text'
                name='phone'
                placeholder={user.phone}
                value={input.phone}
                onChange={handleInputChange}

              />
            </div>

            <div className={s.inputDiv3}>
              {
                (!errors.name
                  && !errors.phone
                  && !errors.email) ?
                  <button
                    className={s.btnRegister}
                    type="submit"
                    onClick={handleSubmit}
                  >UPDATE</button> :
                  <button
                    className={s.btnRegisterError}
                    data-tip data-for='tooltip'
                    onClick={(e) => e.preventDefault()}
                  >UPDATE</button>

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
  )
}

export default EditAccount
