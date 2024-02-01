const express = require("express");
const app = express();
const indexofrouter = require("./routes");
app.use("/", indexofrouter);
app.use((req, res, next, err) => {
  err = err ? err.toString() : "something is missing";
  res.status(500).json({ msg: err });
});
app.use(express.json());
app.listen(8000, () => {
  console.log("app is runing");
});
