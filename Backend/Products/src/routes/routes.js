const { Router } = require("express")
const router = Router();


router.post("/", require("../controllers/productsCreate"))

router.post("/:id/like", require("../controllers/productLike"))

router.post("/:id/comment", require("../controllers/productComment"))

router.get("/", require("../controllers/productsAll"))

router.get("/:id", require("../controllers/productById"))

router.get("/bycomment/:id", require("../controllers/commentByProduct"))

router.post("/update/:id", require("../controllers/productUpdate"))


module.exports = router