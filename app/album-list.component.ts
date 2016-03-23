import { Component, EventEmitter } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';
import { NewAlbumComponent } from './new-album.component';
import {DonePipe} from './done.pipe';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  outputs: ['onAlbumSelect'],
  pipes: [DonePipe],
  directives: [AlbumComponent, NewAlbumComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="inventory" selected="selected">Inventory</option>
    <option value="checkout" >Checkout</option>
  </select>
  <album-display *ngFor="#currentAlbum of albumList | checkoutInventory:checkoutInventoryFilter"
    (click)="albumClicked(currentAlbum)"
    [class.selected]="currentAlbum === selectedAlbum"
    [album]="currentAlbum">
  </album-display>
  <new-album (onSubmitNewAlbum)="createAlbum($event)"></new-album>
  `
})
export class AlbumListComponent {
  public albumList: Album[];
  public onAlbumSelect: EventEmitter<Album>;
  public selectedAlbum: Album;
  public checkoutInventoryFilter: string = "inventory";
  constructor() {
    this.onAlbumSelect = new EventEmitter();
  }
  albumClicked(clickedAlbum: Album): void {
    this.selectedAlbum = clickedAlbum;
    this.onAlbumSelect.emit(clickedAlbum);
  }
  createAlbum(description: string): void {
    this.albumList.push(
      new Album(description, this.albumList.length)
    );
  }
  onChange(menuValue) {
    this.checkoutInventoryFilter = menuValue;
  }
}
