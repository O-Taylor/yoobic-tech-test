import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
{title: 'Dashboard', url: '/pages/home', icon: 'image'},
{title: 'Photos', url: '/pages/home', icon: 'image'},
{title: 'Availible Missions', url: '/pages/home', icon: 'image'},
{title: 'My Missions', url: '/pages/home', icon: 'image'},
{title: 'Chat', url: '/pages/home', icon: 'image'},

  ];

  constructor() {}
}
