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

  async delete(id: string): Promise<string> {
     await OrderDB.findByIdAndDelete(id);
     return "Order Deleted";
  }

  async updateOrder(id: string, data: IOrder): Promise<string> {
      await OrderDB.findByIdAndUpdate(id, data);
      return "Order Updated";
  }


 async getSingleData(id: string): Promise<Order | null> {
    return await OrderDB.findById(id);
  }
}
