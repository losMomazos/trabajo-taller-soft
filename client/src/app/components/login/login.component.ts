import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router}from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData={username:'',password:''};
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
  }
  loginUser(){
    this.auth.loginUser(this.loginUserData)
      .subscribe(
        res=>{
          console.log(res)
          localStorage.setItem('token-CRUD',res.token);
          this.router.navigate(['/crud'])
        },
        err=>console.log(err)
      )
  }
}
