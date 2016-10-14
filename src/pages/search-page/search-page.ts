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

  private searchText: string = '';

  private onSearchInput() {
    this.repository.getMovies(this.searchText)
          .then(data => {
            this.movies = data;
            console.log(data);            
          });
  }

  constructor(public navCtrl: NavController, 
    private repository: MoviesProvider) {

        this.movies = [];


    }
}
