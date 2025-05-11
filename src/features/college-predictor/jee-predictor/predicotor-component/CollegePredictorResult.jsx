import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import TableWithPagination from "./TableWithPagination";
import FilterBar from "./FilterBar";
import MoreDetailsModel from "./MoreDetailsModel";
import BackNavigation from "../../../../core/components/BackNavigation/BackNavigation";
import { useMediaQuery } from "react-responsive";
import AccordionResult from "./AccordationResult";
import ScrollTop from "../../../../components/ScrollTop";
import NoDataFound from "../../../../core/Element/NoDataFound/NoDataFound";
import MetaTitle from "../../../../core/components/Metatitle/MetaTitle";

const CollegePredictorResult = () => {
  const location = useLocation();
  const originalData = Array.isArray(location.state?.receivedData) ? location.state.receivedData : [];

  const otherData = location.state
  // const { categories, rank } = location.state;
  const [data, setData] = useState(originalData);
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [rowsToShow, setRowsToShow] = useState(10);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const isValidData = Array.isArray(originalData) && originalData.length > 0;
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

  const handleFilterChange = (filters = {}) => {
    const {
      Quota = [],
      Branch = [],
      Type = [],
      ProgramType = [],
      Duration = [],
    } = filters;

    const filteredData = originalData?.filter((row) => {
      const stateValue = row?.State || "Unknown";
      const branchName = row?.Branch || "Other";
      const typeValue = row?.Type || "Other";
      const programType = row?.Degree || "Unknown";
      const duration = row?.Duration || "Unknown";

      return (
        (Quota.length === 0 || Quota.includes(stateValue)) &&
        (Branch.length === 0 || Branch.includes(branchName)) &&
        (Type.length === 0 || Type.includes(typeValue)) &&
        (ProgramType.length === 0 || ProgramType.includes(programType)) &&
        (Duration.length === 0 || Duration.includes(duration))
      );
    });

    setData(filteredData);
    setRowsToShow(10);
  };


  return (
    <div className="py-16 px-8 md:px-28">
      <MetaTitle title="JEE Result" metaTitle="Personalized Margdarshan JEE Main Predictor – Expert & Accurate Results" description="Accurate, tailored JEE Main college options based on your rank, with Marg-Darshan's advanced filters for branch, location, or category to refine results" keywords="JEE Main College Predictor 2025, JEE Main College Predictor, JEE Main College Predictor by Rank, JEE Main Rank Predictor, JEE Main College Prediction, Engineering College Predictor, College Predictor with Filters, JEE Main Admission Chances, JoSAA College Predictor" />
      <ScrollTop />
      <BackNavigation title="Back" />
      <div className="my-8 gap-2">
        <h2 className="text-[#333] font-manrope text-[23.438px] font-semibold leading-[28.8px] mb-8">
          Jee College Predictor
        </h2>
        <p className="text-[#888] font-inter text-[17px] font-normal leading-[24px] mb-4">
          Category:
          <span className="mx-3 text-[#252525] font-inter text-[17px] font-normal leading-[24px]">
            {location?.state?.categories}
          </span>
        </p>

        <p className="text-[#888] font-inter text-[17px] font-normal leading-[24px]">
          Jee Mains 2025 Rank:{' '}
          <span className="mx-3 text-[#252525] font-inter text-[17px] font-normal leading-[24px]">
            {location?.state?.rank}
          </span>
        </p>
      </div>

      <FilterBar data={originalData ?? []} onFilterChange={handleFilterChange} />

      {isValidData ? isSmallScreen ? (
        <AccordionResult
          accordionData={data.slice(0, rowsToShow)}
          handleClickOpen={handleClickOpen}
        />
      ) : (
        <TableWithPagination
          data={data.slice(0, rowsToShow)}
          handleClickOpen={handleClickOpen}
        />
      ) : <NoDataFound />}

      {rowsToShow < data?.length && (
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <button
            onClick={handleLoadMore}
            className="mt-4 inline-flex px-20 py-4 justify-center items-center gap-2 rounded-lg bg-[#010C2B] text-white"
          >
            Load More
          </button>
        </div>
      )}

      <MoreDetailsModel
        open={open}
        handleClose={handleClose}
        selectedRow={selectedRow}
      />
    </div>
  );
};

export default CollegePredictorResult;
