const {Router} = require('express');
const router = Router();
const { getUsers, getUserById, addUser } = require("../Controller/usersController");





router.get("/", getUsers)
router.get("/:id", getUserById)
router.post("/", addUser)

module.exports = router;