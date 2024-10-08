import { IOrder } from "../../infra/data/models/orderModel";
import { Order } from "../entities/order";

export interface IOrderRepository{
    create(data:IOrder):Promise<string>
    findAll():Promise<Order[]>
}