import { Order } from "../../../domain/entities/order";
import { IOrderRepository } from "../../../domain/interfaces/IOrderRepository";
import { IOrder } from "../models/orderModel";
import OrderDB from "../models/orderModel";

export class OrderRepository implements IOrderRepository {
  async create(data: IOrder): Promise<string> {
    await OrderDB.create(data);
    return "Order Created";
  }

  async findAll(): Promise<Order[]> {
    return await OrderDB.find();
  }
}
