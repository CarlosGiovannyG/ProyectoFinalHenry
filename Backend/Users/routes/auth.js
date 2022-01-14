const { Router } = require("express");
const router = Router();
const { verifySignUp } = require("../middleware");
const { signup, signin } = require("../Controller/authController");

// router.use(
//           function (req, res, next) {
//                             res.header(
//                               "Access-Control-Allow-Headers",
//                               "x-access-token, Origin, Content-Type, Accept"
//   );
//   next();
// });

router.post(
            "/signup",
            [verifySignUp.checkDuplicateUsernameOrEmail, 
              verifySignUp.checkRolesExisted],
            signup
);

router.post("/signin", signin);

module.exports = router;