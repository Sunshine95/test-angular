
import { Component } from '@angular/core';
import { VideosService } from './videos.service';

@Component({
    selector: 'videos',
    template: `
      <h2>{{ title }}</h2>
      <ul>
        <li *ngFor="let video of videos">
          {{ video }}
        </li>
      <ul>
      `  
}) 

export class VideosComponent {
    title = 'List of latest videos';
    videos;

    constructor(service: VideosService) {
        this.videos = service.getVideos(); 
    }
}