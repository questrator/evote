const { response } = require("express");
const express = require("express");
const router = express.Router();
const UnitsController = require("../controllers/UnitsController");

router.get("/", (req, res, next) => {
    res.send("MAIN OK");
});

router.get("/units", UnitsController.getUnits);
router.get("/units/add", UnitsController.formUnit);
router.post("/units/add", UnitsController.createUnit);
router.get("/units/edit/:unit_id", UnitsController.editUnit);
router.post("/units/edit/:unit_id", UnitsController.updateUnit);
router.get("/units/del/:unit_id", UnitsController.deleteUnit);

module.exports = router;