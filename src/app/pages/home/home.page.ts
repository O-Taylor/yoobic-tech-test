import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  testCharacters: any[];
  episodesArray: any[];

  constructor() {}

  ngOnInit() {
    this.getApi();
  }

  getApi() {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => (response.status === 200 ? response.json() : null))
      .then((data) => {
        if (!data) {
          return;
        }
        this.testCharacters = data.results;
      });
  }
  episodeApi() {
    fetch('https://rickandmortyapi.com/api/episode/28')
      .then((response) => (response.status === 200 ? response.json() : null))
      .then((data) => {
        if (!data) {
          return;
        }
        this.episodesArray = data.results;
      });
  }
}
