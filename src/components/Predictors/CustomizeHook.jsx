import React, { useMemo, useState } from 'react';
import { useTable, usePagination } from 'react-table';
import {
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Typography,
} from '@mui/material';
import { CloudDownloadSharp } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import jsPDF from 'jspdf';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function CollegeTable({ college_list_result }) {
  // eslint-disable-next-line no-unused-vars
  const [filterCriteria, setFilterCriteria] = useState({
    state: '',
    quota: '',
    degreeType: '',
    institute: '',
    program: '',
  });
  const [searchInputs, setSearchInputs] = useState({});
  console.log(college_list_result.Academic_Program_Name);
  const handleSearchInputChange = (columnName, value) => {
    setSearchInputs((prevState) => ({
      ...prevState,
      [columnName]: value,
    }));
  };
  const exportToPDF = () => {
    const doc = new jsPDF('p', 'pt', 'a4');

    const watermarkText = 'markdarshan';
    const watermarkUrl = 'https://www.marg-darshan.com';
    const watermarkFontSize = 40;
    const watermarkColor = [255, 0, 255]; // color zuhaib se lena hai

    const columns = [
      { title: 'Institute', dataKey: 'Institute' },
      { title: 'Academic Program Name', dataKey: 'Academic_Program_Name' },
      { title: 'Quota', dataKey: 'Quota' },
      { title: 'Closing Rank', dataKey: 'Closing_Rank' },
      { title: 'Course Time', dataKey: 'Course_Time' },
      { title: 'Degree Type', dataKey: 'Degree_Type' },
      { title: 'Gender', dataKey: 'Gender' },
      { title: 'State', dataKey: 'State' },
    ];

    const rows = college_list_result.map((row) => {
      const rowData = {};
      columns.forEach((column) => {
        rowData[column.dataKey] = row[column.dataKey];
      });
      return rowData;
    });

    for (let i = 1; i <= doc.internal.getNumberOfPages(); i++) {
      doc.setPage(i);
      doc.setFontSize(watermarkFontSize);
      doc.setTextColor(...watermarkColor);

      doc.text(
        watermarkText,
        doc.internal.pageSize.getWidth() / 2,
        doc.internal.pageSize.getHeight() / 2,
        null,
        null,
        'center'
      );
    }

    doc.setFontSize(8);
    doc.setTextColor(200, 200, 200);
    doc.textWithLink(
      'www.marg-darshan.com',
      10,
      doc.internal.pageSize.height - 10,
      { url: watermarkUrl }
    );

    // Add table to PDF
    doc.autoTable({
      head: [columns.map((column) => column.title)],
      body: rows.map((row) => columns.map((column) => row[column.dataKey])),
      startY: 100,
      theme: 'striped',
      margin: { top: 70, right: 15, bottom: 30, left: 15 },
    });

    // Save PDF
    doc.save('college_data.pdf');
  };

  const filteredData = useMemo(() => {
    return college_list_result.filter((row) => {
      return Object.keys(filterCriteria).every((key) => {
        return filterCriteria[key] === '' || row[key] === filterCriteria[key];
      });
    });
  }, [college_list_result, filterCriteria]);

  const searchedData = useMemo(() => {
    return filteredData.filter((row) => {
      // eslint-disable-next-line array-callback-return
      return Object.keys(searchInputs).every((key) => {
        if (typeof row[key] === 'string') {
          return (
            searchInputs[key] === '' ||
            row[key].toLowerCase().includes(searchInputs[key].toLowerCase())
          );
        }
        if (typeof row[key] === 'number') {
          return searchInputs[key] === '' || row[key] >= searchInputs[key];
        }
      });
    });
  }, [filteredData, searchInputs]);

  const data = useMemo(() => {
    return searchedData.map((row) => ({
      ...row,
      id: row.Academic_Program_Name,
    }));
  }, [searchedData]);

  const columns = useMemo(
    () => [
      { Header: 'Institute', accessor: 'Institute' },
      { Header: 'Academic Program Name', accessor: 'Academic_Program_Name' },
      { Header: 'Quota', accessor: 'Quota' },
      { Header: 'Closing Rank', accessor: 'Closing_Rank' },
      { Header: 'Course Time', accessor: 'Course_Time' },
      { Header: 'Degree Type', accessor: 'Degree_Type' },
      { Header: 'Gender', accessor: 'Gender' },
      { Header: 'State', accessor: 'State' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    state: { pageIndex, pageSize },
    prepareRow,
    setPageSize,
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 50 } },
    usePagination
  );

  return (
    <div>
      <div
        style={{
          marginBottom: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      ></div>

      <div style={{ height: '700px', overflowY: 'scroll' }}>
        <table
          {...getTableProps()}
          style={{
            borderSpacing: '0',
            border: '1px solid black',
            width: '100%',
          }}
        >
          <thead style={{ position: 'sticky', top: '0' }}>
            <tr style={{ background: '#fff', border: '2px solid black' }}>
              {headerGroups.map((headerGroup) => (
                <React.Fragment key={headerGroup.id}>
                  {headerGroup.headers.map((column) => (
                    <th
                      className=" justify-between"
                      key={column.id}
                      {...column.getHeaderProps()}
                      style={{
                        borderBottom: '1px solid black',
                        background: '#f0f0f0',
                        padding: '8px 12px',
                        textAlign: 'ceter',
                      }}
                    >
                      {
                        <div className=" pb-2">
                          <InputLabel
                            variant="standard"
                            sx={{
                              position: 'relative',
                              color: 'black',
                              textTransform: 'uppercase',
                              fontWeight: '800',
                              ml: 0.5,
                            }}
                          >
                            {column.Header}
                          </InputLabel>
                          <TextField
                            label="Filter"
                            value={searchInputs[column.id] || ''}
                            onChange={(e) =>
                              handleSearchInputChange(column.id, e.target.value)
                            }
                            size="small"
                            variant="filled"
                            sx={{
                              mt: 1,
                              pt: -2,
                              color: '#000000',
                              bgcolor: 'white',
                              width: 'full',
                              position: 'sticky',
                            }}
                          />
                        </div>
                      }
                      {/* <div className='h-[50%] mt-2 p-0'> {column.render('Header')}</div> */}
                    </th>
                  ))}
                </React.Fragment>
              ))}
            </tr>
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                // eslint-disable-next-line react/jsx-key
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell, index) => {
                    return (
                      <td key={index}
                        {...cell.getCellProps()}
                        style={{
                          padding: '8px 12px',
                          borderBottom: '1px solid black',
                        }}
                      >
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div
        style={{
          marginTop: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <Button
            size="medium"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </Button>
          <Button
            size="medium"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </Button>
        </div>
        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              variant="filled"
              size="small"
              sx={{
                width: '70px',
                bgcolor: '#FFF',
                height: 28,
                textAlign: 'center',
                pb: 1.5,
                mt: 3,
              }}
              labelId="page-size-label"
              id="page-size-select"
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[10, 20, 50, 100].map((pageSizeOption) => (
                <MenuItem key={pageSizeOption} value={pageSizeOption}>
                  {pageSizeOption}
                </MenuItem>
              ))}
            </Select>
            <Typography variant="h6" color="success" sx={{ float: 'left' }}>
              Row Size
            </Typography>
          </FormControl>
        </div>
        <div>
          <span className="whitespace-nowrap">
            PAGE{' '}
            <strong>
              {pageIndex + 1} of {page.length}
            </strong>{' '}
          </span>
        </div>
      </div>
      <div className="float-right">
        <Link to="/frontend/collegepredictor" className="mr-3">
          <Button variant="outlined" size="medium">
            Back
          </Button>
        </Link>
        <Button variant="contained" size="medium" onClick={exportToPDF}>
          <CloudDownloadSharp /> PDF
        </Button>
      </div>
    </div>
  );
}

CollegeTable.propTypes = {
  college_list_result: PropTypes.arrayOf(
    PropTypes.shape({
      Institute: PropTypes.string,
      Academic_Program_Name: PropTypes.string,
      Quota: PropTypes.string,
      Closing_Rank: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      Course_Time: PropTypes.string,
      Degree_Type: PropTypes.string,
      Gender: PropTypes.string,
      State: PropTypes.string,
    })
  ),
};
