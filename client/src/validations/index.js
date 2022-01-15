import validatePassword from './Password';
import validateEditAccount from './EditAccount'
import createComment from './CreateComment';
import login from './Login';
import register from './Register';


const validate = {
  Register: register,
  Login: login,
  Password: validatePassword,
  EditAccount: validateEditAccount,
  CreateComment: createComment,

}

export default validate;