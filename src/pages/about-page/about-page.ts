import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the AboutPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-about-page',
  templateUrl: 'about-page.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AboutPage Page');
  }

}
