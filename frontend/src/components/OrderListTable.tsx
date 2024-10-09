import { deleteOrder, fetchOrderList, Order } from "@/apis/apis";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import clsx from "clsx";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

const OrderListTable = () => {
  const [orderList, setOrderList] = useState<Order[]>([]);

  const fetchData = async () => {
    const data = await fetchOrderList();
    setOrderList(data);
  };
  const handleDelete = async (id: string) => {
    await deleteOrder(id);
    await fetchData();
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-gray-600 mb-4">Order List</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orderList.map((order) => {
              const orderDate = new Date(order?.date);
              const formattedDate = isNaN(orderDate.getTime())
                ? "Invalid Date"
                : orderDate.toLocaleDateString();
              return (
                <TableRow key={order.id}>
                  <TableCell>{formattedDate}</TableCell>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customerName}</TableCell>
                  <TableCell>{order.name}</TableCell>
                  <TableCell>{order.price}</TableCell>
                  <TableCell>
                    <div
                      className={clsx({
                        "bg-green-300/70 rounded-xl w-20 h-7 flex items-center justify-center text-green-800 font-bold":
                          order.status === "delivered",
                        "bg-red-300/70 rounded-xl w-20 h-7 flex items-center justify-center text-red-800 font-bold":
                          order.status === "cancelled",
                        "bg-yellow-300/70 rounded-xl w-20 h-7 flex items-center justify-center text-yellow-800 font-bold":
                          order.status === "pending",
                      })}
                    >
                      {order.status}
                    </div>
                  </TableCell>
                  <AlertDialog>
                    <TableCell>
                      {" "}
                      <FaRegEdit size={20} />{" "}
                    </TableCell>
                    <TableCell>
                      <AlertDialogTrigger>
                        {" "}
                        <RiDeleteBin5Line size={20} />{" "}
                      </AlertDialogTrigger>
                    </TableCell>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete this order and remove your data from our
                          servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDelete(order._id)}
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default OrderListTable;
