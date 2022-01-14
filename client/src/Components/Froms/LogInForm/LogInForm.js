import React from 'react';
import s from './LogInForm.module.css';
import ReactTooltip from 'react-tooltip';
import useAuth from '../../../Auth/useAuth';

export function validate(input) {
    let errors = {};

    if (!input.password) {
        errors.password = '• Password is required.';
    }

    if (!/\S+@\S+\.\S+/.test(input.email)) {
        errors.email = '• Invalid Email.';
    }

    if (!input.email) {
        errors.email = '• Email is required.';
    }

    return errors;
}

export default function LogInForm({ close }) {
    const { login } = useAuth()
    const [input, setInput] = React.useState({ email: '', password: null });
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

    const handleSubmit = function (e) {
        e.preventDefault();
        // llamado al back end para verificar si existe el user y si la contraseña esta bien
        login()
        close()
    }

    return (
        <div className={s.container}>
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
                                type='text'
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
    )
}