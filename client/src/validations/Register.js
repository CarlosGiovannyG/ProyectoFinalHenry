
const register =(input)=> {
  let errors = {};

  if (!input.name) {
    errors.name = '• Name is required.';
  }

  if (!input.lastname) {
    errors.lastname = '• Last Name is required.';
  }

  if (!(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(input.password1))) {
    errors.password1 = '• Passwords must contain at least 8 \ncharacters, a number and a letter.';
  }

  if (!input.password1) {
    errors.password1 = '• Password is required.';
  }

  if (input.password1 !== input.password2) {
    errors.password2 = "• Passwords don't match.";
  }

  if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = '• Invalid Email.';
  }

  if (!input.email) {
    errors.email = '• Email is required.';
  }

  return errors;
}

export default register;