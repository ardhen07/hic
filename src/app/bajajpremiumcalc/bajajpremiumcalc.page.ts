import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bajajpremiumcalc',
  templateUrl: './bajajpremiumcalc.page.html',
  styleUrls: ['./bajajpremiumcalc.page.scss'],
})
export class BajajpremiumcalcPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoHome(){
    this.router.navigate(['/tabs']);  // define your component where you want to go
  }
}
