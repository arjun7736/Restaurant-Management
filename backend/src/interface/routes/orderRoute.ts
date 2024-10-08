import {Router} from "express"
import { OrderRepository } from "../../infra/data/repositories/orderRepository"
import { AddOrder } from "../../application/useCases/addOrder"
import { OrderController } from "../controllers/orderController"
const router =Router()

const orderRepo = new OrderRepository()
const addOrder = new AddOrder(orderRepo)
const orderConroller = new OrderController(addOrder)


router.post("/create-order",(req,res,next)=>orderConroller.createOrder(req,res,next))


export default router