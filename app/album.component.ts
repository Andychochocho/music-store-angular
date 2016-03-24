import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';
import { AppComponent } from './app.component';
import { CartTotalComponent } from './cart-total.component'

@Component({
  selector: 'album-display',
  inputs: ['album'],
template:`
  <div>
  <input *ngIf="album.checkedOut" type="checkbox" checked (click)="addToInventory()"/>
  <input *ngIf="!album.checkedOut" type="checkbox" (click)="addToCheckout()"/>

   <input *ngIf="album.cart" type="checkbox" checked
   (click)="addToTotalPrice()"/>

  <label>{{album.description}}, {{album.price}}</label>
  `
})

export class AlbumComponent {
 public album: Album;
   addToCheckout() {
     this.album.totalPrice += this.album.price;
     this.album.checkedOut = true;
        console.log(this.album);
   }
   addToInventory() {
     this.album.checkedOut = false;
        console.log(this.album);
   }
   addToTotalPrice() {
     this.album.cart = true;
      console.log(this.album.cart)
   }
 }

 //somehow change cart from being false to true
