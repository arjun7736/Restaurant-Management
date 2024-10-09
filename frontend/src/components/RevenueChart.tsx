import { Order } from "@/apis/apis";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface RevenueChartProps {
  orderList: Order[];
}

const RevenueChart: React.FC<RevenueChartProps> = ({ orderList }) => {

    const calculateYearlyRevenue = (orders: Order[]) => {
    const yearlyRevenue: { [key: string]: number } = {};
    
    orders.forEach((order) => {
      const date = new Date(order.date);
      const year = date.getFullYear(); 

      if (!yearlyRevenue[year]) {
        yearlyRevenue[year] = 0;
      }

      yearlyRevenue[year] += order.quantity * order.price;
    });

    const chartData = Object.entries(yearlyRevenue).map(([year, revenue]) => ({
      name: year,
      value1: revenue,
      value2: 0, 
    }));

    return chartData;
  };

  const data = calculateYearlyRevenue(orderList);

  return (
    <LineChart
      width={1100}
      height={200}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      style={{ background: "white" }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value1" stroke="#8884d8" fill="none" />
      <Line type="monotone" dataKey="value2" stroke="#82ca9d" fill="none" />
    </LineChart>
  );
};

export default RevenueChart;
