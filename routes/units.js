const express = require("express");
const router = express.Router();
const UnitsController = require("../controllers/UnitsController");

router.get("/", UnitsController.getUnits);
router.get("/add", UnitsController.formUnit);
router.post("/add", UnitsController.createUnit);
router.get("/edit/:unit_id", UnitsController.getUnit);
router.post("/edit/:unit_id", UnitsController.updateUnit);
router.get("/disable/:unit_id", UnitsController.disableUnit);
router.get("/trash", UnitsController.getTrashUnits);
router.get("/restore/:unit_id", UnitsController.restoreUnit);

module.exports = router;