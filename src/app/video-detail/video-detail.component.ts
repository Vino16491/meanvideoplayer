import { Component, OnInit, Input, EventEmitter } from "@angular/core";

@Component({
  selector: "app-video-detail",
  templateUrl: "./video-detail.component.html",
  styleUrls: ["./video-detail.component.css"],
  inputs: ["video"],
  outputs: ["updateVideoEvent", "deleteVideoEvent"]
})
export class VideoDetailComponent implements OnInit {
  video: any;
  private updateVideoEvent = new EventEmitter();
  private deleteVideoEvent = new EventEmitter();
  editTitle: boolean = false;

  constructor() {}

  ngOnInit() {
    this.editTitle = false;
  }
  ngOnChanges() {
    this.editTitle = false;
  }
  onTitleClick() {
    this.editTitle = true;
  }
  updateVideo() {
    this.updateVideoEvent.emit(this.video);
  }

  DeleteVideo() {
    this.deleteVideoEvent.emit(this.video);
  }
}
