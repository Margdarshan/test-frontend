import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TableWithPagination from './TableWithPagination';
import FilterBar from './FilterBar';
import MoreDetailsModel from './MoreDetailsModel';
import BackNavigation from '../../../../core/components/BackNavigation/BackNavigation';
import { useMediaQuery } from 'react-responsive';
import AccordionResult from './AccordationResult';
import { states, collegeType } from '../data/state';
import ScrollTop from '../../../../components/ScrollTop';

const CollegePredictorResult = () => {
  const location = useLocation();
  const originalData = location.state?.receivedData || [];
  const { categories, rank } = location.state;
  const [data, setData] = useState(originalData);
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [rowsToShow, setRowsToShow] = useState(10);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const handleClickOpen = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  const handleLoadMore = () => {
    setRowsToShow((prev) => prev + 10);
  };
  const handleFilterChange = (filters) => {
    const filteredData = originalData.filter((row) => {
      const state = states.find((s) => row.Institute.includes(s)) || "Unknown";
      const college_Type = collegeType.find((c) =>
        row.Institute.toLowerCase().includes(c.toLowerCase())
      ) || "other";

      const match = row.Program_Details.match(/(4 Years|5 Years|3 Years)?\s*,?\s*(.*)/i);
      const programDuration = match && match[1] ? match[1] : "Other";
      const programDegree = match && match[2] ? match[2] : "Other";

      const field = row.Program_Details.includes(",")
        ? row.Program_Details.split(",")[1].trim()
        : "Other";

      return (
        (filters.state.length === 0 || filters.state.includes(state)) &&
        (filters.branch.length === 0 || filters.branch.includes(row.Branch)) &&
        (filters.field.length === 0 || filters.field.includes(field)) &&
        (filters.Program_Details.length === 0 ||
          filters.Program_Details.includes(programDuration) ||
          filters.Program_Details.includes(programDegree)) &&
        (filters.collegeType.length === 0 || filters.collegeType.includes(college_Type))
      );
    });

    setData(filteredData);
    setRowsToShow(10);
  };
  console.log('this is the data', originalData)

  return (
    <div className="py-16 px-8 md:px-28">
      <ScrollTop />
      <BackNavigation title="Back" />
      <div className="my-8 gap-2">
        <h2 className="text-[#333] font-manrope text-[23.438px] font-semibold leading-[28.8px] mb-8">
          Jee College Predictor
        </h2>
        <p className="text-[#888] font-inter text-[17px] font-normal leading-[24px] mb-4">
          Category:
          <span className="mx-3 text-[#252525] font-inter text-[17px] font-normal leading-[24px]">
            {categories}
          </span>
        </p>

        <p className="text-[#888] font-inter text-[17px] font-normal leading-[24px]">
          Jee Mains 2025 Rank:{' '}
          <span className="mx-3 text-[#252525] font-inter text-[17px] font-normal leading-[24px]">
            {rank}
          </span>
        </p>
      </div>

      <FilterBar data={originalData} onFilterChange={handleFilterChange} />

      {isSmallScreen ? (
        <AccordionResult
          accordionData={data.slice(0, rowsToShow)}
          handleClickOpen={handleClickOpen}
        />
      ) : (
        <TableWithPagination
          data={data.slice(0, rowsToShow)}
          handleClickOpen={handleClickOpen}
        />
      )}

      {rowsToShow < data?.length && (
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button
            onClick={handleLoadMore}
            className="mt-4 inline-flex px-20 py-4 justify-center items-center gap-2 rounded-lg bg-[#010C2B] text-white"
          >
            Load More
          </button>
        </div>
      )}

      <MoreDetailsModel open={open} handleClose={handleClose} selectedRow={selectedRow} />
    </div>
  );
};

export default CollegePredictorResult;
