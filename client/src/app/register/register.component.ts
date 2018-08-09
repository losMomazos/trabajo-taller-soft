import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ RegisterService ]
})
export class RegisterComponent implements OnInit {
  userAdd={category:'User'};
  todo:any[];
  public user : User;

  constructor(private registerService: RegisterService, private router: Router,  ) {
    this.user = new User();
    console.log('Usuario creado fuck!!:    ',this.user)
    this.registerService.getUsers()
      .subscribe(user=>{
        this.todo= user;
      })
  }
  ngOnInit() {

  }
  insert() {
    console.log('registrado mierdaaaa!!!');
    console.log('buscando al usuario 1: ',this.user)
    console.log('Usuario añadido aqui: ',this.userAdd)
    this.registerService.addUser(this.user)
    .subscribe(user=>{
    console.log(this.todo)
    this.todo.push(user);
    console.log(this.todo)
    this.resetUser();
    localStorage.setItem('loggedInUser', this.user.username);
    this.router.navigate(['/home']);
       
    });
  }
  resetUser(){
    this.userAdd={category:'User'};
  }
}