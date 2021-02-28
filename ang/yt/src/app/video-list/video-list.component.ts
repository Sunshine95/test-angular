import { Component, OnInit } from '@angular/core';
import { AskYTService } from '../ask-yt.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  constructor(private videoList:AskYTService) { 
    for(let v of videoList.getVideoList().videosList){
      this.videoResult.push(v.name);
    }  
  }

  ngOnInit(): void {
  }

  myEvent(st : string){
    console.log(st);
  }

  videoResult: Array<string> = []; 
  searchEvent(query: string){
    return this.videoResult;
  }

}
