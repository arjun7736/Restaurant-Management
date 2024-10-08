import { IOrderRepository } from "../../domain/interfaces/IOrderRepository";
import { IOrder } from "../../infra/data/models/orderModel";
import { CustomError } from "../../utils/error";

export class AddOrder {
  constructor(private orderRepo: IOrderRepository) {}

  async execute(data: IOrder) {
    const { name, quantity, price, location, status, customerName, id } = data;
    if (
      !name ||
      !quantity ||
      !price ||
      !location ||
      !status ||
      !customerName ||
      !id
    ) {
      throw new CustomError(400, "Fill all the Field");
    }
    return await this.orderRepo.create(data);
  }
}
