import { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

const FeedbackList = () => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/all/feedback")
      .then((response) => {
        console.log(response.data.feedbacks);
        setFeedback(response.data.feedbacks);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      name: <strong>Name</strong>,
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: <strong>Email</strong>,
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: <strong>Subject</strong>,
      selector: (row) => row.subject,
      sortable: true,
    },
    {
      name: <strong>Message</strong>,
      selector: (row) => row.message,
      wrap: true,
    },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2><strong>Feedback List</strong></h2>
      <DataTable
        columns={columns}
        data={feedback}
        pagination
        highlightOnHover
        striped
      />
    </div>
  );
};

export default FeedbackList;