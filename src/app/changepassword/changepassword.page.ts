import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoSave(){
    this.router.navigate(['/tabs']);  // define your component where you want to go
  }
  gotoCancel(){
    this.router.navigate(['/tabs']);  // define your component where you want to go
  }
}
