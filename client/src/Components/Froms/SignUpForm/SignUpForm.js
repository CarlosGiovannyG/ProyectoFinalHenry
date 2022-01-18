import React from 'react';
import s from './SignUpForm.module.css';
import ReactTooltip from 'react-tooltip';
import validate from '../../../validations';
import toast from 'react-hot-toast';
import axios from 'axios'
import useAuth from '../../../Auth/useAuth';



export default function SignUpForm({ close }) {

    const { URL_USERS } = useAuth()


    const [input, setInput] = React.useState({
        username: '',
        name: '',
        last_name: '',
        addres: '',
        phone: '',
        password: '',
        passwordConfirm: '',
        email: '',
        rool: '',
    });
    const [errors, setErrors] = React.useState({});
    const [errorData, setErrorData] = React.useState();

    const handleInputChange = function (e) {    // esta funcion recibe los inputs para majearlos.

        setInput(prevInput => ({ ...prevInput, [e.target.name]: e.target.value }));  // copiamos el estado y la propiedad e.target.name definile el valor del evento

        let errors = validate.Register({ ...input, [e.target.name]: e.target.value }); // pasamos el valor ingresado en vez del estado, porque puede que no este modificado todavia!
        setErrors(errors);

        let arr = [];
        for (const err in errors) {
            arr.push(errors[err]);
        }

        setErrorData(arr.join('\n'))

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let responseRegister = await axios.post(
            `${URL_USERS}/register`,
            input
        );
        let status = responseRegister.status
        const { message } = responseRegister.data

        if (status === 200) {

            toast.success(message)
            close()
        } else {

            toast.error(message)
        }


        console.log(status, message)

    }


    return (
        <div className={s.container} >
            <div>
                <h1 className={s.title}>Sign Up</h1>
            </div>
            <div>
                <form>
                    {/*  Inputs */}
                    <div className={s.inputs}>
                        <div className={s.inputDiv1}>
                            <input
                                className={s.inputName}
                                type='text'
                                name='username'
                                placeholder={'Username...'}
                                value={input.username}
                                onChange={handleInputChange} />
                            <input
                                className={s.inputLastname}
                                type='text' name='name'
                                placeholder={'Name...'}
                                value={input.name}
                                onChange={handleInputChange} />
                        </div>
                        <div className={s.inputDiv2}>
                            <input
                                className={s.inputName}
                                type='text'
                                name='last_name'
                                placeholder={'Lastname...'}
                                value={input.last_name}
                                onChange={handleInputChange} />
                            <input
                                className={s.inputEmail}
                                type='text'
                                name='email'
                                placeholder={'Email...'}
                                value={input.email}
                                onChange={handleInputChange} />
                        </div>
                        <div className={s.inputDiv2}>
                            <input
                                className={s.inputName}
                                type='text'
                                name='addres'
                                placeholder={'Address...'}
                                value={input.addres}
                                onChange={handleInputChange} />
                            <input
                                className={s.inputEmail}
                                type='text'
                                name='phone'
                                placeholder={'Phone...'}
                                value={input.phone}
                                onChange={handleInputChange} />
                        </div>
                        <div className={s.inputDiv2}>
                            <input
                                className={s.inputPassword1}
                                type='text'
                                name='password'
                                placeholder={'Password...'}
                                value={input.password} onChange={handleInputChange} />
                            <input
                                className={s.inputEmail}
                                type='text'
                                name='passwordConfirm'
                                placeholder={'Repeat Password...'}
                                value={input.passwordConfirm}
                                onChange={handleInputChange} />
                        </div>
                        <div className={s.inputDiv3}>
                            {/* <input
                                className={s.inputPassword2}
                                type='text'
                                name='password2'
                                placeholder={'Repeat Password...'}
                                value={input.password2}
                                onChange={handleInputChange} />   */}
                            {
                                (input.name !== '' && input.username !== ''
                                    && !errors.last_name
                                    && !errors.password
                                    && !errors.passwordConfirm
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
    )
}