const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const mongodb = "mongodb://127.0.0.1/game";
mongoose
.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

const app = express();
const bodyParser = require("body-parser");

app.use(logger("dev"));
app.use(cookieParser());
app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/createGame", require("./routes/createGame"))
app.use("/game", require("./routes/game"))
app.use("/startGame", require("./routes/startGame"))
app.get("/", (req, res) => {
  res.render("index", {});
});

app.listen(3002, () => {
  console.log("Servidor iniciado....");
});
