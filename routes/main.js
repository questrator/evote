const express = require("express");
const router = express.Router();
const house = require("../config/house");

router.get("/", (req, res, next) => {
    res.send(house);
});

module.exports = router;