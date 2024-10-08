import { NextFunction, Request, Response } from "express";
import { AddOrder } from "../../application/useCases/addOrder";
import { GetOrders } from "../../application/useCases/getOrders";

export class OrderController {
  constructor(private addOrder: AddOrder,private getOrder:GetOrders) {}

  async createOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const order =await this.addOrder.execute(req.body);
      res.json(order);
    } catch (error) {
      next(error);
    }
  }

  async getOrders(req:Request,res:Response,next:NextFunction){
    try {
      const orders = await this.getOrder.execute();
      res.json(orders);
    } catch (error) {
      next(error);
    }
  }

  async deleteOrder(req:Request,res:Response,next:NextFunction){
    try {
      const orders = await this.getOrder.execute();
      res.json(orders);
    } catch (error) {
      next(error);
    }
  }
}
