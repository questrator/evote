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
router.get("/units/delete/:id", UnitsController.deleteUnit);
router.post("/units/delete/:id", UnitsController.deleteUnit);
router.post("/units/update", UnitsController.updateUnit);

module.exports = router;