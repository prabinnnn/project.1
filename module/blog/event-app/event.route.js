const router = require("express").Router();
const eventcontroller = require("./event.controller");
router.get("/", async (res, req, next) => {
  try {
    const data = req.body;
    const result = await eventcontroller.find(data);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.get("/", async (res, req, next) => {
  try {
    const data = req.body;
    const result = await eventcontroller.create(data);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.put("/:id", async (res, req, next) => {
  try {
    const id = req.body;
    const body = req.body;
    const result = await eventcontroller.getById(id, body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.patch("/:id", async (res, req, next) => {
  try {
    const id = req.body;
    const body = req.body;
    const result = await eventcontroller.updateById(id, body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.delete("/:id", async (res, req, next) => {
  try {
    const id = req.body;
    const body = req.body;
    const result = await eventcontroller.remove(id, body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
