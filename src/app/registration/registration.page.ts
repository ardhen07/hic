import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { RegisterService } from './register.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  loaderToShow: any;
  constructor(private router: Router,
    public loadingController: LoadingController,
    private registerService: RegisterService) { }

  ngOnInit() {
  }
  gotoSave(){
    this.showLoader();
 //   this.router.navigate(['/login']);  // define your component where you want to go
}
gotoCancel(){
  this.router.navigate(['/login']);  // define your component where you want to go
}

showLoader() {
  this.loaderToShow = this.loadingController.create({
    message: 'Saving Data',
    translucent: true,
    animated:true,
  }).then((res) => {
    res.present();

    res.onDidDismiss().then((dis) => {
      console.log('Loading complete..');
      this.registerService.goto_Save().subscribe((response) => {
        console.log(response);
    });
      this.router.navigate(['/login']);
    });
  });
  this.hideLoader();
}

hideLoader() {
  setTimeout(() => {
    this.loadingController.dismiss();
  }, 4000);
}
}
