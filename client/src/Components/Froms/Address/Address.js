import React from 'react';
import s from './Address.module.css';
import ReactTooltip from 'react-tooltip';
import { useNavigate } from 'react-router-dom';
import validate from '../../../validations';

export default function Address({ close }) {

    const [input, setInput] = React.useState({ street: '', number: 0, city: '' });
    const [errors, setErrors] = React.useState({});
    const [errorData, setErrorData] = React.useState();
    const navigate = useNavigate();

    const handleInputChange = function (e) {    // esta funcion recibe los inputs para majearlos.

        setInput(prevInput => ({ ...prevInput, [e.target.name]: e.target.value }));  // copiamos el estado y la propiedad e.target.name definile el valor del evento

        let errors = validate.Address({ ...input, [e.target.name]: e.target.value }); // pasamos el valor ingresado en vez del estado, porque puede que no este modificado todavia!
        setErrors(errors);

        let arr = [];
        for (const err in errors) {
            arr.push(errors[err]);
        }

        setErrorData(arr.join('\n'))

    }

    const handleSubmit = async function (e) {
        e.preventDefault();

    }

    return (
        <div className={s.container}>
            <div>
                <div>
                    <h1 className={s.title}>New Address</h1>
                </div>
                <div>
                    <form>
                        {/*  Inputs */}
                        <div className={s.inputs}>
                            <div className={s.inputDiv}>
                                <input
                                    className={s.input}
                                    type='text'
                                    name='street'
                                    placeholder={'Street...'}
                                    value={input.street}
                                    onChange={handleInputChange} />
                                <input
                                    className={s.input}
                                    type='number'
                                    name='number'
                                    placeholder={'Number...'}
                                    value={input.number}
                                    onChange={handleInputChange} />
                            </div>
                            <div className={s.inputDiv}>
                                <input
                                    className={s.input}
                                    type='text'
                                    name='city'
                                    placeholder={'City...'}
                                    value={input.city}
                                    onChange={handleInputChange} />

                                {
                                    (input.street !== '' && !errors.number && !errors.city) ?
                                        <button
                                            className={s.btnRegister}
                                            type="submit"
                                            onClick={handleSubmit}
                                        >Add Address</button> :
                                        <button
                                            className={s.btnRegisterError}
                                            data-tip data-for='tooltip'
                                            onClick={(e) => e.preventDefault()}
                                        >Add Address</button>
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