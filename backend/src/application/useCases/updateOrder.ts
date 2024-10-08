import { IOrderRepository } from "../../domain/interfaces/IOrderRepository"
import { IOrder } from "../../infra/data/models/orderModel"

export class UpdateOrder{
    constructor(private orderRepo:IOrderRepository){}

    async execute(id:string,data:IOrder):Promise<string>{
        const order = await this.orderRepo.updateOrder(id,data)
        return order
    }
}