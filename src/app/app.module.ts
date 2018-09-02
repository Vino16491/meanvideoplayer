import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { VideoCenterComponent } from "./video-center/video-center.component";

import { AppRoutingModule } from "./app-routing.module";
import { VideoListComponent } from "./video-list/video-list.component";
import { VideoDetailComponent } from "./video-detail/video-detail.component";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoCenterComponent,
    VideoListComponent,
    VideoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
