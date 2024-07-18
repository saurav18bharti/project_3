
import React, { useState } from 'react';
import { Pagination } from '@nextui-org/react';


interface PaginatedTableProps<T> {
  data: T[];
  itemsPerPage: number;
  renderTable: (items: T[]) => React.ReactNode;
}


function PaginatedTable<T>({ data, itemsPerPage, renderTable }: PaginatedTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col gap-4">
      {renderTable(currentItems)}
      <div className="flex justify-end">
        <Pagination
          total={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default PaginatedTable;