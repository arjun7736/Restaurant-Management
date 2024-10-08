import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Menu, X } from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
            <Card className="flex items-center justify-center">
              <div className="flex w-8 h-8 bg-blue-200 items-center justify-center rounded-xl">
                <Calendar height={18} />
              </div>
              <div>
                <p>Filter Period</p>
                <p>17 April 2024 - 31 Dec 2024</p>
              </div>
            </Card>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-600">Total Orders</h3>
              <p className="text-3xl font-bold">75</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-600">Total Delivered</h3>
              <p className="text-3xl font-bold">357</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-600">Total Canceled</h3>
              <p className="text-3xl font-bold">65</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-600">Total Revenue</h3>
              <p className="text-3xl font-bold">$128</p>
            </div>
          </section>

          {/* Charts and Reports Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-600 mb-4">Pie Chart</h3>
              {/* Placeholder for pie chart */}
              <div className="flex justify-center items-center h-48 bg-gray-200 rounded-lg">
                Pie Chart Component
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-600 mb-4">Chart Order</h3>
              {/* Placeholder for line chart */}
              <div className="flex justify-center items-center h-48 bg-gray-200 rounded-lg">
                Line Chart Component
              </div>
            </div>
          </section>

          {/* Total Revenue and Order List Section */}
          <section className="grid grid-cols-1 gap-6">
            <div className="bg-white p-4 rounded-lg shadow mb-6">
              <h3 className="text-gray-600 mb-4">Total Revenue</h3>
              {/* Placeholder for revenue chart */}
              <div className="flex justify-center items-center h-48 bg-gray-200 rounded-lg">
                Revenue Chart Component
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-600 mb-4">Order List</h3>
              <table className="w-full table-auto text-left">
                <thead>
                  <tr className="text-gray-500">
                    <th className="py-2">Date</th>
                    <th className="py-2">Order ID</th>
                    <th className="py-2">Customer</th>
                    <th className="py-2">Product</th>
                    <th className="py-2">Price</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2">23/08/24</td>
                    <td className="py-2">#975121</td>
                    <td className="py-2">John Doe</td>
                    <td className="py-2">Pizza</td>
                    <td className="py-2">$20</td>
                    <td className="py-2 text-green-500">Delivered</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
