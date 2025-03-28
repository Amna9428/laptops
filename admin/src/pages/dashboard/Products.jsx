import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { useSelector } from "react-redux";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = useSelector((state) => state.authSlice?.token || null); // Safe check

  // Function to fetch products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/product/all");
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to delete product
  const handleDelete = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    setLoading(true);
    try {
      await axios.delete(`http://localhost:5000/api/product/delete/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Refresh product list after successful deletion
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
    setLoading(false);
  };

  const handleUpdate = (id) => {
    alert(`Update product with ID: ${id}`);
    // Implement update functionality as needed
  };

  const columns = [
    {
      name: "Image",
      selector: (row) => (
        <div className="flex items-center gap-2">
          <img
            src={row.images[0]}
            alt={row.name}
            className="w-20 h-20 rounded mb-2"
          />
        </div>
      ),
    },
    {
      name: "Name",
      selector: (row) => <div className="flex items-center gap-2">{row.name}</div>,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => `$${row.price}`,
      sortable: true,
    },
    {
      name: "Discounted Price",
      selector: (row) => `$${row.discounted_price}`,
    },
    {
      name: "In Stock",
      selector: (row) => (
        <span
          className={`px-2 py-1 text-sm rounded-full font-semibold ${
            row.instock ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
          }`}
        >
          {row.instock ? "Available" : "Out Of Stock"}
        </span>
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => handleUpdate(row._id)}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(row._id)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Del
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">All Products</h2>
      <DataTable columns={columns} data={products} pagination progressPending={loading} />
    </div>
  );
};

export default Products;
