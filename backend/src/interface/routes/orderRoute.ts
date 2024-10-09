import {Router} from "express"
import { OrderRepository } from "../../infra/data/repositories/orderRepository"
import { AddOrder } from "../../application/useCases/addOrder"
import { OrderController } from "../controllers/orderController"
import { GetOrders } from "../../application/useCases/getOrders"
import { DeleteOrder } from "../../application/useCases/deleteOrder"
import { UpdateOrder } from "../../application/useCases/updateOrder"
import { GetSingleData } from "../../application/useCases/getSingleData"
const router =Router()

const orderRepo = new OrderRepository()
const addOrder = new AddOrder(orderRepo)
const getOrder = new GetOrders(orderRepo)
const deleteOrder = new DeleteOrder(orderRepo)
const updateOrder = new UpdateOrder(orderRepo)
const singleOrder =new GetSingleData(orderRepo)
const orderConroller = new OrderController(addOrder,getOrder,deleteOrder,updateOrder,singleOrder)


router.post("/create-order",(req,res,next)=>orderConroller.createOrder(req,res,next))
router.get("/get-orders",(req,res,next)=>orderConroller.getOrders(req,res,next))
router.delete("/delete-order/:id",(req,res,next)=>orderConroller.deleteOrder(req,res,next))
router.put("/update-order/:id",(req,res,next)=>orderConroller.updateOrder(req,res,next))
router.get("/get-singleData/:id",(req,res,next)=>orderConroller.getSingleData(req,res,next))
export default router