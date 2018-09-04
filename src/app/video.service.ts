import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { map } from "rxjs/operators";
import { Video } from "./video";
@Injectable({
  providedIn: "root"
})
export class VideoService {
  private url = "api/videos";
  constructor(private http: Http) {}

  getVideos() {
    return this.http.get(this.url).pipe(map((res: Response) => res.json()));
  }

  addVideo(video: Video) {
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post(this.url, JSON.stringify(video), options)
      .pipe(map((res: Response) => res.json()));
  }
  updateVideo(video: Video) {
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });
    return this.http
      .put(this.url+"/"+video._id, JSON.stringify(video), options)
      .pipe(map((res: Response) => res.json()));
  }

  delete(video: Video) {
    return this.http
      .delete(this.url + video._id)
      .pipe(map((res: Response) => res.json()));
  }
}
