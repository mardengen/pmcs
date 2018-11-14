import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {user} from '../user';
import {UserServiceService} from '../service/user-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private routes:Router,private http:HttpClient,private userServ:UserServiceService) { }
  users:user;
  ngOnInit() {
  }

//   getData():Observable<user>
// {
// this.users=this.http.get<user>("http://pmcsapd01:8181/api/userprofileapi/?UserID=10609044");
// return this.users;
// }

// getUser(): void {
//   const id = +this.route.snapshot.paramMap.get('id');
//   this.userse.getHero(id)
//     .subscribe(hero => this.hero = hero);
// }
getUseres(): void {
  this.userServ.getUsers()
  .subscribe(data =>
    {
    // this.users = data
    if(data.UserID!="undefined")
    {
    this.users.UserID=data.UserID,
    this.users.DefaultLanguage=data.DefaultLanguage;
    this.users.DefaultTimeZone=data.DefaultTimeZone;
  }})}
    

demo1()
{
this.routes.navigate(['/home/demo1/']);
}
demo2()
{
  this.routes.navigate(['/home/demo2/']);
}
}
