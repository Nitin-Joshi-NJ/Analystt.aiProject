import React, { useState } from 'react';

const itemsPerPage = 5;

const SampleData = [
  // Your sample data
  // { id: 1, name: 'Item 1' },
  // { id: 2, name: 'Item 2' },
  // ...
];

const PaginatedList = (data) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data based on the current page
  const currentItems = SampleData.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <h1>Paginated List</h1>
      <ul>
        {currentItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <div>
        {/* Pagination controls */}
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>

        <span>{`Page ${currentPage}`}</span>

        <button
          disabled={endIndex >= data.length}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedList;
