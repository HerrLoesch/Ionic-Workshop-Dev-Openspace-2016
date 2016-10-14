import { Component, OnInit } from '@angular/core';
import { MoviesProvider } from '../../providers/movies-provider';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-details-page',
  templateUrl: 'details-page.html',
  providers: [MoviesProvider]
})
export class DetailsPage implements OnInit {

  private movie: any = {};

  ngOnInit() {
      let id = this.params.get('imdbID');

        this.repository.getMovie(id)
          .then(data => {
            this.movie = data;
            console.log(data);            
          });
  }

  constructor(public params: NavParams, 
  private repository:MoviesProvider) {
  }

  ionViewDidLoad() {
    console.log('Hello DetailsPage Page');
  }

}
