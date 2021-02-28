import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AskYTService } from '../ask-yt.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  constructor(private videoList:AskYTService) { 
    
  }

  ngOnInit(): void {
    this.videoList.getVideoList("kittens").subscribe((data)=> {
      console.log(data);
    })
  }

  myEvent(st : string){
    console.log(st);
  }

  
  searchEvent(query: string){
    this.videoList.getVideoList(query).subscribe((data) => {
      console.log(data);
    })    
  }

}
