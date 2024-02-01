const router = require("express").Router();
router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "hello from prabin" });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
