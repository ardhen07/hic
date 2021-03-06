import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoBajaj(){
    this.router.navigate(['/bajaj']);  // define your component where you want to go
  }
  gotoSignin(){
    this.router.navigate(['/login']);  // define your component where you want to go
  }

  //////////////////// footer /////////////////////////////
  myProfile(){
    this.router.navigate(['/profile']);  // define your component where you want to go
  }
}
