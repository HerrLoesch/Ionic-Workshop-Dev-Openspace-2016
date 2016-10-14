import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies-provider';

@Component({
  selector: 'page-details-page',
  templateUrl: 'details-page.html',
  providers: [MoviesProvider]
})
export class DetailsPage implements OnInit {

  private movie: any = {};

  ngOnInit() {

        this.repository.getMovie("tt1285016")
          .then(data => {
            this.movie = data;
            console.log(data);            
          });
  }

  constructor(public navCtrl: NavController, private repository:MoviesProvider) {
  }

  ionViewDidLoad() {
    console.log('Hello DetailsPage Page');
  }

}
