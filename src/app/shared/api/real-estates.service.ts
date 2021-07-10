import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RealEstate } from '../models/real-estate';



@Injectable({
  providedIn: 'root'
})
export class RealEstatesService {

  controllerUrl = '/real_estates';

  apiURL: string;

  constructor(private http: HttpClient) {
    this.apiURL = 'https://real-estate-api-by-phillip.herokuapp.com/api/v1';
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAll(): Observable<Array<RealEstate>> {
    return this.http.get<Array<RealEstate>>(this.apiURL + this.controllerUrl)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  findByid(id: string): Observable<RealEstate> {
    return this.http.get<RealEstate>(`${this.apiURL}${this.controllerUrl}/${id}` , this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.handleError)
      )
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
