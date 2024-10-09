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
import { Button } from "./ui/button";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import AddOrder from "./AddOrder";
import EditOrder from "./EditOrder";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  const [id, setId] = useState("");
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const fetchId = async (id: string) => {
    setEditOpen(!isEditOpen);
    setId(id);
  };
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="w-full flex justify-between items-center">
          <h3 className="text-gray-600 mb-4 font-bold">Order List</h3>
          <Button
            onClick={toggleModal}
            variant={"ghost"}
            className="bg-green-300/70 text-green-500 hover:text-green-500 rounded-xl"
          >
            <MdOutlinePlaylistAdd size={20} className="mr-1" /> Add Order
          </Button>
        </div>
        {orderList.length == 0 ? (
          <div className="flex items-center justify-center">
            No Orders Available
          </div>
        ) : (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Location</TableHead>
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
                      <TableCell>#{order.id}</TableCell>
                      <TableCell>{order.customerName}</TableCell>
                      <TableCell>{order.name}</TableCell>
                      <TableCell>{order.price}</TableCell>
                      <TableCell>{order.quantity}</TableCell>
                      <TableCell>{order.location}</TableCell>
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
                          <FaRegEdit
                            size={20}
                            className="hover:cursor-pointer"
                            onClick={() => fetchId(order._id)}
                          />{" "}
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
                              This action cannot be undone. This will
                              permanently delete this order and remove your data
                              from our servers.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Discard</AlertDialogCancel>
                            <AlertDialogAction
                              className="bg-red-500 hover:bg-red-600 text-white"
                              onClick={() => handleDelete(order._id)}
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </>
        )}
      </div>
      <AddOrder
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        fetchData={fetchData}
      />
      <EditOrder
        setEditOpen={setEditOpen}
        isEditOpen={isEditOpen}
        id={id}
        setId={setId}
        fetchData={fetchData}
      />
    </>
  );
};

export default OrderListTable;
