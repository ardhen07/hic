import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BajajpremiumcalcPage } from './bajajpremiumcalc.page';

const routes: Routes = [
  {
    path: '',
    component: BajajpremiumcalcPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BajajpremiumcalcPage]
})
export class BajajpremiumcalcPageModule {}
