import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddcompaniesPage } from '../addcompanies/addcompanies';
import { GetcompaniesProvider } from '../../providers/getcompanies/getcompanies';

/**
 * Generated class for the MycompaniesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mycompanies',
  templateUrl: 'mycompanies.html',
  
})
export class MycompaniesPage 
{
  companies: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public mycompaniesService: GetcompaniesProvider) {
 
}

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad MycompaniesPage');
   
  }


  getCompanies() {
    this.mycompaniesService.load("https://spireapiaz.pramier.com:10880/api/v1/companies/").then(data => {
      // fetch response ...
      this.companies = data.companies;
      
    }).catch((error) => {
      // show error ...
      alert('Error getting companies'+JSON.stringify(error));
      });;
}

  // Redirect to Add Company page...
  onAddCompanies()
  {
    this.navCtrl.push(AddcompaniesPage)
  }
}
