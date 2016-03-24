import { Component } from 'angular2/core';
import { Album } from './album.model';

@Component ({
  selector: 'cart-total',
  inputs: ['albumList'],
  template: `
  <h3> Total amount: $ {{  totalPrice()  }}</h3>
  `
})

export class CartTotalComponent {
  public albumList: Album[];

  totalPrice() {
    var total = 0;
    for(var i=0; i < this.albumList.length; i++) {
      if(this.albumList[i].cart === true) {
        total += this.albumList[i].price;
      }
    }

    console.log(total);
    return total;
  }
}
