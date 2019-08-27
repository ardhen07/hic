import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoSave(){
    this.router.navigate(['/login']);  // define your component where you want to go
}
gotoCancel(){
  this.router.navigate(['/login']);  // define your component where you want to go
}
}
