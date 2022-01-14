
const validatePassword = (input) => {
  let errors = {};

  if (!input.currentPassword) {
    errors.currentPassword = '• Current Password is required.';
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

  return errors;
}

export default validatePassword;
