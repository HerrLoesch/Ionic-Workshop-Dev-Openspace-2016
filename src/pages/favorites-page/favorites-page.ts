import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the FavoritesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-favorites-page',
  templateUrl: 'favorites-page.html'
})
export class FavoritesPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello FavoritesPage Page');
  }

}
