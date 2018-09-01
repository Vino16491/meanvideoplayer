import { Component, OnInit } from "@angular/core";
import { Video } from "../video";

@Component({
  selector: "app-video-center",
  templateUrl: "./video-center.component.html",
  styleUrls: ["./video-center.component.css"]
})
export class VideoCenterComponent implements OnInit {
  videos: Video[] = [
    {
      _id: "5b8a9b6f7872448e508e5b52",
      title: "Mean Stack First Video",
      url: "https://youtu.be/ieO2MPxc7kY",
      desc: "MEAN stack First App Video"
    },
  ];

  selectedVideo: Video;

  constructor() {}

  ngOnInit() {}

  onSelectVideo(video: any) {
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }
}
