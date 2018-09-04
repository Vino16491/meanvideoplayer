import { Component, OnInit } from "@angular/core";
import { Video } from "../video";
import { VideoService } from "../video.service";

@Component({
  selector: "app-video-center",
  templateUrl: "./video-center.component.html",
  styleUrls: ["./video-center.component.css"],
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit {
  videos: Array<Video>;

  selectedVideo: Video;
  hidenewVideo: boolean = true;

  constructor(private _videoService: VideoService) {}

  ngOnInit() {
    this._videoService.getVideos().subscribe(resVideoData => {
      console.log(resVideoData);
      this.videos = resVideoData;
    });
  }

  onSelectVideo(video: any) {
    this.selectedVideo = video;
    console.log(this.selectedVideo);
    this.hidenewVideo = true;
  }
  /** Add Video to Database */
  onSubmit(video: Video) {
    console.log(JSON.stringify(video.url));
    if (video.url.length > 0) {
      this._videoService.addVideo(video).subscribe(resNewVideo => {
        this.videos.push(resNewVideo);
        this.selectedVideo = resNewVideo;
      });
    }
    this.hidenewVideo = true;
  }

  newVideo() {
    this.hidenewVideo = false;
  }

  /** Delete Video  */
  onDelete(video: Video) {
    console.log(JSON.stringify(video._id));
    if (video._id) {
      this._videoService.delete(video).subscribe(res => {
        console.log(JSON.stringify(res));
        // this.videos.splice(this.videos.indexOf(res), 1);
      });
    }
  }

  onUpdateVideoEvent(video: any) {
    if (video) {
      this._videoService.updateVideo(video).subscribe(res => {
        video = res;
        this.selectedVideo = null;
      });
    }
  }
}
