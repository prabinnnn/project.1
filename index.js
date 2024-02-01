const express = require("express");
const app = express();
const mongoose = require("mongoose");
const indexofrouter = require("./routes");
app.use("/", indexofrouter);
mongoose
  .connect("mongodb://localhost:27017/blog-app")
  .then(() => console.log("Connected!"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use(express.json());
app.use((err, req, res, next) => {
  err = err ? err.toString() : "Something is missing";
  res.status(500).json({ msg: err });
});

app.listen(8000, () => {
  console.log("App is running on port 8000");
});
