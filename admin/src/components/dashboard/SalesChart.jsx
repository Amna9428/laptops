import React from "react";
import Chart from "react-apexcharts";

const SalesChart = () => {
  const salesData = [
    { state: "Washington", sales: 400, growth: 4 },
    { state: "North Dakota", sales: 200.12, growth: 4 },
    { state: "Wisconsin", sales: 720, growth: 4 },
    { state: "California", sales: 850, growth: 6 },
    { state: "Texas", sales: 630, growth: 5 },
  ];

  const chartOptions = {
    chart: {
      type: "bar",
      height: 250,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%",
        endingShape: "rounded",
      },
    },
    colors: ["#1E88E5"],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: salesData.map((data) => data.state),
    },
    yaxis: {
      title: {
        text: "Sales ($)"
      }
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      y: {
        formatter: (val) => `$${val.toFixed(2)}`,
      },
    },
  };

  const chartSeries = [
    {
      name: "Sales ($)",
      data: salesData.map((data) => data.sales),
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Sales Performance by State
      </h2>
      <Chart options={chartOptions} series={chartSeries} type="bar" height={250} />
      <div className="mt-6">
        {salesData.map((data, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b last:border-none">
            <span className="text-gray-700 font-medium">{data.state}</span>
            <span className="text-green-600 font-bold">${data.sales.toFixed(2)} ({data.growth}%) ↑</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesChart;