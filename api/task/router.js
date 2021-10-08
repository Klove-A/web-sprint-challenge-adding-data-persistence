const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("inside taskRouter");
});

module.exports = router;
