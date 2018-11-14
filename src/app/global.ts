import { Injectable } from "@angular/core";

//
// ===== File globals.ts    
//
'use strict';

export const sep='/';
export const version: string="22.2.2";  
//export var rowno="0";
@Injectable()
export class Globals {

    //rowno:string = '0';
  static rowno: any;

}