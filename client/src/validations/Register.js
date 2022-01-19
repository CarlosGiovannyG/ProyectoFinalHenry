
const register = (input) => {
  let errors = {};

  if (!input.username) {
    errors.username = '• Username is required.';
  }

  if (!input.name) {
    errors.name = '• Name is required.';
  }

  if (!input.last_name) {
    errors.last_name = '• Last Name is required.';
  }

  if (!(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(input.password))) {
    errors.password = '• Passwords must contain at least 8 \ncharacters, a number and a letter.';
  }

  if (!input.password) {
    errors.password = '• Password is required.';
  }

  if (input.password !== input.passwordConfirm) {
    errors.passwordConfirm = "• Passwords don't match.";
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