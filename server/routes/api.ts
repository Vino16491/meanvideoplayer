const expressRouter = require("express");
const router = expressRouter();
const mongooseDB = require("mongoose");
const video = require("../models/video");
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

router.get("/videos", (req, res) => {
  console.log("Get request for all videos");
  video.find({}).exec((err, videos) => {
    if (err) {
      console.log(err);
    } else {
      res.json(videos);
    }
  });
});

router.get("/videos/:id", (req, res) => {
  console.log("Get request for a single video");
  video.findById(req.params.id).exec((err, video) => {
    if (err) {
      console.log("Error retrieving video: " + err);
    } else {
      res.json(video);
    }
  });
});

router.post("/videos", (req, res) => {
  console.log("Post a video");
  let newVideo = new video();
  newVideo.title = req.body.title;
  newVideo.url = req.body.url;
  newVideo.desc = req.body.desc;

  newVideo.save((err, insertVideo) => {
    if (err) {
      console.log("Error saving video");
    } else {
      res.json(insertVideo);
    }
  });
});

router.put("/videos/:id", (req, res) => {
  console.log("update a video");
  video.findByIdAndUpdate(
    req.params.id,
    {
      $set: { title: req.body.title, url: req.body.url, desc: req.body.desc }
    },
    {
      new: true
    },
    (err, updateVideo) => {
      if (err) {
        res.send("Error updating video");
      } else {
        res.json(updateVideo);
      }
    }
  );
});

router.delete("/videos/:id", (req, res) => {
  console.log("Deleting A video");
  video.findByIdAndRemove(req.params.id, (err, delVideos) => {
    if (err) {
      res.send("Err deleting video");
    } else {
      res.json(delVideos);
    }
  });
});

module.exports = router;
