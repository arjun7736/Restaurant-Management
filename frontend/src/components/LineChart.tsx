import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { Button } from "./ui/button";
import { Order } from "@/apis/apis";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const LineChart = ({ orderList }: { orderList: Order[] }) => {
  const [monthlySalesArray, setMonthlySalesArray] = useState(Array(12).fill(0));

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(orderList);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");
    XLSX.writeFile(workbook, "order_list.xlsx");
  };

  const getMonthlySales = (orderList: Order[]) => {
    const monthlySales: { [key: string]: number } = {};

    orderList.forEach((order) => {
      const date = new Date(order.date);
      const month = date.toLocaleString("default", { month: "long" });
      const year = date.getFullYear();
      const monthYear = `${month} ${year}`;

      if (!monthlySales[monthYear]) {
        monthlySales[monthYear] = 0;
      }

      monthlySales[monthYear] += order.quantity;
    });

    return monthlySales;
  };

  useEffect(() => {
    const salesData = getMonthlySales(orderList);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const salesArray = Array(12).fill(0); 

    for (const month of monthNames) {
      const monthYearKey = `${month} ${new Date().getFullYear()}`;
      if (salesData[monthYearKey]) {
        const monthIndex = monthNames.indexOf(month);
        salesArray[monthIndex] = salesData[monthYearKey];
      }
    }

    setMonthlySalesArray(salesArray); 
  }, [orderList]);

  const areaData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales 2024",
        data: monthlySalesArray,
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.4,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointBorderColor: "#fff",
      },
    ],
  };

  const areaOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between">
        <h3 className="text-gray-600 mb-4">Sales Over Time (Area Chart)</h3>
        <Button
          onClick={exportToExcel}
          className="bg-white text-blue-500 w-28 h-10 shadow-none border-2 border-blue-500 rounded-xl hover:bg-white"
        >
          Save Report
        </Button>
      </div>
      <div className="h-80">
        <Line data={areaData} options={areaOptions} />
      </div>
    </div>
  );
};

export default LineChart;
