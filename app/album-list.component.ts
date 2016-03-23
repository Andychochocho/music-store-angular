import { Component, EventEmitter } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';
import { EditAlbumDetailsComponent } from './edit-album-details.component';
import { NewAlbumComponent } from './new-album.component';
import {DonePipe} from './done.pipe';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  outputs: ['onAlbumSelect'],
  pipes: [DonePipe],
  directives: [AlbumComponent, EditAlbumDetailsComponent, NewAlbumComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all">Show All</option>
    <option value="done">Show Done</option>
    <option value="notDone" selected="selected">Show Not Done</option>
  </select>
  <album-display *ngFor="#currentAlbum of albumList | done:filterDone"
    (click)="albumClicked(currentAlbum)"
    [class.selected]="currentAlbum === selectedAlbum"
    [album]="currentAlbum">
  </album-display>
  <edit-album-details *ngIf="selectedAlbum" [album]="selectedAlbum">
  </edit-album-details>
  <new-album (onSubmitNewAlbum)="createAlbum($event)"></new-album>
  `
})
export class AlbumListComponent {
  public albumList: Album[];
  public onAlbumSelect: EventEmitter<Album>;
  public selectedAlbum: Album;
  public filterDone: string = "notDone";
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
  onChange(filterOption) {
    this.filterDone = filterOption;
  }
}
