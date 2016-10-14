import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { DetailsPage } from '../pages/details-page/details-page';
import { SearchPage } from '../pages/search-page/search-page';

@NgModule({
  declarations: [
    MyApp,
    DetailsPage,
    SearchPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DetailsPage,
    SearchPage
  ],
  providers: []
})
export class AppModule {}
