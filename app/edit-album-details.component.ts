import {Component} from 'angular2/core';
import {Album} from './album.model';

@Component({
  selector: 'edit-album-details',
  inputs: ['album'],
  template: `
  <div class="album-form">
    <h3>Edit description:</h3>
    <input [(ngModel)]="album.Albumname" class="col-sm-8 input-lg album-form"/>
  </div>
  `
})
export class EditAlbumDetailsComponent {
  public album: Album;
}
