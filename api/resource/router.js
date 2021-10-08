const router = require("express").Router();
const Resource = require("./model");

router.get("/", (req, res, next) => {
  res.json("inside resourceRouter");
});

module.exports = router;
