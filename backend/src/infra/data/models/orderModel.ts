import { Document } from "mongoose";

export interface IOrder extends Document {
  id: string;
  date: Date;
  name: string;
  order: [
    {
      productName: string;
      quantity: number;
      price: number;
    }
  ];
  total: number;
  location: string;
  status: string;
}
