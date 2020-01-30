import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService { 

  constructor(private http: HttpClient) { }

  getData() {
    const url = '/static.aoni.io/demo/user.json';
    
    return this.http.get(url)

    //return this.http.jsonp(url, 'callback')

  }













}
