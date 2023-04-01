const express = require("express");
const path = require("path");
const db = require("./config/db");
const app = express();
const PORT = process.env.PORT || 3001;

const main = require("./routes/main");
const units = require("./routes/units");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", main);
app.use("/units", units);
// app.use("/owners", owners);

app.listen(PORT, () => console.log(`start server at port ${PORT}`));