import { IOrderRepository } from "../../domain/interfaces/IOrderRepository";

export class GetSingleData{
    constructor(private orderRepo:IOrderRepository){}

    async execute(id:string){
        return await this.orderRepo.getSingleData(id)
    }
}