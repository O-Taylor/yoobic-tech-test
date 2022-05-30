import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  testCharacters: any[];

  @Input('character') character = '';

  constructor() {}

  ngOnInit() {}
}
