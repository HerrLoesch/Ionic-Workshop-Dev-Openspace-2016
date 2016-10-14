import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'favorite-input-page.html'
})
export class FavoriteInputPage {

  title: string;
  year: string;

  cancel(){
    this.viewController.dismiss();
  }

  constructor(public navParams: NavParams, private viewController: ViewController) {

    this.title = navParams.get('Title');
    this.year = navParams.get('Year');
    
  }


}
