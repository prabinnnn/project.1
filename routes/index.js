const router = require("express").Router();
const blogrouter = require("../module/blog/blog.route");
const userrouter = require("../module/blog/user/user.route");
const eventrouter = require("../module/blog/event-app/event.route");

router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "hello from prabin" });
  } catch (e) {
    next(e);
  }
});
router.use("/api/v3/event", eventrouter);
router.use("/api/v1/blog", blogrouter);
router.use("/api/v2/user", userrouter);
router.use("/api/v4/book");
module.exports = router;
