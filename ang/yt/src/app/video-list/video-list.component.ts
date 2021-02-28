import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  videoResult: Array<string> = [];
  titles: Array<string> = ['Amazing ','Watch! ','Lates news about ','Don\'t miss out on '];

  myEvent(st : string){
    console.log(st);
  }

  searchEvent(query: string){
    this.videoResult = [];
    for(let i = 0; i < this.titles.length; i++){
      this.videoResult.push(this.titles[i]+query);
    }
  }
}
