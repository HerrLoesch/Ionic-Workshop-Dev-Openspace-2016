import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesProvider {

  public getMovies(searchText: string){

    return new Promise( resolve => {
    let url= 'https://www.omdbapi.com/?s=' + searchText;

    this.http.get(url)
        .map(result => result.json())
        .subscribe(data => resolve(data.Search))
    });
  }  

  public getMovie(id: string) {
    return new Promise( resolve => {
    let url= 'https://www.omdbapi.com/?i=' + id;

    this.http.get(url)
        .map(result => result.json())
        .subscribe(data => resolve(data))
    });
  }

  constructor(public http: Http) {
  }

}
