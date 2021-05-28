import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtspotService {
  private url: string = 'http://localhost:3000/artspot';

  constructor(public http: HttpClient){}

  getAll(){
    return this.http.get(this.url);
  }
}
