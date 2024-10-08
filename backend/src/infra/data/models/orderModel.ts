import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export interface IOrder extends Document {
  id: string;
  date: Date;
  name: string;
  quantity: number;
  price: number;
  location: string;
  status: string;
  customerName: string;
}


const OrderSchema:Schema = new Schema({
    id:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now()
    },
    name:{
        type:String,
    },
    quantity:{
        type:Number,
    },
    price:{
        type:Number,
    },
    location:{
        type:String,
    },
    status:{
        type:String,
        enums:["pending","delivered","approved"],
    },
    customerName:{
        type:String,
    }
})
export default mongoose.model<IOrder>("Order",OrderSchema)