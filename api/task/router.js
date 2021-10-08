const router = require("express").Router();
const Task = require("./model");

router.get("/", (req, res, next) => {
  res.json("inside taskRouter");
});

module.exports = router;
