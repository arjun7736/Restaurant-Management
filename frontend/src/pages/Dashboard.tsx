import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Card } from "@/components/ui/card";
import OrderListTable from "@/components/OrderListTable";
import { FaCalendarAlt } from "react-icons/fa";
import { fetchOrderList, Order } from "@/apis/apis";
import PieChart from "@/components/PieChart";
import LineChart from "@/components/LineChart";
import RevenueChart from "@/components/RevenueChart";

const Dashboard = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const [orderList, setOrderList] = useState<Order[]>([]);
  const fetchData = async () => {
    const data = await fetchOrderList();
    setOrderList(data);
  };

  const amound = orderList
    ?.filter((val) => val.status == "delivered")
    .reduce((acc, val) => (acc += val.price), 0);

const totalDelivered =orderList.filter((val) => val.status == "delivered").length
  return (
    <div className="flex ">
      <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 lg:ml-64 bg-gray-200/50 min-h-screen">
        <div className="p-4">
          <Button
            className="lg:hidden text-gray-800 bg-gray-100 p-2 rounded focus:outline-none"
            onClick={toggleSidebar}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
          <NavBar />
          <div className="flex justify-between items-center my-10 ">
            <div className="flex-col justify-between items-center">
              <p className="font-bold text-2xl"> DashBoard</p>
              <p className="text-gray-500 text-sm">
                Hi Arjun Welcome Back to Foodko Admin
              </p>
            </div>

            <Card className="items-center justify-center hidden md:flex">
              <div className="flex items-center bg-white p-4 rounded-lg shadow-md max-w-sm">
                <div className="bg-blue-100 rounded-full p-2">
                  <FaCalendarAlt className="text-blue-500" size={24} />
                </div>
                <div className="ml-4">
                  <p className="text-gray-500 font-semibold">Filter Period</p>
                  <p className="text-gray-600 text-sm">
                    17 April 2020 - 21 May 2020
                  </p>
                </div>
                <div className="ml-auto text-gray-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </Card>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-600">Total Orders</h3>
              <p className="text-3xl font-bold">{orderList.length}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-600">Total Delivered</h3>
              <p className="text-3xl font-bold">
                {totalDelivered}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-600">Total Canceled</h3>
              <p className="text-3xl font-bold">
                {orderList.filter((val) => val.status == "cancelled").length}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-600">Total Revenue</h3>
              <p className="text-3xl font-bold">₹ {amound}</p>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <PieChart orderList={orderList}/>
            <LineChart orderList={orderList}/>
          </section>

          <section className="grid grid-cols-1 gap-6">
            <div className="bg-white p-4 rounded-lg shadow mb-6">
              <h3 className="text-gray-600 mb-4">Total Revenue</h3>
              <div className="flex justify-center items-center h-48 bg-gray-200 rounded-lg">
                <RevenueChart orderList={orderList} />
              </div>
            </div>
            <OrderListTable orderList={orderList} fetchData={fetchData} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
