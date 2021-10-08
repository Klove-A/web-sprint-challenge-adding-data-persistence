const router = require("express").Router();
const Resource = require("./model");

router.get("/", (req, res, next) => {
  Resource.getResources()
    .then((resources) => {
      res.json(resources);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Resource.createResource(req.body)
    .then((newResource) => {
      res.status(201).json(newResource);
    })
    .catch(next);
});

module.exports = router;
