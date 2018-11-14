import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../message.service';
import {user} from '../user';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {OPEC_PRMaster} from '../models/OPEC_PRMaster';
import { OPEC_PRDetail } from '../models/OPEC_PRDetail';
import { OPEC_PRDetails } from '../mock-details';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({ providedIn: 'root'})  

export class FormNoService {
  private heroesUrl = 'http://localhost:3847/api/prapi/Get?id=PUR1805170002';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
 /** GET heroes from the server */
//  getHeroes (): Observable<OPEC_PRMaster[]> {
//   return this.http.get<OPEC_PRMaster[]>(this.heroesUrl)
//     .pipe(
//       tap(heroes => this.log('fetched heroes')),
//       catchError(this.handleError('getHeroes', []))
//     );
// }

/** GET hero by id. Return `undefined` when id not found */
getHeroNo404<Data>(id: number): Observable<OPEC_PRMaster> {
  const url = `${this.heroesUrl}/?id=${id}`;
  return this.http.get<OPEC_PRMaster[]>(url)
    .pipe(
      map(heroes => heroes[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} hero id=${id}`);
      }),
      catchError(this.handleError<OPEC_PRMaster>(`getHero id=${id}`))
    );
}
getDetails():Observable<Array<OPEC_PRDetail>>
{
return of(OPEC_PRDetails);
}
/** GET hero by id. Will 404 if id not found */
getHeroMaster(id: number): Observable<OPEC_PRMaster> {
  // private heroesUrl = 'http://localhost:3847/api/prapi/Get?id=PUR1805170002';  // URL to web api

  // const url = `${this.heroesUrl}`;///${id}
  const url='http://10.34.217.41:3847/api/prapi/GetMaster?purno=PUR1808300001';
  //const url='http://localhost:3847/api/prapi/GetMasterJson?purno=PUR1808300001';
  return this.http.get<OPEC_PRMaster>(url);//.pipe(
    // tap(_ => this.log(`fetched hero id=${id}`)),
    // catchError(this.handleError<OPEC_PRMaster>(`getHero id=${id}`))
}

getHeroDetails(id: number): Observable<Array<OPEC_PRDetail>> {
  // http://localhost:3847/api/prapi/Get?id=PUR1808300001

  // const url = `${this.heroesUrl}`;///${id}
  const url='http://localhost:3847/api/prapi/Get?id=PUR1808300001';
  return this.http.get<Array<OPEC_PRDetail>>(url);//.pipe(
    // tap(_ => this.log(`fetched hero id=${id}`)),
    // catchError(this.handleError<OPEC_PRMaster>(`getHero id=${id}`))
}

/* GET heroes whose name contains search term */
searchHeroes(term: string): Observable<OPEC_PRMaster[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<OPEC_PRMaster[]>(`${this.heroesUrl}/?name=${term}`).pipe(
    tap(_ => this.log(`found heroes matching "${term}"`)),
    catchError(this.handleError<OPEC_PRMaster[]>('searchHeroes', []))
  );
}

//////// Save methods //////////

/** POST: add a new hero to the server */
// addHero (hero: OPEC_PRMaster): Observable<OPEC_PRMaster> {
//   return this.http.post<OPEC_PRMaster>(this.heroesUrl, hero, httpOptions).pipe(
//     tap((hero: OPEC_PRMaster) => this.log(`added hero w/ id=${hero.id}`)),
//     catchError(this.handleError<OPEC_PRMaster>('addHero'))
//   );
// }

/** DELETE: delete the hero from the server */
// deleteHero (hero: OPEC_PRMaster | number): Observable<OPEC_PRMaster> {
//   const id = typeof hero === 'number' ? hero : hero.id;
//   const url = `${this.heroesUrl}/${id}`;

//   return this.http.delete<OPEC_PRMaster>(url, httpOptions).pipe(
//     tap(_ => this.log(`deleted hero id=${id}`)),
//     catchError(this.handleError<OPEC_PRMaster>('deleteHero'))
//   );
// }

// /** PUT: update the hero on the server */
// updateHero (hero: OPEC_PRMaster): Observable<any> {
//   return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
//     tap(_ => this.log(`updated hero id=${hero.id}`)),
//     catchError(this.handleError<any>('updateHero'))
//   );
// }

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
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

/** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
}
}
