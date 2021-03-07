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

  constructor(private serviceObjectYT:AskYTService) { 
    
  }

  videos:any;
  defaultQuery:string = "kittens";

  ngOnInit(): void {
    this.serviceObjectYT.getVideoList(this.defaultQuery).subscribe((data)=> {
       this.videos = data.items;
    })
  }

  searchEvent(query: string){
    this.serviceObjectYT.getVideoList(query).subscribe((data) => {
      this.videos = data.items;
    })    
  }

}
