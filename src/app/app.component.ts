import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
readonly URL = "https://jsonplaceholder.typicode.com/posts";
posts:any;

  constructor(private http: HttpClient) { this.getYogoPosts();};
  
getPosts(){

  this.posts = this.http.get(this.URL)
}

getYogoPosts(){

  // const httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     'Access-Control-Allow-Origin':'true',
  //     'Access-Token' : 'CdS4kJRz'
  //   })
  // };

  this.posts = this.http.get("assets/plan.json")
}

}
