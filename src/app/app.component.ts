import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/folder/Inbox', icon: 'image' },
    { title: 'Photos', url: '/folder/Outbox', icon: 'image' },
    { title: 'Availible Missions', url: '/folder/Favorites', icon: 'image' },
    { title: 'Archived', url: '/folder/Archived', icon: 'image' },
    { title: 'Trash', url: '/folder/Trash', icon: 'image' },
    { title: 'Spam', url: '/folder/Spam', icon: 'image' },
  ];

  constructor() {}
}
