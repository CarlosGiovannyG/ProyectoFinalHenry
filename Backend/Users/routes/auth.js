const {Router} = require('express');
const router = Router();
const { signup, signin } = require("../Controller/authController");


module.exports = function() {
    router.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    router.post(
      "/signup",
      [
        verifySignUp.checkDuplicateUsernameOrEmail,
        verifySignUp.checkRolesExisted
      ],
     signup
    );
  
    router.post("/signin", signin);
  };





// module.exports = router;