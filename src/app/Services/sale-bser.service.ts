import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../message.service';
import {user} from '../user';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {OPEC_PRTYPE_BUYER} from '../models/OPEC_PRTYPE_BUYER'
import { SaleB } from '../models/SaleB';
// import { BuyersModel } from '../models/BuyersModel';
// import {SaleB} from '../Models/SaleB';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable({
  providedIn: 'root'
})
export class SaleBSerService {
  private heroesUrl1 = 'http://localhost:51962/api/SaleB/AddSaleB?SiteNo=xx';  // URL to web api
  // private heroesUrl2 = 'http://localhost:51962/api/Customer/GetCustomers?SiteNo=xx';
  private heroesUrl3 = 'http://localhost:51962/api/Saleb/PUTSaleB?SiteNo=xx';
  private heroesUrl4 = 'http://localhost:51962/api/Saleb/DelSaleB?SiteNo=xx';
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
   /** GET heroes from the server */
  //  getHeroes (): Observable<BuyersModel> {
  //   return this.http.get<BuyersModel>(this.heroesUrl);
  //   //   .pipe(
  //   //     tap(heroes => this.log('fetched heroes')),
  //   //     catchError(this.handleError('getHeroes', []))
  //   //   );
  // }

  /** GET hero by id. Return `undefined` when id not found */
  // getHeroNo404<Data>(id: number): Observable<OPEC_PRTYPE_BUYER> {
  //   const url = `${this.heroesUrl}/?id=${id}`;
  //   return this.http.get<OPEC_PRTYPE_BUYER[]>(url)
  //     .pipe(
  //       map(heroes => heroes[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`;
  //         this.log(`${outcome} hero id=${id}`);
  //       }),
  //       catchError(this.handleError<OPEC_PRTYPE_BUYER>(`getHero id=${id}`))
  //     );
  // }

  /** GET hero by id. Will 404 if id not found */
  // getHero(id: number): Observable<OPEC_PRTYPE_BUYER> {
  //   const url = `${this.heroesUrl}/${id}`;
  //   return this.http.get<OPEC_PRTYPE_BUYER>(url).pipe(
  //     tap(_ => this.log(`fetched hero id=${id}`)),
  //     catchError(this.handleError<OPEC_PRTYPE_BUYER>(`getHero id=${id}`))
  //   );
  // }

  /* GET heroes whose name contains search term */
  // searchHeroes(term: string): Observable<OPEC_PRTYPE_BUYER[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<OPEC_PRTYPE_BUYER[]>(`${this.heroesUrl}/?name=${term}`).pipe(
  //     tap(_ => this.log(`found heroes matching "${term}"`)),
  //     catchError(this.handleError<OPEC_PRTYPE_BUYER[]>('searchHeroes', []))
  //   );
  // }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addHero (hero: SaleB): Observable<SaleB> {
    return this.http.post<SaleB>(this.heroesUrl1, hero, httpOptions);
    // .pipe(
    //   tap((hero: OPEC_PRTYPE_BUYER) => this.log(`added hero w/ id=${hero.id}`)),
    //   catchError(this.handleError<OPEC_PRTYPE_BUYER>('addHero'))
    // );
  }

  /** DELETE: delete the hero from the server */
  // deleteHero (hero: OPEC_PRTYPE_BUYER | number): Observable<OPEC_PRTYPE_BUYER> {
  //   const id = typeof hero === 'number' ? hero : hero.id;
  //   const url = `${this.heroesUrl}/${id}`;

  //   return this.http.delete<OPEC_PRTYPE_BUYER>(url, httpOptions).pipe(
  //     tap(_ => this.log(`deleted hero id=${id}`)),
  //     catchError(this.handleError<OPEC_PRTYPE_BUYER>('deleteHero'))
  //   );
  // }

  /** PUT: update the hero on the server */
  // updateHero (hero: OPEC_PRTYPE_BUYER): Observable<any> {
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
