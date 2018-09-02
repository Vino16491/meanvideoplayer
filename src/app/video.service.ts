import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class VideoService {
  private _getUrl = "api/videos";
  constructor(private http: Http) {}

  getVideos() {
    return this.http.get(this._getUrl).pipe(map((res: Response) => res.json()));
  }
}
