require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const indexofrouter = require("./routes");
const PORT = Number(process.env.PORT);
app.use("/", indexofrouter);
mongoose
  .connect(process.env.DB)
  .then(() => console.log("Connected!"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use(express.json());
app.use((err, req, res, next) => {
  err = err ? err.toString() : "Something is missing";
  res.status(500).json({ msg: err });
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
