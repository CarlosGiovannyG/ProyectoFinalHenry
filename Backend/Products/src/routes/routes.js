const { Router } = require("express")
const router = Router();
const ImagenesCreate = require('../config/storge')


router.post("/", ImagenesCreate.single('image'), require("../controllers/productsCreate"))

router.post("/:id/like", require("../controllers/productLike"))

router.post("/:id/comment", require("../controllers/productComment"))

router.get("/", require("../controllers/productsAll"))

router.get("/:id", require("../controllers/productById"))

router.get("/bycomment/:id", require("../controllers/commentByProduct"))




module.exports = router