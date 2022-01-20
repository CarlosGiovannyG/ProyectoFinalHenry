import React from 'react';
import ReactTooltip from 'react-tooltip';
import styles from './changePassword.module.css'
import validate from '../../../../validations';
import { useMutation } from '@apollo/client';
import Mutations from '../../../../Utils/Mutations';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import routes from '../../../../Helpers/Routes'


const ChangePassword = ({ userId, close }) => {

  const [ChangePassword] = useMutation(Mutations.CHANGE_PASSWORD, {
    onError: error => {
      toast.error(error.graphQLErrors[0].extensions.response.body.mensage)
      console.log(error.graphQLErrors[0])
    }
  });

  const navigate = useNavigate();
  const [input, setInput] = React.useState({ currentPassword: '', password1: '', password2: '', });
  const [errors, setErrors] = React.useState({});
  const [errorData, setErrorData] = React.useState();

  const handleInputChange = function (e) {

    setInput(prevInput => ({ ...prevInput, [e.target.name]: e.target.value }));

    let errors = validate.Password({ ...input, [e.target.name]: e.target.value });
    setErrors(errors);

    let arr = [];
    for (const err in errors) {
      arr.push(errors[err]);
    }

    setErrorData(arr.join('\n'))

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let response = await ChangePassword({
      variables: {
        "input": {
          "id": userId,
          "currentPassword": input.currentPassword,
          "newPassword": input.password1
        }
      }
      // admin1234
    })
    const { data } = response
    if (data) {
      const { message } = data.ChangePassword
      toast.success(message)

      localStorage.removeItem('login')
      localStorage.removeItem('rool')
      localStorage.removeItem('userId')
      localStorage.removeItem('token')
      close()
      navigate(`${routes.home}`)

    } else {
      close()
      setInput({
        currentPassword: '',
        password1: '',
        password2: '',
      })
      setErrors({})
      setErrorData()
    }

  }

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Change Password</h1>
      </div>
      <div>
        <form>
          {/*  Inputs */}
          <div className={styles.inputs}>
            <div className={styles.inputDiv}>
              <input
                className={styles.inputPassword}
                type='password'
                name='currentPassword'
                placeholder={'Current password ...'}
                value={input.currentPassword}
                onChange={handleInputChange} />
            </div>
            <div className={styles.inputDiv}>
              <input
                className={styles.inputPassword}
                type='password'
                name='password1'
                placeholder={'Password...'}
                value={input.password1} onChange={handleInputChange} />
            </div>
            <div className={styles.inputDiv}>
              <input
                className={styles.inputPassword}
                type='password'
                name='password2'
                placeholder={'Repeat Password...'}
                value={input.password2}
                onChange={handleInputChange} />
            </div>
            <div className={styles.inputDiv}>
              {
                (!errors.password1
                  && !errors.password2
                ) ?
                  <button
                    className={styles.btnRegister}
                    type="submit"
                    onClick={handleSubmit}
                  >Update</button> :
                  <button
                    className={styles.btnRegisterError}
                    data-tip data-for='tooltip'
                    onClick={(e) => e.preventDefault()}
                  >Update</button>
              }
              {(Object.keys(errors).length > 0) ? (
                <ReactTooltip className={styles.tooltip} id='tooltip' place='top' effect="solid" >
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

export default ChangePassword
