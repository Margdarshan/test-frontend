import React, { useState } from 'react';
import useGet from '../../../core/hooks/useGetList';

const NewLatterUserList = () => {
  const { data, isLoading, isError, error } = useGet('/newsletter');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // Calculate total pages
  const totalPages = Math.ceil(data?.length / itemsPerPage);

  // Get current page data
  const currentData = data?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  // Handle page change
  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Newsletter Subscribers</h1>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border border-gray-300 text-left">Name</th>
            <th className="px-4 py-2 border border-gray-300 text-left">Email</th>
            <th className="px-4 py-2 border border-gray-300 text-left">Mobile</th>
            <th className="px-4 py-2 border border-gray-300 text-left">Classes</th>
            <th className="px-4 py-2 border border-gray-300 text-left">Created At</th>
          </tr>
        </thead>
        <tbody>
          {currentData?.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="px-4 py-2 border border-gray-300">{user.name}</td>
              <td className="px-4 py-2 border border-gray-300">{user.email}</td>
              <td className="px-4 py-2 border border-gray-300">{user.mobile}</td>
              <td className="px-4 py-2 border border-gray-300">{user.classes}</td>
              <td className="px-4 py-2 border border-gray-300">{new Date(user.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <div>
          <span className="mr-2">Page {currentPage + 1} of {totalPages}</span>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="px-2 py-1 bg-white border rounded"
          >
            {[10, 15, 20, 25, 50].map((size) => (
              <option key={size} value={size}>
                Show {size}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>


      </div>
    </div>
  );
};

export default NewLatterUserList;
