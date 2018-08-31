const expressRouter = require("express");

const router = expressRouter.Router();

router.get("/", (req, res) => {
  res.send("Api Works");
});

module.exports = router;
