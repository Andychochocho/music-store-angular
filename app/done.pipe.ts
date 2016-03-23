import { Pipe, PipeTransform } from 'angular2/core';
import {Album} from './album.model';

@Pipe ({
  name: "checkoutInventory",
  pure: false
})

export class DonePipe implements PipeTransform {
  transform(input: Album[], args) {
    // console.log('selected album  ', args[1]);
    var albumCheckout = args[0];
    // console.log(albumCheckout);
    if(albumCheckout === "checkout") {
      return input.filter((album) => {
        return album.checkedOut;
      });
    }
    else {
      return input.filter((album) => {
        return album.checkedOut === false;
      });
    }
  }
}
