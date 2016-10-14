import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { DetailsPage } from '../pages/details-page/details-page';
import { SearchPage } from '../pages/search-page/search-page';
import { FavoritesPage } from '../pages/favorites-page/favorites-page';
import { AboutPage } from '../pages/about-page/about-page';
import { FavoriteInputPage } from '../pages/favorite-input-page/favorite-input-page';



@NgModule({
  declarations: [
    MyApp,
    DetailsPage,
    SearchPage,
    FavoritesPage,
    AboutPage,
    FavoriteInputPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DetailsPage,
    SearchPage,
    FavoritesPage,
    AboutPage,
    FavoriteInputPage
  ],
  providers: []
})
export class AppModule {}
