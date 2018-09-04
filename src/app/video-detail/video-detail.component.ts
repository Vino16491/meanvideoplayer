import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-video-detail",
  templateUrl: "./video-detail.component.html",
  styleUrls: ["./video-detail.component.css"],
  inputs: ["video"]
})
export class VideoDetailComponent implements OnInit {
  @Input()video;
  
  
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
}
