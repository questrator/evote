const express = require("express");
const router = express.Router();
const UnitsController = require("../controllers/UnitsController");

router.get("/", (req, res, next) => {
    res.send("OK");
});

router.get("/units", UnitsController.getUnits);
router.post("/units/add", UnitsController.addUnit);

module.exports = router;