import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AskYTService {

  constructor(private http:HttpClient) { }

  getVideoList(query:string): Observable<any> {
    
    let d:Date = new Date(Date.now());
    d.setHours(d.getHours() - 2);

    const YOUR_API_KEY:string = "AIzaSyAGIidNqFhPvsTPDsf3YV2MIhWkbPb3tf4"

    let params:HttpParams = new HttpParams()
    .set('part', 'snippet')
    .set('maxResults', '5')
    .set('order', 'date')
    .set('publishedAfter', encodeURIComponent(d.toISOString()))
    .set('q', encodeURIComponent(query))
    .set('type', 'video')
    .set('key', YOUR_API_KEY);
   
    
    const url = "https://youtube.googleapis.com/youtube/v3/search" + params.toString();

    // return url;
    return this.http.get(url);
  }
}