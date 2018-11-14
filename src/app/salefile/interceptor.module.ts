//  import { NgModule } from '@angular/core';
//  import { CommonModule } from '@angular/common';
//  import { HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
//  import { Observable } from 'rxjs';

//  @NgModule({
//    imports: [
//      CommonModule
//    ],
//    declarations: [],
//    providers:[{provide:HTTP_INTERCEPTOR,useClass:HttpRequest:interceptor}]
//  })
// // export class InterceptorModule implements HttpInterceptor {
// //   intercept(req:HttpRequest<any>,next:HttpHandler):Observable<any>
// //   const dupReq=req.clone({headers:req.headers.set('Access-Control-Allow-Origin','https://localhost:4200/')})
// //   return next.handle(dupReq);
  
// //    }