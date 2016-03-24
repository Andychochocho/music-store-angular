export class Album {
  public checkedOut: boolean = false;
  public cart: boolean = false;
  constructor(public description: string, public price: number, public totalPrice: number = 0) {
  }
}
