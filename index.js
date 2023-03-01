const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {

});
app.listen(PORT, () => console.log(`start server at port ${PORT}`));