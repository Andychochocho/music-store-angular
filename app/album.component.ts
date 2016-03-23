import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'album-display',
  inputs: ['album'],
template:`
  <div>
  <input *ngIf="album.done" type="checkbox" checked (click)="toggleDone(false)"/>
  <input *ngIf="!album.done" type="checkbox" (click)="toggleDone(true)"/>
  <label>{{album.description}}</label>
`
})

export class AlbumComponent {
 public album: Album;
 toggleDone(setState: boolean){
 this.album.done = setState;
 }
