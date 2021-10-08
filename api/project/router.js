const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("inside projectRouter");
})

module.exports = router;
