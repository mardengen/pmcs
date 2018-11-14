import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OtherServiceService {

  constructor(private _http:HttpClient) { }

getCurrentTime(){
  return this._http.get('http://date.jsontest.com');//(res=>res.json());
}

}

