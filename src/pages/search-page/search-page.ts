import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies-provider';

@Component({
  selector: 'page-search-page',
  templateUrl: 'search-page.html',
  providers: [MoviesProvider]
})
export class SearchPage {

  public movies: any;

  constructor(public navCtrl: NavController, 
    private repository: MoviesProvider) {

        this.movies = this.repository.getMovies("jo");

    }
}
