const express = require("express");
const router = express.Router();
const UnitsController = require("../controllers/UnitsController");

router.get("/", (req, res, next) => {
    res.send("MAIN OK");
});

router.get("/units", UnitsController.getUnits);
router.post("/units/add", UnitsController.addUnit);
router.post("/units/delete", UnitsController.deleteUnit);
router.post("/units/update", UnitsController.updateUnit);

module.exports = router;