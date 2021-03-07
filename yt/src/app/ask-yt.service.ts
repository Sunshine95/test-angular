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
    let publishedAfter:string = d.toISOString();
    console.log(publishedAfter);
    const YOUR_API_KEY:string = "[YOUR_API_KEY]"

    let params:string =
    'part'                    + '=' + 'snippet'                          + '&' +
    'maxResults'              + '=' + '10'                               + '&' +
    'order'                   + '=' + 'date'                             + '&' +
    'publishedAfter'          + '=' + encodeURIComponent(publishedAfter) + '&' +
    'q'                       + '=' + encodeURIComponent(query)          + '&' +
    'type'                    + '=' + 'video'                            + '&' +
    'key'                     + '=' + YOUR_API_KEY;
    
    const url = "https://youtube.googleapis.com/youtube/v3/search?" + params;
    
    return this.http.get(url);

  }
}