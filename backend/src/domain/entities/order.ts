export class Order {
  constructor(
    public _id: string,
    public id: string,
    public date: Date,
    public name: string,
    public quantity: number,
    public price: number,
    public location: string,
    public status:string,
    public customerName:string,
  ) {}
}
