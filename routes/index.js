const router = require("express").Router();
const blogrouter = require("../module/blog/blog.route");
const userrouter = require("../module/blog/user/user.route");

router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "hello from prabin" });
  } catch (e) {
    next(e);
  }
});
router.use("/api/v1/blog", blogrouter);
router.use("/api/v2/user", userrouter);
module.exports = router;
