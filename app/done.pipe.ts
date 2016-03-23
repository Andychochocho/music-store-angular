import { Pipe, PipeTransform } from 'angular2/core';
import {Album } from './ablum.model';

@Pipe ({
  name: "done",
  pure: true
})

export class DonePipe implements PipeTransform {
  transform(input: Album[], args) {
    console.log('selected album ', args[1]);
    var desiredDoneState = args[0];
    if(desiredDoneState === "done") {
      return input.filter((task) => {
        return !album.done;
      });
    } else {
      return input;
    }
  }
}
