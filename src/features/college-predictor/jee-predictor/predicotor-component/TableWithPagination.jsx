/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTable } from 'react-table';
import CustomDialog from './MoreDetailsModel';
import InstitueCell from './InstitueCell';
import ProbabiltyCell from './ProbabiltyCell';
import PromotionMentorship from './PromotionMentorship';

const TableWithPagination = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const columns = React.useMemo(
    () => [
      {
        Header: 'Institute & Gender',
        accessor: 'Institute',
        Cell: ({ row }) => (
          <InstitueCell gender={row.original.Gender} institueName={row.original.Institute} />
        ),
      },

      {
        Header: 'Quota',
        accessor: 'Quota',
        Cell: ({ value }) => (
          <span>
            {value === null || value === undefined ? 'NA' : value}
          </span>
        ),
      },
      {
        Header: 'Closing Rank',
        accessor: 'Closing_2025_5',
        Cell: ({ value }) => (
          <span>
            {value === null || value === undefined ? 'NA' : value}
          </span>
        ),
      },
      {
        Header: 'Branch',
        accessor: 'Branch',
        Cell: ({ value }) => (
          <span>
            {value === null || value === undefined ? 'NA' : value}
          </span>
        ),
      },
      {
        Header: 'Program Details',
        accessor: "Program_Details",
        Cell: ({ value }) => (
          <span>
            {value === null || value === undefined ? 'NA' : value}
          </span>
        ),
      },
      {
        Header: 'Probability',
        accessor: 'Probability',
        Cell: ({ value }) => (
          <span>
            <ProbabiltyCell value={value} isMobile={0} />
          </span>
        ),
      },
      {
        Header: 'Action',
        accessor: 'action',
        Cell: ({ row }) => (
          <button
            onClick={() => handleClickOpen(row.original)}
            className="px-4 py-2 border rounded-md border-indigo-600 text-indigo-600 hover:bg-indigo-100 whitespace-nowrap"
          >
            More Details
          </button>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  const handleClickOpen = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  return (
    <div>
      <div className="overflow-x-auto border border-gray-200 shadow-md rounded-lg">
        <table {...getTableProps()} className="min-w-full bg-white">
          <thead className="bg-gray-200 py-3">
            {headerGroups.map((headerGroup) => (
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()} className=" border-black bg-[#D1D1D1]">
                {headerGroup.headers.map((column) => (
                  <th
                    // key={column.id}
                    // {...column.getHeaderProps()}
                    key={column.id}
                    {...column.getHeaderProps()}
                    className="px-4 py-2 text-center font-medium border-l border-black first:border-l-0 text-[#252525] font-inter text-[17px] leading-[24px]"
                  >
                    {column.render('Header')}
                  </th>

                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.length > 0 ? (
              rows.map((row, index) => {
                prepareRow(row);
                return (
                  <React.Fragment key={row.id}>
                    <tr {...row.getRowProps()} className="border-b border-black hover:bg-gray-50">
                      {row.cells.map((cell) => (
                        <td
                          key={cell.column.id}
                          {...cell.getCellProps()}
                          // key={cell.column.id}
                          // {...cell.getCellProps()}
                          className="px-4 py-2 text-center border-l border-black first:border-l-0 first:text-start text-gray-600 font-inter text-[17px] font-normal leading-[24px]"
                          style={{ color: '#252525' }}
                        >
                          {cell.render('Cell')}
                        </td>
                      ))}
                    </tr>

                    {index === 1 && (
                      <tr className="border-b border-black hover:bg-gray-50">
                        <td colSpan={columns.length}>
                          <PromotionMentorship />
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })
            ) : (
              <tr>
                <td colSpan={columns.length} className="text-center py-4">
                  No data available.
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
      <CustomDialog open={open} handleClose={handleClose} selectedRow={selectedRow} />
    </div>
  );
};

TableWithPagination.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      Institute: PropTypes.string.isRequired,
      Quota: PropTypes.string.isRequired,
      Category: PropTypes.string.isRequired,
      Gender: PropTypes.string.isRequired,
      Closing_2022_1: PropTypes.number,
      Closing_2022_2: PropTypes.number,
      Closing_2022_3: PropTypes.number,
      Closing_2022_4: PropTypes.number,
      Closing_2022_5: PropTypes.number,
      Closing_2022_6: PropTypes.number,
      Closing_2023_1: PropTypes.number,
      Closing_2023_2: PropTypes.number,
      Closing_2023_3: PropTypes.number,
      Closing_2023_4: PropTypes.number,
      Closing_2023_5: PropTypes.number,
      Closing_2023_6: PropTypes.number,
      Closing_2024_1: PropTypes.number,
      Closing_2024_2: PropTypes.number,
      Closing_2024_3: PropTypes.number,
      Closing_2024_4: PropTypes.number,
      Closing_2024_5: PropTypes.number,
      Closing_2025_1: PropTypes.number,
      Closing_2025_2: PropTypes.number,
      Closing_2025_3: PropTypes.number,
      Closing_2025_4: PropTypes.number,
      Closing_2025_5: PropTypes.number,
      nirf_rank_2023: PropTypes.any,
      nirf_rank_2022: PropTypes.any,
      Branch: PropTypes.string,
      Program_Details: PropTypes.string,
      Average_package: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.null]),
      Probability: PropTypes.oneOf(['high', 'medium', 'low']).isRequired,
      Duration: PropTypes.string,
      Degree: PropTypes.string,
      Type: PropTypes.string,
      Likely_Round: PropTypes.string,
    }).isRequired)
}

export default TableWithPagination;
