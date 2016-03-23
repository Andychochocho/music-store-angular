import { Component, EventEmitter } from 'angular2/core';
import { AlbumListComponent } from './album-list.component';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  directives: [AlbumListComponent],
  template: `
    <div class="container">
      <h1> Music Store</h1>
      <album-list
      [albumList]="albums"
      (onAlbumSelect)="albumWasSelected($event)">
      </album-list>
    </div>
  `
})

export class AppComponent {
  public albums: Album[];
  constructor() {
    this.albums = [
      new Album("Mothers Milk", "Red Hot Chili Peppers", 29.99),
      new Album("Californiacation", "Red Hot Chili Peppers", 17.75),
      new Album("Stadium Arcadium", "Red Hot Chili Peppers", 42.49),
    ];
  }
  albumWasSelected(clickedAlbum: Album): void {
    console.log("parent: " + clickedAlbum);
  }
}
