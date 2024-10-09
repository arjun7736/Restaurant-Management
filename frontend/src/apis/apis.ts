import { toast } from "sonner";
import axios from "./intersepter";

export const fetchOrderList = async (): Promise<Order[]> => {
  return await axios
    .get("/order/get-orders")
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteOrder = async (id:string) => {
   await axios
    .delete(`/order/delete-order/${id}`)
    .then((data) => {
      toast.success(data.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export interface Order {
  _id: string;
  id: string;
  date: Date;
  name: string;
  quantity: number;
  price: number;
  location: string;
  status: string;
  customerName: string;
}
