import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';

const SalesRevenueAreaChart = () => {
  const [salesData, setSalesData] = useState([]);
  const [revenueData, setRevenueData] = useState([]);
  const token = useSelector(state => state.authSlice.token);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/totalSalesRevenue", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        console.log(response.data);
        setSalesData(response.data.salesData);
        setRevenueData(response.data.revenueData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCardData();
  }, [token]);

  const options = {
    chart: {
      type: 'area',
      height: 350,
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    title: {
      text: 'Monthly Sales & Revenue',
      align: 'left',
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#333',
      },
    },
    xaxis: {
      categories: months,
      title: {
        text: 'Month',
        style: {
          color: '#666',
        },
      },
    },
    yaxis: {
      title: {
        text: 'Amount ($)',
        style: {
          color: '#666',
        },
      },
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        },
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$' + val.toLocaleString();
        },
      },
    },
    legend: {
      position: 'top',
      labels: {
        colors: '#444',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.8,
        stops: [0, 90, 100],
      },
    },
    colors: ['#FF5733', '#C70039'], // Updated colors
  };

  const series = [
    {
      name: 'Sales',
      data: salesData,
    },
    {
      name: 'Revenue',
      data: revenueData,
    },
  ];

  return (
    <div className="sales-revenue-area-chart bg-gray-100 shadow-lg rounded-xl p-8 border border-gray-300">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={330}
      />
    </div>
  );
};

export default SalesRevenueAreaChart;
