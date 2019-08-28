import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bajaj',
  templateUrl: './bajaj.page.html',
  styleUrls: ['./bajaj.page.scss'],
})
export class BajajPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoCalc(){
    this.router.navigate(['/bajajpremiumcalc']);  // define your component where you want to go
  }
}
