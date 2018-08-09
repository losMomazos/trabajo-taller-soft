import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import {map} from 'rxjs/operators';


@Injectable()
export class RegisterService {

	constructor(private http: HttpClient){

	}
    domain: string = "http://localhost:3000"
    insert(user: User){
         return this.http.post(`${this.domain}/api/register`,{
             name: user.name,
             username : user.username,
             password : user.password
         })
    }
    addUser(newUser){
        console.log(newUser);  
        return this.http.post<any>(`${this.domain}/api/register`,newUser)
        .pipe(map(res=>res))
    }
    getUsers(){
        return this.http.get<User[]>(`${this.domain}/api/register`)
        .pipe(map(res=>res))
      }
 
}