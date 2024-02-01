const express = require("express");
const app = express();
const indexofrouter = require("./routes");
const blogrouter = require("express");
app.use("/", indexofrouter);
router.use("/ap1/v1/blog", blogrouter);
app.use((req, res, next, err) => {
  err = err ? err.toString() : "something is missing";
  res.status(500).json({ msg: err });
});
app.use(express.json());
app.listen(8000, () => {
  console.log("app is runing");
});
