import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'album-display',
  inputs: ['album'],
template:`
  <div>
  <input *ngIf="album.checkedOut" type="checkbox" checked (click)="addToInventory()"/>
  <input *ngIf="!album.checkedOut" type="checkbox" (click)="addToCheckout()"/>
  <label>{{album.description}}</label>
`
})

export class AlbumComponent {
 public album: Album;
   addToCheckout() {
     this.album.checkedOut = true;
          console.log(this.album);
   }
   addToInventory() {
     this.album.checkedOut = false;
          console.log(this.album);
   }
 }
