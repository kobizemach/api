import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import fetchJsonp from 'fetch-jsonp'; 


@Injectable({
  providedIn: 'root'
})
export class ApiService { 

  constructor(private http: HttpClient) { }

  getData() {
    const url = 'https://storage.googleapis.com/static.aoni.io/demo/user.json?callback=JSONP_CALLBACK';
    this.http.jsonp(url, 'callback')
    .pipe(
      catchError(this.handleError('jsonpTest', 'ERROR')),
    ).subscribe(data => {
      this.log('data: ' + JSON.stringify(data));
    });


    // fetchJsonp(url)
    // .then(function(response) {
    //   return response.json()
    // }).then(function(json) {
    //   console.log('parsed json', json)
    // }).catch(function(ex) {
    //   console.log('parsing failed', ex)
    // })
  }

  handleSearch(){
    let url = 'https://storage.googleapis.com/static.aoni.io/demo/user.json';
    

}
