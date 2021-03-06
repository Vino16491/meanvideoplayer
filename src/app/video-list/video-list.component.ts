import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { Video } from "../video";

@Component({
  selector: "app-video-list",
  templateUrl: "./video-list.component.html",
  styleUrls: ["./video-list.component.css"],
  inputs: ["videos"],
  outputs: ["SelectVideo"]
})
export class VideoListComponent implements OnInit {
  @Input()
  videos;
  public SelectVideo = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onSelect(vid: Video) {
    this.SelectVideo.emit(vid);
  }
}
