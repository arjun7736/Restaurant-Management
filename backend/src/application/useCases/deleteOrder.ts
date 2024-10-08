import { IOrderRepository } from "../../domain/interfaces/IOrderRepository";

export class DeleteOrder{
    constructor(private orderRepo:IOrderRepository){}

    async execute(id:string){
        return await this.orderRepo.delete(id)
    }
}