import {Router} from "express"
import { OrderRepository } from "../../infra/data/repositories/orderRepository"
import { AddOrder } from "../../application/useCases/addOrder"
import { OrderController } from "../controllers/orderController"
import { GetOrders } from "../../application/useCases/getOrders"
const router =Router()

const orderRepo = new OrderRepository()
const addOrder = new AddOrder(orderRepo)
const getOrder = new GetOrders(orderRepo)
const orderConroller = new OrderController(addOrder,getOrder)


router.post("/create-order",(req,res,next)=>orderConroller.createOrder(req,res,next))
router.get("/get-orders",(req,res,next)=>orderConroller.getOrders(req,res,next))
router.delete("/delete-order",(req,res,next)=>orderConroller.deleteOrder(req,res,next))
export default router