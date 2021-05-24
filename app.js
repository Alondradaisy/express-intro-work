const express = require("express");
const logger = require("morgan");
const path = require("path");

const app = express();
app.set("view", path.join(__dirname, "view"));
app.set("view engine", "ejs");

//middleware = enables abilities
app.use(logger("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
app.use("/", index.ejs);


app.listen(3000, function() {
    console.log(`Server is live at PORT: ${3000}`);
});



