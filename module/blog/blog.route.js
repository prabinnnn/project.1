const router = require("express").Router();
const blogcontroller = require("./blog.controller");

router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "hello from index" });
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    data.time = Math.floor(data.words / 238);
    console.log({ data });
    const result = await blogcontroller.create(data);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id; // Corrected parameter extraction
    const body = req.body;
    console.log({ id, body });
    const result = await blogcontroller.getById(id, body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const id = req.params.id; // Corrected parameter extraction
    const body = req.body;
    console.log({ id, body });
    const result = await blogcontroller.updateById(id, body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    console.log({ id, body });
    const result = await blogcontroller.remove(id, body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
