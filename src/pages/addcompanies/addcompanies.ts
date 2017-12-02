import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { LoadcompaniesProvider } from '../../providers/loadcompanies/loadcompanies';
import { GetcompaniesProvider } from '../../providers/getcompanies/getcompanies';

/**
 * Generated class for the AddcompaniesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addcompanies',
  templateUrl: 'addcompanies.html',
})

export class AddcompaniesPage {

  companies: string[];
  companyApiUrl: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menuCtrl: MenuController, public loadcomapnies: GetcompaniesProvider) 
    {
    
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddcompaniesPage');
  }

onBack()
{
  this.navCtrl.pop();
}

// Add Company from url 
  loadCompanies()
  {
    if(this.companyApiUrl == null)
    {
      alert("Please Enter Company Api Url");
    }
    else
    {
      this.loadcomapnies.load(this.companyApiUrl).then(data => {
        this.companies = data.companies;
        alert(JSON.stringify(this.companies));
      
      }).catch((error) => 
      {
        alert('Error getting companies'+JSON.stringify(error));
        
      });
    }
  }
}
