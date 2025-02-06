const express = require("express"); 
const router = express.Router();
const storeController = require("../controller/stoe_controller");

router.post("/addstore", storeController.addStore);
router.get("/getallstores", storeController.getStores);
router.get("/:id", storeController.getStoreById);
router.post("/store/:id/items", storeController.addItemToStore);


module.exports = router;
