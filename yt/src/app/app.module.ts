import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideosComponent } from './videos.component';
import { VideoHighlightComponent } from './video-highlight/video-highlight.component';
import { VideosService } from './videos.service';

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    VideoHighlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    VideosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
