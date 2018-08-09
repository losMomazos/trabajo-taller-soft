import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable()
export class LoginService {

	constructor(private http: HttpClient){

	}
    domain: string = "http://localhost:3000"
    validateLogin(user: User){
         return this.http.post(`${this.domain}/api/user/login`,{
             username : user.username,
             password : user.password
         })
    }
 
}