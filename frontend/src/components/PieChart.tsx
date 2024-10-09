import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Order } from "@/apis/apis";

Chart.register(ArcElement, Tooltip, Legend);


const PieChart = ({orderList}:{orderList:Order[]}) => {
    const totalDelivered =orderList?.filter((val) => val.status == "delivered").length
    const totalOrder =orderList?.length
    const totalCancelled =orderList?.filter((val) => val.status == "cancelled").length
    const totalRevenue =orderList
    ?.filter((val) => val.status == "delivered")
    .reduce((acc, val) => (acc += val.price), 0);
const approxRevenue = orderList.reduce((acc, val) => (acc += val.price), 0);
    const data1 = {
        labels: ["Total Delivered","Total Orders"],
        datasets: [
          {
            data: [totalDelivered,totalOrder],
            backgroundColor: ["#FF6384","#E0E0E0" ],
            hoverBackgroundColor: ["#FF6384","#D0D0D0"],
          },
        ],
      };
      
      const data2 = {
        labels: ["Total Canceled"],
        datasets: [
          {
            data: [totalCancelled,totalOrder],
            backgroundColor: ["#4BC0C0", "#9966FF"],
            hoverBackgroundColor: ["#4BC0C0", "#9966FF"],
          },
        ],
      };
      
      const data3 = {
        labels: ["Total Revenue","Approx Revenue"],
        datasets: [
          {
            data: [totalRevenue,approxRevenue],
            backgroundColor: ["#FF6384", "#C9CBCF"],
            hoverBackgroundColor: ["#FF6384", "#C9CBCF"],
          },
        ],
      };
      const options = {
        plugins: {
          legend: {
            display: false,
          },
        },
        cutout: "70%", 
      };
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-gray-600 mb-4">Pie Charts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex justify-center items-center">
            <Doughnut data={data1} options={options} />
          </div>
          <div className="flex justify-center items-center">
            <Doughnut data={data2} options={options} />
          </div>
          <div className="flex justify-center items-center">
            <Doughnut data={data3} options={options} />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default PieChart;
