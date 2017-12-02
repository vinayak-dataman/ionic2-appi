import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import {CreateaccountPage} from '../pages/createaccount/createaccount';
import { SlideIntroPage } from '../pages/slide-intro/slide-intro';
import { LoginPage } from '../pages/login/login';
import { ForgotpassowrdPage } from '../pages/forgotpassowrd/forgotpassowrd';
import { StorageProvider } from '../providers/storage/storage';
import { UserLoginService } from '../providers/userLogin.service';
import { CognitoUtil, RegistrationUser } from '../providers/cognito.service';
import { AwsUtil } from '../providers/aws.service';
import { UserParametersService } from '../providers/userParameters.service';
import { EventsService } from '../providers/events.service';
import { UserRegistrationService } from '../providers/userRegistration.service';
import { ConfirmregistrationPage } from '../pages/confirmregistration/confirmregistration';
import { AddcompaniesPage } from '../pages/addcompanies/addcompanies';
import { MycompaniesPage } from '../pages/mycompanies/mycompanies';
import { GetcompaniesProvider } from '../providers/getcompanies/getcompanies';
import { HttpModule } from '@angular/http';
import { LoadcompaniesProvider } from '../providers/loadcompanies/loadcompanies';

// Declared all Modules included in app ...
@NgModule({
  declarations: [
    MyApp,
    CreateaccountPage,
    SlideIntroPage,
    LoginPage,
    ForgotpassowrdPage,
    ConfirmregistrationPage,
    AddcompaniesPage,
    MycompaniesPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  
  // Entry components ...
  entryComponents: [
    MyApp,
    CreateaccountPage,
    SlideIntroPage,
    LoginPage,
    ForgotpassowrdPage,
    ConfirmregistrationPage,
    AddcompaniesPage,
    MycompaniesPage
  ],
  //provideres used in app
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StorageProvider,
    GetcompaniesProvider,
    CognitoUtil,
    AwsUtil,
    UserLoginService,
    UserParametersService,
    UserRegistrationService,
    EventsService,
    RegistrationUser,
    GetcompaniesProvider,
    LoadcompaniesProvider
  ]
})
export class AppModule {}
