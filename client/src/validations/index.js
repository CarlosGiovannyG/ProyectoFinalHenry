import validatePassword from './Password';
import validateEditAccount from './EditAccount'
import createComment from './CreateComment';
import login from './Login';
import register from './Register';
import CreateProduct from './CreateProduct';
import Address from './Address';

const validate = {
  Register: register,
  Login: login,
  Password: validatePassword,
  EditAccount: validateEditAccount,
  CreateComment: createComment,
  CreateProduct: CreateProduct,
  Address: Address
}

export default validate;