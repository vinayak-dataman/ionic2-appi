import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { CreateaccountPage } from '../createaccount/createaccount';
import { ForgotpassowrdPage } from '../forgotpassowrd/forgotpassowrd';
import { UserLoginService } from '../../providers/userLogin.service';
import {CognitoCallback, LoggedInCallback} from "../../providers/cognito.service";
import { AddcompaniesPage } from '../addcompanies/addcompanies';
import { MycompaniesPage } from '../mycompanies/mycompanies';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements CognitoCallback, LoggedInCallback {
  loading: any;


  isLoggedInCallback(message: string, loggedIn: boolean): void {
    throw new Error("Method not implemented.");
  }


  cognitoCallback(message: string, result: any): void {
    this.loading.dismiss();
    if (message != null) { //error
      this.doAlert("Error", message);
      console.log("result: " + message);
  } else { //success
      console.log("Redirect to ControlPanelComponent");
      this.navCtrl.setRoot(MycompaniesPage);
  }
  }

  password: string;
  userEmail: string;
  public type = 'password';
  public showPass = false;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public alertCtrl: AlertController,
     public loadingCtrl: LoadingController,
     public userService: UserLoginService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



  navToSignup()
  {

    this.navCtrl.push(CreateaccountPage);

  }

  // Forgot Password link click event
  forgotPassword()
  {
    this.navCtrl.push(ForgotpassowrdPage);
    
  }


  // login button click event
  onLogin()
  {
    if(this.userEmail == null)
    {
      this.doAlert("Alert","Please Enter Email Id");
      return;
    }
    if(this.password == null){
      this.doAlert("Alert","Please Enter Email Id");
      return;
    }
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
    this.userService.authenticate(this.userEmail, this.password, this);
  }


  showPassword() {
    this.showPass = !this.showPass;
 
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }



  doAlert(title: string, message: string) {
    
            let alert = this.alertCtrl.create({
                title: title,
                subTitle: message,
                buttons: ['OK']
            });
            alert.present();
  }

}
