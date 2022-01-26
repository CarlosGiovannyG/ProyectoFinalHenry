import React from 'react';
import s from './Address.module.css';
import ReactTooltip from 'react-tooltip';
import validate from '../../../validations';
import { useMutation } from '@apollo/client';
import Mutations from '../../../Utils/Mutations';
import toast from 'react-hot-toast';
import useAuth from '../../../Auth/useAuth';


export default function Address({ close }) {

    const { userId }=useAuth()
    const [RegisterAddress] = useMutation(Mutations.REGISTER_ADDRESS, {
        onError: err => {
            console.log('ERRORES', err.graphQLErrors[0])
        }
    })
    const [input, setInput] = React.useState({
        name:'',
        city: '',
        street: '',
        number:  '',
    });
    const [errors, setErrors] = React.useState({});
    const [errorData, setErrorData] = React.useState();

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

        let response = await RegisterAddress({

            variables: {
                "input": {
                    "userId": `${userId()}` ,
                    "name":input.name ,
                    "street":input.street ,
                    "number":input.number ,
                    "city": input.city
                }
            }
        })

        const resp = response.data.RegisterAddress.message
        setInput({
            name: '',
            city: '',
            street: '',
            number: '',
        })
        toast.success(resp)
        window.location.reload();
        close()
        
        
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
                                    name='name'
                                    placeholder={'Name...'}
                                    value={input.name}
                                    onChange={handleInputChange} />
                                <input
                                    className={s.input}
                                    type='text'
                                    name='city'
                                    placeholder={'City...'}
                                    value={input.city}
                                    onChange={handleInputChange} />
                            </div>
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
                                    type='text'
                                    name='number'
                                    placeholder={'Number...'}
                                    value={input.number}
                                    onChange={handleInputChange} />
                            </div>
                            <div className={s.inputDiv2}>
                                {
                                    (input.name !== '' &&
                                        input.street !== '' &&
                                        !errors.number &&
                                        !errors.city) ?
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
                                    <ReactTooltip className={s.tooltip}
                                        id='tooltip'
                                        place='top'
                                        effect="solid" >
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