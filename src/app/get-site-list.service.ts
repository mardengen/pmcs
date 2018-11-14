import { Injectable } from '@angular/core';
import {FNDA_PLANTDATA} from './models/FNDA_PLANTDATA';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetSiteListService {
  ttt:FNDA_PLANTDATA[];
  aaa:FNDA_PLANTDATA;//=new FNDA_PLANTDATA();
  bbb:FNDA_PLANTDATA;
  in:string;
  constructor(private http: HttpClient) { }
  private heroesUrl = 'http://localhost:3847/api/prapi/GetSiteList';  // URL to web api


  // getSites (): Observable<FNDA_PLANTDATA[]> {
  //   let ttt:FNDA_PLANTDATA[];
  //   let aaa:FNDA_PLANTDATA;
  //   aaa.PLANT="josh";
  //   let bbb:FNDA_PLANTDATA;
  //   bbb.PLANT="river";

  //   ttt.push(aaa);
  //   ttt.push(bbb);
  //   return of(ttt);
  //   // return this.http.get<FNDA_PLANTDATA[]>(this.heroesUrl);
  // }

  getSites (): FNDA_PLANTDATA[] {

    
    this.in="josh";
    this.aaa=new FNDA_PLANTDATA();
    this.aaa.PLANT=this.in;
    this.bbb=new FNDA_PLANTDATA();    
    this.bbb.PLANT="river";
    this.ttt=new  Array<FNDA_PLANTDATA>();
    this.ttt.push(this.aaa);
    this.ttt.push(this.bbb);
    // return of(ttt);
    return this.ttt;
    // return this.http.get<FNDA_PLANTDATA[]>(this.heroesUrl);
  }

  }
