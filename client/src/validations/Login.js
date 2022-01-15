const login=(input) =>{
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

export default login;