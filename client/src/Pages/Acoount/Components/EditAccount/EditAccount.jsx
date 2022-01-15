import React from 'react';
import s from './editAccount.module.css';
import ReactTooltip from 'react-tooltip';
import useAuth from '../../../../Auth/useAuth';
import validate from '../../../../validations';


const EditAccount = ({ close }) => {
  const { updateUser, hasRole, user } = useAuth()

  const [input, setInput] = React.useState({ name: user.name, phone: user.phone, role: user.role, email: user.email });
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

  const handleSubmit = function (e) {
    e.preventDefault();

    updateUser(input);
    close()
  }

  return (
    <div className={s.container} >
      <div>
        <h1 className={s.title}>Sign Up</h1>
      </div>
      <div>
        <form>

          <div className={s.inputs}>
            <div className={s.inputDiv1}>
              <input
                className={s.inputName}
                type='text' name='name'
                placeholder={user.name}
                value={input.name}
                onChange={handleInputChange} />
              <input
                className={s.inputEmail}
                type='text'
                name='email'
                placeholder={user.email}
                value={input.email}
                onChange={handleInputChange} />

            </div>
            <div className={s.inputDiv2}>
              <input
                className={s.inputPassword1}
                type='text'
                name='phone'
                placeholder={user.phone}
                value={input.phone} onChange={handleInputChange} />
              <select
                className={s.inputEmail}
                name='role'
                disabled={hasRole('regular')}
                onChange={handleInputChange}
              >
                <option default selected>{user.role}</option>
                <option value='cook'>COOK</option>
                <option value='regular'>REGULAR</option>
                <option value='cashier'>CASHIER</option>
                <option value='admin'>ADINISTRADOR</option>
              </select>
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
                  >TO UPDATE</button> :
                  <button
                    className={s.btnRegisterError}
                    data-tip data-for='tooltip'
                    onClick={(e) => e.preventDefault()}
                  >TO UPDATE</button>
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
