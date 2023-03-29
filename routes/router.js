const express = require("express");
const router = express.Router();
const UnitsController = require("../controllers/UnitsController");
const house = require("../config/house");

router.get("/", (req, res, next) => {
    res.send(house);
});

router.get("/units", UnitsController.getUnits);
router.get("/units/add", UnitsController.formUnit);
router.post("/units/add", UnitsController.createUnit);
router.get("/units/edit/:unit_id", UnitsController.getUnit);
router.post("/units/edit/:unit_id", UnitsController.updateUnit);
router.get("/units/del/:unit_id", UnitsController.deleteUnit);
router.get("/units/trash", UnitsController.getTrashUnits);
router.get("/units/restore/:unit_id", UnitsController.restoreUnit);

module.exports = router;