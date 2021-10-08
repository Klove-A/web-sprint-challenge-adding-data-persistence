const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("inside resourceRouter");
});

module.exports = router;
