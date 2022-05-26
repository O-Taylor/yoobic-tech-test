import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import {AppStoreModule} from 'src/store/AppStoreModule';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { cardsReducer } from "../store/cards/cards.reducers"


@NgModule({
  declarations: [AppComponent,
],
  entryComponents: [],
  imports: [StoreModule.forRoot({ cards: cardsReducer }), BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
