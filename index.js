const express = require("express");
const app = express();
const mongoose = require("mongoose");
const indexofrouter = require("./routes");
app.use("/", indexofrouter);
mongoose
  .connect("mongodb://localhost:27017/blog-app")
  .then(() => console.log("Connected!"));
app.use((req, res, next, err) => {
  err = err ? err.toString() : "something is missing";
  res.status(500).json({ msg: err });
});
app.use(express.json());
app.listen(8000, () => {
  console.log("app is runing");
});
