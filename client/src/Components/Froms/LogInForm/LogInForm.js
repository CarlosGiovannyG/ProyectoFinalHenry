import React from 'react';
import s from './LogInForm.module.css';
import ReactTooltip from 'react-tooltip';
import { useNavigate } from 'react-router-dom';
import routes from '../../../Helpers/Routes';
import validate from '../../../validations';
import toast from 'react-hot-toast';
import { useLazyQuery } from '@apollo/client';
import Queries from '../../../Utils/Queries';





export default function LogInForm({ close }) {

    const [LoginUsers] = useLazyQuery(Queries.LOGIN_USERS);

    const [input, setInput] = React.useState({ email: '', password: '' });
    const [errors, setErrors] = React.useState({});
    const [errorData, setErrorData] = React.useState();
    const navigate = useNavigate();

    const handleInputChange = function (e) {    // esta funcion recibe los inputs para majearlos.

        setInput(prevInput => ({ ...prevInput, [e.target.name]: e.target.value }));  // copiamos el estado y la propiedad e.target.name definile el valor del evento

        let errors = validate.Login({ ...input, [e.target.name]: e.target.value }); // pasamos el valor ingresado en vez del estado, porque puede que no este modificado todavia!
        setErrors(errors);

        let arr = [];
        for (const err in errors) {
            arr.push(errors[err]);
        }

        setErrorData(arr.join('\n'))

    }

    const handleSubmit = async function (e) {
        e.preventDefault();

        console.log(input);
        let response = await LoginUsers({
            variables: {
                "input": {
                    "email": input.email,
                    "password": input.password,
                }
            }
        })
        const { message, token } = response.data.LoginUsers

        if (token) {
            localStorage.setItem('login', true)
            localStorage.setItem('token', token)
            toast.success(message)
            navigate(`${routes.home}`)
            window.location.reload();
            close()
        } else {

            toast.error(message)
            setInput({ email: '', password: '' })
            close()
        }

    }

    return (
        <div className={s.container}>
            <div>
                <div>
                    <h1 className={s.title}>Log In</h1>
                </div>
                <div>
                    <form>
                        {/*  Inputs */}
                        <div className={s.inputs}>
                            <div>
                                <input
                                    className={s.inputEmail}
                                    type='text'
                                    name='email'
                                    placeholder={'Email...'}
                                    value={input.email}
                                    onChange={handleInputChange} />
                                <input
                                    className={s.inputPassword}
                                    type='password'
                                    name='password'
                                    placeholder={'Password...'}
                                    value={input.password}
                                    onChange={handleInputChange} />
                            </div>
                            <div className={s.btnDiv}>
                                {
                                    (input.email !== '' && !errors.password && !errors.email) ?
                                        <button
                                            className={s.btnRegister}
                                            type="submit"
                                            onClick={handleSubmit}
                                        >Log In</button> :
                                        <button
                                            className={s.btnRegisterError}
                                            data-tip data-for='tooltip'
                                            onClick={(e) => e.preventDefault()}
                                        >Log In</button>
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
        </div>
    )
}