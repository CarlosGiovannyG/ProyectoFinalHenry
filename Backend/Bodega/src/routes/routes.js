const { Router } = require("express")
const router = Router();

router.post("/", require("../controllers/food_entry"));

router.get("/", require("../controllers/food_All"));

router.get("/:id", require("../controllers/foodById"));

router.put("/", require("../controllers/foodPut"));


module.exports = router