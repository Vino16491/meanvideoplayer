const expressRouter = require("express");
const router = expressRouter();
const mongooseDB = require("mongoose");

const db =
  "mongodb://meanvideoadm:meanvideo1@ds241012.mlab.com:41012/meanvideoplayerdb";
const dbLocal = "mongodb://localhost:27017/meanvideoplayerdb";
mongooseDB.Promise = global.Promise;
mongooseDB.connect(
  dbLocal,
  err => {
    if (err) {
      console.log("Error! in connection " + err);
      return err;
    }
    console.log("DB Connected Successfully");
  }
);

router.get("/", (req, res) => {
  res.send("Api Works");
});

module.exports = router;
