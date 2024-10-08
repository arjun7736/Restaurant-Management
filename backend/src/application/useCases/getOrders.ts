import { IOrderRepository } from "../../domain/interfaces/IOrderRepository";

export class GetOrders{
    constructor(private orderRepo:IOrderRepository){}

    async execute(){
        return await this.orderRepo.findAll()
    }
}