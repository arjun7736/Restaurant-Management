import { toast } from "sonner";
import axios from "./intersepter";

export const fetchOrderList = async (): Promise<Order[]> => {
  return await axios
    .get("/order/get-orders")
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      toast.error(error.response.data.error.message);
    });
};

export const deleteOrder = async (id: string) => {
  await axios
    .delete(`/order/delete-order/${id}`)
    .then((data) => {
      toast.success(data.data);
    })
    .catch((error) => {
      toast.error(error.response.data.error.message);
    });
};

export const createOrder = (formData: OrderForm) => {
  return axios
    .post("/order/create-order", formData)
    .then((data) => {
      toast.success(data.data);
    })
    .catch((error) => {
      toast.error(error.response.data.error.message);
    });
};

export const getSingleData = async (id: string) => {
  return axios
    .get(`/order/get-singleData/${id}`)
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      toast.error(error.response.data.error.message);
    });
};

export const updateOrder=async(id:string,data:OrderForm)=>{
  return axios
  .put(`/order/update-order/${id}`,data)
  .then((data) => {
    toast.success(data.data);
  })
  .catch((error) => {
    toast.error(error.response.data.error.message);
  });
}

export interface OrderForm {
  name: string;
  price: number;
  quantity: number;
  customerName: string;
  location: string;
  status: string;
  id?: string;
}

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
