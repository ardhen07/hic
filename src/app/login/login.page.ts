import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoSignup(){
    this.router.navigate(['/register']);  // define your component where you want to go
}
  gotoSignin(){
  this.router.navigate(['/tabs']);  // define your component where you want to go
}
}
