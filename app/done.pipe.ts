import { Pipe, PipeTransform } from 'angular2/core';
import {Album} from './album.model';

@Pipe ({
  name: "done",
  pure: false
})

export class DonePipe implements PipeTransform {
  transform(input: Album[], args) {
    console.log('selected album ', args[1]);
    var desiredDoneState = args[0];
    if(desiredDoneState === "done") {
      return input.filter((album) => {
        return !album.done;
      });
    } else {
      return input;
    }
  }
}
