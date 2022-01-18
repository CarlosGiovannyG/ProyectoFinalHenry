import React from 'react';
import s from './CreateProduct.module.css';
import ReactTooltip from 'react-tooltip';
import validate from '../../../validations'

export default function LogInForm({ close }) {
    const [input, setInput] = React.useState({ title: '', description: null, price: null, category: 'Category...', image: ''});
    const [errors, setErrors] = React.useState({});
    const [errorData, setErrorData] = React.useState();



    const handleInputChange = function (e) {    // esta funcion recibe los inputs para majearlos.

        setInput(prevInput => ({ ...prevInput, [e.target.name]: e.target.value }));  // copiamos el estado y la propiedad e.target.name definile el valor del evento

        let errors = validate.CreateProduct({ ...input, [e.target.name]: e.target.value }); // pasamos el valor ingresado en vez del estado, porque puede que no este modificado todavia!
        setErrors(errors);

        let arr = [];
        for (const err in errors) {
            arr.push(errors[err]);
        }

        setErrorData(arr.join('\n'))

    }

    const handleSubmit = function (e) {
        e.preventDefault();
        // enviar mutation al back cuando este el endpoint listo
    }

    console.log(input);
    console.log(errors)

    return (

        <div className={s.container} >
            <div>
                <h1 className={s.title}>Create Product</h1>
            </div>
            <div>
                <form>
                    {/*  Inputs */}
                    <div className={s.inputs}>
                        <div className={s.inputDiv}>
                            <input
                                className={s.input}
                                type='text'
                                name='title'
                                placeholder={'Title...'}
                                value={input.title}
                                onChange={handleInputChange} />
                            <select name='category' className={s.input} onChange={handleInputChange}>
                                <option value="main">Main</option>
                                <option value="sides">Side</option>
                                <option value="beverages">Beverage</option>
                                <option value="desserts">Dessert</option>
                                <option selected value={null} >Category...</option>
                            </select>
                        </div>
                        <div className={s.inputDiv}>
                            <input
                                className={s.input}
                                type='number'
                                name='price'
                                placeholder={'Price...'}
                                value={input.price}
                                onChange={handleInputChange} />
                            <input
                                className={s.input}
                                type='text'
                                name='image'
                                placeholder={'Image...'}
                                value={input.image}
                                onChange={handleInputChange} />
                        </div>
                        <div className={s.inputDivDescription}>
                            <textarea
                                cols="40" rows="5"
                                className={s.inputDescription}
                                type='text'
                                name='description'
                                placeholder={'Description...'}
                                value={input.description}
                                onChange={handleInputChange} />
                        </div>
                        <div className={s.btnDiv}>
                            {
                                (input.title !== '' && !errors.title && !errors.price && !errors.category && !errors.image && !errors.description ) ?
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
    )
}