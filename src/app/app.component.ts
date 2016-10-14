import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { SearchPage } from '../pages/search-page/search-page';
import { FavoritesPage } from '../pages/favorites-page/favorites-page';
import { AboutPage } from '../pages/about-page/about-page';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  searchRoot = SearchPage;
  favoritesRoot = FavoritesPage;
  aboutRoot = AboutPage;  

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
