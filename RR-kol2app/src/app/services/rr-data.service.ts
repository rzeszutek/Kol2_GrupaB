import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RRDataService {

  private url = 'https://kol2tai.herokuapp.com/api/forum/posts';

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.url);
  }

  getPostsDetails(id){
  return this.http.get(this.url + '/' + id)
  }
}




