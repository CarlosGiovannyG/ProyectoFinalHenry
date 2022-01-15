const  validateEditAccount =(input) => {
  let errors = {};

  if (!input.name) errors.name = '• Name is required.';
  else if (/(?=.*[0-9])/.test(input.name)) errors.name = "Deben ser solo letras";
  
  // if (!input.lastname) errors.lastname = '• Last Name is required.';
  // else if (/(?=.*[0-9])/.test(input.lastname)) errors.lastname = "Deben ser solo letras";

  
  if (!input.email) errors.email = '• Email is required.';
  else if (!/\S+@\S+\.\S+/.test(input.email)) errors.email = '• Invalid Email.';
  
  if (!input.phone) errors.phone = "Se requiere número teléfonico";
  else if (/(?=[^0-9])/.test(input.phone)) errors.phone = "Teléfono Debe ser solo números";
  // else if (/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/.test(input.phone)) errors.phone = 'Número no valido';


  
  return errors;
}

export default validateEditAccount;