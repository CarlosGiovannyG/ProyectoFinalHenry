import React from 'react';
import ReactTooltip from 'react-tooltip';
import styles from './changePassword.module.css'
import validatePassword from '../../../../validations/Password';



const ChangePassword = () => {


  const [input, setInput] = React.useState({ currentPassword: '', password1: null, password2: null, });
  const [errors, setErrors] = React.useState({});
  const [errorData, setErrorData] = React.useState();

  const handleInputChange = function (e) {    // esta funcion recibe los inputs para majearlos.

    setInput(prevInput => ({ ...prevInput, [e.target.name]: e.target.value }));  // copiamos el estado y la propiedad e.target.name definile el valor del evento

    let errors = validatePassword({ ...input, [e.target.name]: e.target.value }); // pasamos el valor ingresado en vez del estado, porque puede que no este modificado todavia!
    setErrors(errors);

    let arr = [];
    for (const err in errors) {
      arr.push(errors[err]);
    }

    setErrorData(arr.join('\n'))

  }

  const handleSubmit = function (e) {
    e.preventDefault();
    // llamado al back end para postear el nuevo usuario si no existe
  }

  return (
    <div>
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
