import React, { useEffect } from 'react';
import s from './SignUpForm.module.css';

export  function validate(input){
    let errors = {};
  
    if(!input.name){
      errors.name = 'Name is required';
    }
  
    if(!input.lastname){
      errors.lastname = 'Lastname is required';
    }

    if (!(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(input.password1))){
        errors.password1 = 'Passwords must contain at least 8 characters, a number and a letter';
    }

    if(!input.password1){
        errors.password1 = 'Password is required';
    }

    if(input.password1 !== input.password2){
        errors.password2 = "Passwords don't match";
    }

    if(!/\S+@\S+\.\S+/.test(input.email)){
        errors.email = 'Invalid Email';
    }

    if(!input.email){
        errors.email = 'Email is required';
    }
  
    return errors;
}



export default function SignUpForm(){
    const [input, setInput] = React.useState({name: '', lastname: '', password1: null, password2: null, email: ''});
    const [errors, setErrors] = React.useState({});

    const handleInputChange = function(e){    // esta funcion recibe los inputs para majearlos.

        setInput(prevInput => ({...prevInput, [e.target.name]:e.target.value}));  // copiamos el estado y la propiedad e.target.name definile el valor del evento
      
        let errors = validate({...input, [e.target.name]:e.target.value}); // pasamos el valor ingresado en vez del estado, porque puede que no este modificado todavia!
        setErrors(errors);

    }

    const handleSubmit = function(e){
        e.preventDefault();
        
    }

  
    
    return(
        <div>
            <div>
                <h1 className={s.title}>Sign Up</h1>
            </div>
            <div>
                <form>
                    {/*  Inputs */}
                    <div className={s.inputs}>
                        <div className={s.inputDiv1}>
                            <input className={s.inputName} type='text' name='name' placeholder={'Name...'} value={input.name} onChange={handleInputChange} />
                            <input className={s.inputLastname} type='text' name='lastname' placeholder={'Lastname...'} value={input.lastname} onChange={handleInputChange}/>
                        </div>
                        <div className={s.inputDiv2}>
                            <input className={s.inputPassword1} type='text' name='password1' placeholder={'Password...'} value={input.password1} onChange={handleInputChange} />
                            <input className={s.inputEmail} type='text' name='email' placeholder={'Email...'} value={input.email} onChange={handleInputChange} />
                        </div>
                        <div className={s.inputDiv3}>
                        <input className={s.inputPassword2} type='text' name='password2' placeholder={'Repeat Password...'} value={input.password2} onChange={handleInputChange} />  
                        {
                            (input.name !=='' && !errors.lastname && !errors.password1 && !errors.password2 && !errors.email) ? 
                            <button className={s.btnRegister} type="submit" onClick={handleSubmit}>Register</button> :
                            <button className={s.btnRegisterError} onClick={(e)=> e.preventDefault()} >Register</button>
                        }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}