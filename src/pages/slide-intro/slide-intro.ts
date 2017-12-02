import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { UserLoginService } from '../../providers/userLogin.service';
import { CognitoCallback, LoggedInCallback } from '../../providers/cognito.service';
import { AddcompaniesPage } from '../addcompanies/addcompanies';
import { MycompaniesPage } from '../mycompanies/mycompanies';

/**
 * Generated class for the SlideIntroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide-intro',
  templateUrl: 'slide-intro.html',
})
export class SlideIntroPage implements CognitoCallback,LoggedInCallback {
  isLoggedInCallback(message: string, isLoggedIn: boolean): void {
    console.log("The user is logged in: " + isLoggedIn);
    if (isLoggedIn) {
       // this.eventService.sendLoggedInEvent();
        this.navCtrl.setRoot(MycompaniesPage);
        // this.userService.logout();
    }
  }
  cognitoCallback(message: string, result: any): void {
    throw new Error("Method not implemented.");
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public userService: UserLoginService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlideIntroPage');
    this.userService.isAuthenticated(this);
  }


  navHome()
  {
    this.navCtrl.setRoot(LoginPage);
    
  }
}
