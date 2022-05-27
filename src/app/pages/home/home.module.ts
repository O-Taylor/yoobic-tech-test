import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CardsModule } from '../../components/cards/cards.module';

import { CounterModule } from '../../components/counter/counter.module';
import { NgxsModule } from '@ngxs/store';

@Component({
  selector: 'app-root',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CounterModule,
    CardsModule,
    NgxsModule.forRoot([], { selectorOptions: { suppressErrors: false } }),
  ],
  declarations: [HomePage],
})
export class HomePageModule {
  cards$: Observable<string>;

  constructor(private store: Store<{ cards: string }>) {
    this.cards$ = store.select('cards');
  }
}
