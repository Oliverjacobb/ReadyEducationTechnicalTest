import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IGetUserResponse } from '../models/iuser';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  GetUsers(): Observable<IGetUserResponse> {
    return this.http.get<IGetUserResponse>("https://randomuser.me/api/?results=10").pipe(catchError(err => {
      console.log(err)
      return throwError(() => "Something went wrong with retrieving current users. Please try again later.") 
    }));
  }
}
