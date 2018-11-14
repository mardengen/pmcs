import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../message.service';
import {user} from '../user';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class UserServiceService {
  private usersUrl = 'http://pmcsapd01:8181/api/userprofileapi/?UserID=10609044';  // URL to web api
  // http://pmcsapd01:8181/api/userprofileapi/?UserID=10609044
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
    /** GET heroes from the server */
    getUsers (): Observable<user> {
      return this.http.get<user>(this.usersUrl)
    }
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
  
}
