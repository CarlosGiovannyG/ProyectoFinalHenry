const { authJwt } = require("../middleware");
const testController = require("../Controller/testUserController");
const { Router } = require('express');
const router = Router();


module.exports = function(router) {
  router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  router.get("/all", allAccess);

  router.get(
    "/user",
    [authJwt.verifyToken],
    userBoard
  );

  router.get(
    "/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    moderatorBoard
  );

  router.get(
    "/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    adminBoard
  );
};