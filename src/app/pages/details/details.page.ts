import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  singleCharacter: Object;

  constructor() {}

  ngOnInit() {
    this.getApi();
  }
  getApi() {
    fetch(
      'https://rickandmortyapi.com/api/character/' +
        window.location.href.split('?')[1].replace('=', '')
    )
      .then((response) => (response.status === 200 ? response.json() : null))
      .then((data) => {
        if (!data) {
          return;
        }

        this.singleCharacter = data;

        console.log('this.singleCharacter', this.singleCharacter);
      });
  }
}
