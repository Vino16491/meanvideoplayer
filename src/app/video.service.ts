import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { map } from "rxjs/operators";
import { Video } from "./video";
@Injectable({
  providedIn: "root"
})
export class VideoService {
  private _getUrl = "api/videos";
  private _postUrl = "api/videos";
  constructor(private http: Http) {}

  getVideos() {
    return this.http.get(this._getUrl).pipe(map((res: Response) => res.json()));
  }

  addVideo(video: Video) {
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post(this._postUrl, JSON.stringify(video), options)
      .pipe(map((res: Response) => res.json()));
  }
}
