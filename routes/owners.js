const express = require("express");
const router = express.Router();
const OwnersController = require("../controllers/OwnersController");

router.get("/", OwnersController.getOwners);
router.get("/add", OwnersController.formOwner);
router.post("/add", OwnersController.createOwner);
router.get("/edit/:owner_id", OwnersController.getOwner);
router.post("/edit/:owner_id", OwnersController.updateOwner);
router.get("/disable/:owner_id", OwnersController.disableOwner);
router.get("/trash", OwnersController.getTrashOwners);
router.get("/restore/:owner_id", OwnersController.restoreOwner);

module.exports = router;