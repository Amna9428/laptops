import React from "react";
import DataTable from "react-data-table-component";

const topLaptops = [
  { id: 1, name: "MacBook Pro 16 M3", sales: "$400,000", orders: "150,000", price: "$2499" },
  { id: 2, name: "Dell XPS 15", sales: "$350,000", orders: "130,000", price: "$1899" },
  { id: 3, name: "Lenovo ThinkPad X1 Carbon", sales: "$300,000", orders: "120,000", price: "$1799" },
  { id: 4, name: "ASUS ROG Zephyrus G14", sales: "$250,000", orders: "110,000", price: "$1599" },
  { id: 5, name: "HP Spectre x360", sales: "$200,000", orders: "100,000", price: "$1499" },
  { id: 6, name: "Razer Blade 15", sales: "$180,000", orders: "95,000", price: "$2099" },
  { id: 7, name: "Acer Predator Helios 300", sales: "$170,000", orders: "90,000", price: "$1399" },
  { id: 8, name: "Microsoft Surface Laptop 5", sales: "$160,000", orders: "85,000", price: "$1299" },
  { id: 9, name: "LG Gram 17", sales: "$140,000", orders: "80,000", price: "$1499" },
];

const columns = [
  {
    name: "Laptop",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Sales",
    selector: (row) => row.sales,
    sortable: true,
  },
  {
    name: "Orders",
    selector: (row) => row.orders,
    sortable: true,
  },
  {
    name: "Price",
    selector: (row) => row.price,
    sortable: true,
  },
];

const TopLaptopsTable = () => {
  return (
    <div>
      <h2>Top Laptop Products</h2>
      <DataTable
        columns={columns}
        data={topLaptops}
        pagination={false}
        highlightOnHover
      />
    </div>
  );
};

export default TopLaptopsTable;
