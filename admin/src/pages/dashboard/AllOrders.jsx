import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/order/all-orders");
        setOrders(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const columns = [
    {
      name: <strong>Order ID</strong>,
      selector: (row) => row._id,
      sortable: true,
    },
    {
      name: <strong>Price</strong>,
      selector: (row) => `$${row.totalPrice}`,
      sortable: true,
    },
    {
      name: <strong>Discounted Price</strong>,
      selector: (row) => `$${row.discountedPrice}`,
      sortable: true,
    },
  ];

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2><strong>Orders List</strong></h2>
      <DataTable
        columns={columns}
        data={orders}
        pagination
        highlightOnHover
      />
    </div>
  );
};

export default AllOrders;
