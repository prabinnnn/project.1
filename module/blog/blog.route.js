const router = require("express").Router();

router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "hello from index" });
  } catch (e) {
    next(e);
  }
});
router.post("/", (req, res, next) => {
  try {
    const data = req.body;
    data.time = math.floor(data.wprds / 238);
    res.json(`${data}`);
  } catch (e) {
    next(e);
  }
});
module.exports = router;
