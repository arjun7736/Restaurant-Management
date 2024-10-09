import { NextFunction, Request, Response } from "express";
import { AddOrder } from "../../application/useCases/addOrder";
import { GetOrders } from "../../application/useCases/getOrders";
import { DeleteOrder } from "../../application/useCases/deleteOrder";
import { UpdateOrder } from "../../application/useCases/updateOrder";
import { GetSingleData } from "../../application/useCases/getSingleData";

export class OrderController {
  constructor(
    private addOrder: AddOrder,
    private getOrder: GetOrders,
    private deleteOrd: DeleteOrder,
    private update: UpdateOrder,
    private singleOrder:GetSingleData
  ) {}

  async createOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const order = await this.addOrder.execute(req.body);
      res.json(order);
    } catch (error) {
      next(error);
    }
  }

  async getOrders(req: Request, res: Response, next: NextFunction) {
    try {
      const orders = await this.getOrder.execute();
      res.json(orders);
    } catch (error) {
      next(error);
    }
  }

  async deleteOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const orders = await this.deleteOrd.execute(id);
      res.json(orders);
    } catch (error) {
      next(error);
    }
  }

  async updateOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const update = await this.update.execute(id, req.body);
      res.json(update)
    } catch (error) {
      next(error);
    }
  }

  async getSingleData(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const order = await this.singleOrder.execute(id)
      res.json(order);
    } catch (error) {
      next(error);
    }
  }
}
