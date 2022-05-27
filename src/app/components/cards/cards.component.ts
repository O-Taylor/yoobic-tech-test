import { Component, Inject, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CardsState, CallApi } from './store';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Select(CardsState.cards) cards$: Observable<any>;
  @Select(CardsState.gender) gender$: Observable<any>;

  constructor(private store: Store, private cards: CardsState) {}

  ngOnInit() {
    this.store.dispatch(new CallApi(10));
  }
}
