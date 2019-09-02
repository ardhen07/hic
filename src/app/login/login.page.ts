import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PinmodalPage } from '../pinmodal/pinmodal.page';
import { LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  username:string
  password:string;
  
  
  dataReturned:any;
  loaderToShow: any;

  constructor(private router: Router,
    public modalController: ModalController,
    public loadingController: LoadingController,
    public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  gotoSignup(){
    
    this.showLoader_register();
      // define your component where you want to go
}
 async gotoSignin(){
    this.showLoader_login();
    const{username,password}=this;
    try{

      const res=await this.afAuth.auth.signInWithEmailAndPassword(username,password)
    }catch(err){

      console.dir(err)
    }
      // define your component where you want to go
}
async openModal() {
  const modal = await this.modalController.create({
    component: PinmodalPage,
    componentProps: {
      "paramID": 123,
      "paramTitle": "Test Title",
      animated : true,
      backdropDismiss : true,
      showBackdrop : true,
    }
  });

  modal.onDidDismiss().then((dataReturned) => {
    if (dataReturned !== null) {
      this.dataReturned = dataReturned.data;
      //alert('Modal Sent Data :'+ dataReturned);
    }
  });

  return await modal.present();
}

showLoader_register() {
  this.loaderToShow = this.loadingController.create({
    message: 'Please Wait..',
    translucent: true,
    animated:true,
  }).then((res) => {
    res.present();

    res.onDidDismiss().then((dis) => {
      console.log('Loading complete..');
      this.router.navigate(['/register']);
    });
  });
  this.hideLoader();
}



showLoader_login() {
  this.loaderToShow = this.loadingController.create({
    message: 'Please Wait..',
    translucent: true,
    animated:true,
  }).then((res) => {
    res.present();

    res.onDidDismiss().then((dis) => {
      console.log('Loading complete..');
      this.router.navigate(['/tabs']);
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


