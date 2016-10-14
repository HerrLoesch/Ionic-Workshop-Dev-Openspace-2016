import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies-provider';
import { DetailsPage } from '../details-page/details-page';
import { FavoriteInputPage } from '../favorite-input-page/favorite-input-page';


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

  private showDetails(id: string){
    this.navCtrl.push(DetailsPage, { 'imdbID': id});
  }

  private addFavorite(movie: any) {
    let modal = this.modalController.create(FavoriteInputPage, movie);
    modal.present();
  }

  constructor(public navCtrl: NavController, 
    private repository: MoviesProvider,
    private modalController: ModalController) {
        this.movies = [];
          }
}
