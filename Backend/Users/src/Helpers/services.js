const jwt = require('jsonwebtoken');
const moment = require('moment');
const auth = require('../Config/auth')



const createToken = user => {
  const payload = {
    sub: user._id,
    rol: user.rool,
    iat: moment().unix(),
    expires: moment().add(auth.expires, 'days').unix(),
  }

  return jwt.sign(payload, auth.secret)
};


module.exports = {
  createToken,
}