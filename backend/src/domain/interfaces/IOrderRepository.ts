import { IOrder } from "../../infra/data/models/orderModel";

export interface IOrderRepository{
    create(data:IOrder):Promise<string>
    
}