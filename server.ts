const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const api = require("./server/routes/api");
const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, "dist/meanvideoplayer")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", api);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/meanvideoplayer/index.html"));
});

app.listen(port, () => {
  console.log("Server Running on localhost: " + port);
});
