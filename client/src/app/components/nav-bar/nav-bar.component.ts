import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  ngOnInit() {
  }
  constructor( private router: Router){
    if(!localStorage.getItem('loggedInUser')){
      this.router.navigate(['/']);
    }
  }
 
  logout(){
    localStorage.removeItem('loggedInUser');
      this.router.navigate(['/']);
  }
  loggedIn(){
    return localStorage.getItem('token')!==null;
  }
    
}
