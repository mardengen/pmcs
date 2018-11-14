import { Injectable } from '@angular/core';
import {User} from "../models/user";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    baseUrl: string = 'http://localhost:4200/user-portal/users';
  constructor(private http: HttpClient) { 

  }
//   let fakeUsers = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
//   {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
//   {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
//   {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
// ];
// return Observable.of(fakeUsers).delay(5000);
  getUsers() {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

}
