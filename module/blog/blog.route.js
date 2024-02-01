const router = require("express").Router();
router.get("/", (req, res, next) => {
  res.json({ msg: "hello from index" });
});
module.exports = router;
