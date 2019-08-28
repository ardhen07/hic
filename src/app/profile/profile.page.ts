import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoUpdate(){
    this.router.navigate(['/tabs']);  // define your component where you want to go
  }
  gotoCancel(){
    this.router.navigate(['/tabs']);  // define your component where you want to go
  }
}
