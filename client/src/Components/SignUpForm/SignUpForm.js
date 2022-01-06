import React, { useEffect } from 'react';

export  function validate(input){
    let errors = {};
  
    if(!input.name){
      errors.name = 'Name is required';
    }
  
    if(!input.lastname){
      errors.lastname = 'Lastname is required';
    }

    if(!input.password1){
        errors.password1 = 'Password is required';
    }

    if(!input.password2){
        errors.password2 = 'Password is required';
    }

    if (!(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(input.password1))){
        errors.password1 = 'Passwords must contain at least 8 characters, a number and a letter';
    }

    if(input.password1 !== input.password2){
        errors.password2 = "Passwords don't match";
    }

    if(!/\S+@\S+\.\S+/.test(input.email)){
        errors.email = 'Invalid Email';
    }

    if(input.email){
        errors.email = 'Email is required';
    }
  
    return errors;
}



export default function SignUpForm(){
    const [input, setInput] = React.useState({title: '', summary: '', rating: null, healthScore: null, steps: '', image:''});
    
    
    return(<div>
            <h1>Sign Up</h1>

        </div>
    )
}