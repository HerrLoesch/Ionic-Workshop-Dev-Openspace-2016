import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: 'favorite-input-page.html'
})
export class FavoriteInputPage {

  title: string;
  year: string;

  formData: FormGroup;

  cancel(){
    this.viewController.dismiss();
  }

  save() {
    console.log(this.formData.value.commentsArea);
    
    this.viewController.dismiss(); 
   }

  constructor(public navParams: NavParams, 
  private viewController: ViewController,
  private formBuilder: FormBuilder) {

    this.title = navParams.get('Title');
    this.year = navParams.get('Year');
    
    this.formData = this.formBuilder.group(
        {commentsArea: ['', Validators.minLength(2)]}
    );

  }


}
