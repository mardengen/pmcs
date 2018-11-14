import { Injectable } from '@angular/core';
import { OPEC_PRMaster } from '../models/OPEC_PRMaster';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './../message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class InsertFormService {

  constructor(private http:HttpClient,private messageService: MessageService) { }

  // addHero (hero: Hero): Observable<Hero> {
  //   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
  //     tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
  //     catchError(this.handleError<Hero>('addHero'))
  //   );
  // }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private postMasterUrl = 'api/heroes';  // URL to web api
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
  postForm(master:OPEC_PRMaster):Observable<OPEC_PRMaster>
  {
    return this.http.post<OPEC_PRMaster>(this.postMasterUrl,master,httpOptions)
    .pipe(
      tap((master:OPEC_PRMaster)=>this.log(`added Master w/ id=${master.FormNo}`))
      // ,
      // catchError(this.handleError<OPEC_PRMaster>)('addMaster'))
    );
  }
}
