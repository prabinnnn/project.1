const router = require("express").Router();
const blogrouter = require("express");
router.use("/ap1/v1/blog", blogrouter);
router.get("/", (req, res, next) => {
  res.json({ msg: "hello from index" });
});
module.exports = router;
