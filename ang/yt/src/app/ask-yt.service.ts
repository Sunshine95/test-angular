import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AskYTService {

  constructor() { }
  getVideoList(){
    return {
      videosList: [{
        name:"Video A",
        id:1},
      {
        name:"Video BC",
        id:2},
      {
        name:"Bideo Blast 777",
        id:3}]
    }
  }
}