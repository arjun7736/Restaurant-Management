import { NextFunction, Request, Response } from "express";
import { AddOrder } from "../../application/useCases/addOrder";

export class OrderController {
  constructor(private addOrder: AddOrder) {}

  async createOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const order =await this.addOrder.execute(req.body);
      res.json(order);
    } catch (error) {
      next(error);
    }
  }
}
