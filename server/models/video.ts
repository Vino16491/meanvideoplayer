const mongooseModel = require("mongoose");

const Schema = mongooseModel.Schema;

const videoSchema = new Schema({
  title: String,
  url: String,
  desc: String
});

module.exports = mongooseModel.model("video", videoSchema, "videos");
