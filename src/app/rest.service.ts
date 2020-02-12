import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  //injecting the http client to constuctor
  constructor(private http: HttpClient) {
   
    const endpoint = 'http://localhost:3000/api/v1/';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
       })
};

   }

   
}

