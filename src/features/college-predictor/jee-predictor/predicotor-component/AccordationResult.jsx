import React, { useState } from "react";
import PropTypes from "prop-types";
import GenderCell from "./GenderCell";
import ProbabiltyCell from "./ProbabiltyCell";
import { IoIosArrowDown } from "react-icons/io";
import MoreDetailsModel from "./MoreDetailsModel";
import PromotionMentorship from "./PromotionMentorship";

const KeyValue = ({ title, value }) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-[#4F4F4F] font-inter text-[13px] font-medium leading-[16px]">
        {title}
      </p>
      <p className="text-[#888] font-inter text-[11px] font-normal leading-[22px]">
        {value}
      </p>
    </div>
  );
};

const AccordionResult = ({ accordionData }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [rowsToShow, setRowsToShow] = useState(10);
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [expanded, setExpanded] = useState({});

  const handleClickOpen = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      {/* Mobile View */}
      <div className="block lg:hidden  grid-cols-1 sm:grid-cols-2 gap-4">
        {accordionData.slice(0, rowsToShow).map((item, index) => (
          <React.Fragment key={index}>
            {index === 2 ? <PromotionMentorship /> : null}
            <div
              // key={index}
              className="bg-white border border-gray-200 rounded-lg shadow p-4"
            >

              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-700">
                  {item.Institute}
                </h2>
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-gray-500 focus:outline-none hover:text-blue-700"
                >
                  {expanded[index] ? "↑" : "↓"}
                </button>
              </div>
              <div className="flex items-center space-x-5 mt-6">
                <span
                  className={`text-sm px-2 py-1 rounded-full ${item.Gender === "Gender-Neutral"
                    ? "bg-green-300 text-black-800"
                    : "bg-pink-300 text-black-800"
                    }`}
                >
                  {item.Gender}
                </span>
                <div className="px-2 py-1 rounded-full bg-gray-100">
                  <span className="text-sm">
                    <span className="text-gray-500">Probability{' '} </span>
                    <span
                      className={`px-2 py-1 rounded-full ${item.Probability === "High"
                        ? "bg-green-200 text-black-800"
                        : item.Probability === "Medium"
                          ? "bg-yellow-200 text-black-800"
                          : "bg-red-200 text-black-800"
                        }`}
                    >
                      {item.Probability}
                    </span>
                  </span>
                </div>
              </div>
              {expanded[index] && (
                <div className="mt-4 text-sm text-gray-600">
                  <KeyValue title="Quota" value={item.Quota} />
                  <KeyValue title="Closing Rank" value={item.Closing_2023_6} />
                  <KeyValue title="Branch" value={item.Branch} />
                  <button
                    onClick={() => handleClickOpen(item)}
                    className="px-4 py-2 border rounded-md border-indigo-600 text-indigo-600 hover:bg-indigo-100 whitespace-nowrap w-full"
                  >
                    More Details
                  </button>
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
      <MoreDetailsModel open={open} handleClose={handleClose} selectedRow={selectedRow} />
    </div>
  );
};

// Prop validation with PropTypes
AccordionResult.propTypes = {
  accordionData: PropTypes.arrayOf(
    PropTypes.shape({
      Institute: PropTypes.string,
      Gender: PropTypes.string,
      Probability: PropTypes.string,
      Quota: PropTypes.string,
      Closing_2023_6: PropTypes.string,
      Branch: PropTypes.string,
    })
  ),
};

export default AccordionResult;
