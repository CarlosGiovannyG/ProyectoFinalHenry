import s from './CreateProduct.module.css';
import ReactTooltip from 'react-tooltip';
import validate from '../../../validations'
import React, { useRef, useState } from 'react';
import axios from 'axios'
import toast from 'react-hot-toast';



export default function LogInForm({ close }) {

    const inputFileRef = useRef()
    const formData = new FormData()
    const [input, setInput] = useState({ name: '', description: null, price: null, category: 'Category...' });
    const [fileName, setFileName] = useState('Select Image')
    const [selectedFile, setSelectedFile] = useState(null)
    const [errors, setErrors] = useState({});
    const [errorData, setErrorData] = useState();

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

    const handleFileChange = (e) => {
        const [file] = e.target.files
        const sizeImage_50MB = 25 * 512 * 512;
        const isValidSize = file.size < sizeImage_50MB
        const isNameOfOneImageRegEx = /.(jpe?g|gif|png)$/i;
        const isValidType = isNameOfOneImageRegEx.test(file.name);

        if (!isValidSize) return toast.error('El máximo es de 25MB')
        if (!isValidType) return toast.error('Solo se permiten imagenes')

        setFileName(file.name)
        const reader = new FileReader();
        reader.onloadend = () => {
            setSelectedFile(reader.result)
        }
        reader.readAsDataURL(file)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedFile) return toast.error('Debes seleccionar una imagen');

        const image = inputFileRef.current.files[0];
        formData.append('name', input.name)
        formData.append('description', input.description)
        formData.append('price', input.price)
        formData.append('category', input.category)
        formData.append('id_autor', localStorage.getItem('userId'))
        formData.append('image', image)

        const response = await axios({
            url: `http://localhost:5000/products/create`,
            method: 'POST',
            data: formData,
        })

        const { message } = response.data
        toast.success(message)
        setFileName('Select Image')
        setSelectedFile(null)
        setInput({
            name: '',
            description: null,
            price: null,
            category: 'Category...'
        })
        close()

    }

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
                                name='name'
                                placeholder={'Title...'}
                                value={input.name}
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
                            <label className={s.input} for="picture">{fileName}</label>
                            <input
                                type="file"
                                id="picture"
                                ref={inputFileRef}
                                accept='.jpg, .jpeg, .gif, .png'
                                className={s.PicturInput}
                                onChange={handleFileChange}
                            />

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
                        {selectedFile &&

                            // TODO: PREVISUALIZACION DE IMAEN CARGADA
                            <img
                                className={s.picture}
                                src={selectedFile}
                                alt='profile-previw'
                            />
                        }
                        <div className={s.btnDiv}>
                            {
                                (input.name !== '' && !errors.name && !errors.price && !errors.category && !errors.description) ?
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