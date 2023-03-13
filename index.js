const express = require("express");
const path = require("path");
const db = require("./config/db");
const app = express();
const PORT = process.env.PORT || 3001;
const router = require("./routes/router");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router);
app.listen(PORT, () => console.log(`start server at port ${PORT}`));