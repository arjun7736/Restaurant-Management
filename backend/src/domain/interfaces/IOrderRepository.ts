import { IOrder } from "../../infra/data/models/orderModel";
import { Order } from "../entities/order";

export interface IOrderRepository{
    create(data:IOrder):Promise<string>
    findAll():Promise<Order[]>
    delete(id:string):Promise<string|null>
    updateOrder(id:string,data:IOrder):Promise<string>
    getSingleData(id:string):Promise<Order|null>
}