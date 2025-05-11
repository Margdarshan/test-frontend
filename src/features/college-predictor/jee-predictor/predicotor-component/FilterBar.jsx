import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaFilter } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import PopUp from "./PopUp";
import { states, collegeType } from "../data/state";
import ClearAllButton from "./ClearAllButton";
import NewPredictoButton from "./NewPredictoButton";
import SearchInput from "./SearchInput";
import { useLocation } from "react-router-dom";

const FilterDropdown = ({
  name,
  label,
  options,
  selected,
  onChange,
  onClear,
  onApply,
  open,
  setOpenDropdown,
  setPop,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const showSearch = (val) => {
    return !(val === "College Type" || val === "Round" || val === "Duration");
  };

  const filteredOptions = options.filter((option) =>
    option?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative"
    //  onMouseEnter={() => setOpenDropdown(name)} 
    //   onMouseLeave={() => setOpenDropdown(null)}
    >
      <button
        onClick={() => setOpenDropdown(open ? null : name)}
        className={`px-4 py-2 border rounded-[20px] shadow-sm focus:outline-none hover:ring-2 hover:ring-indigo-500 capitalize ${selected.length >= 1
          ? "flex font-normal bg-[#DDDDDD] px-1 rounded-lg"
          : ""
          }`}
      >
        {selected.length === 0 ? (
          label
        ) : (
          <div className="flex font-normal">
            {label} <span className="lowercase mx-1"> is </span> {selected[0]}
            {selected.length > 1 && ` +${selected.length - 1}`}
          </div>
        )}
      </button>
      {open && (
        <div className="absolute left-0 mt-1 bg-white shadow-lg rounded-lg py-3 px-1 z-10 w-60 border">
          <div className="text-[#B0B0B0] px-2 pb-1 capitalize font-bold border-b-2 border-[#DDDDDD]">
            {showSearch(label) ? (
              <SearchInput
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                placeholder="Search..."
              />
            ) : (
              label
            )}
          </div>

          <div className="max-h-48 overflow-auto">
            {filteredOptions.length === 0 ? (
              <div className="text-gray-500 p-2">No {label} found</div>
            ) : (
              filteredOptions.map((value, index) => (
                <label
                  key={index}
                  className="flex items-center space-x-2 px-2 py-1 cursor-pointer transition hover:bg-indigo-100 rounded"
                >
                  <input
                    type="checkbox"
                    value={value}
                    checked={selected.includes(value)}
                    onChange={(e) => onChange(e, name)}
                    className="cursor-pointer"
                  />
                  <span>{value}</span>
                </label>
              ))
            )}
          </div>

          <div className="flex justify-between border-t pt-2 mt-2">
            <button
              onClick={() => {
                setSearchTerm("");
                onClear(name);
                setPop();
                setOpenDropdown(null);
              }}
              className="px-4 py-2 bg-[#ff9371] text-white rounded-lg shadow-sm ml-4 hover:bg-white hover:text-red-500 border-[1px] hover:border-red-500"
            >
              Clear
            </button>
            <button
              onClick={() => {
                setOpenDropdown(null);
                setPop();
                onApply();
              }}
              className="px-4 py-1 bg-[#4E18CD] text-white rounded-lg hover:bg-[#9883FF] border-[1px] hover:border-[#9883FF]"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const FilterBar = ({ data, onFilterChange }) => {
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [open, setOpen] = useState(false);

  const [filters, setFilters] = useState({
    Quota: [],
    Branch: [],
    Type: [],
    ProgramType: [],
    Duration: [],
  });

  const [uniqueValues, setUniqueValues] = useState({
    Quota: [],
    Branch: [],
    Type: [],
    ProgramType: [],
    Duration: [],
  });

  const [openDropdown, setOpenDropdown] = useState(null);

  const genderFromLocation = location?.state?.gender;
  const categoryFromLocation = location?.state?.categories;

  useEffect(() => {
    const extractUniqueValues = (key) =>
      [...new Set(data.map((item) => item?.[key]?.toString()?.trim()).filter(Boolean))];

    setUniqueValues({
      Quota: states,
      Branch: extractUniqueValues("Branch"),
      Type: collegeType,
      ProgramType: extractUniqueValues("Degree"),
      Duration: extractUniqueValues("Duration"),
    });
  }, [data]);

  const handleCheckboxChange = (event, name) => {
    const { value, checked } = event.target;
    setFilters((prev) => ({
      ...prev,
      [name]: checked
        ? [...prev[name], value]
        : prev[name].filter((item) => item !== value),
    }));
  };

  const handleApplyFilters = () => {
    onFilterChange(filters);
  };

  const handleClearFilter = (name) => {
    setFilters((prev) => ({
      ...prev,
      [name]: [],
    }));
    setTimeout(() => {
      onFilterChange({ ...filters, [name]: [] });
    }, 0);
  };

  const handleClearAllFilters = () => {
    const cleared = {
      Quota: [],
      Branch: [],
      Type: [],
      ProgramType: [],
      Duration: [],
    };
    setFilters(cleared);
    onFilterChange(cleared);
  };

  const handleClosepop = () => {
    setOpen(false);
  };

  const labelShow = (val) => {
    switch (val) {
      case "Quota":
        return "State";
      case "Branch":
        return "Branch";
      case "Type":
        return "College Type";
      case "ProgramType":
        return "Program Type";
      case "Duration":
        return "Duration";
      default:
        return val;
    }
  };

  const filterKeys = [
    "Quota",
    "Branch",
    "Type",
    "ProgramType",
    "Duration",
  ];

  const renderStaticLabel = (label, value) => (
    <div className="px-4 py-2 border rounded-[20px] bg-[#DDDDDD] text-sm text-gray-700 font-normal shadow-sm">
      {label} is {value === "OPEN" ? "General" : value}
    </div>
  );

  return (
    <div>
      {!isMobile && (
        <div className="flex flex-wrap gap-4 mb-4 items-center">
          {filterKeys.map((key) => (
            <React.Fragment key={key}>
              <FilterDropdown
                name={key}
                label={labelShow(key)}
                options={uniqueValues[key]}
                selected={filters[key]}
                onChange={handleCheckboxChange}
                onClear={handleClearFilter}
                onApply={handleApplyFilters}
                open={openDropdown === key}
                setOpenDropdown={setOpenDropdown}
                setPop={handleClosepop}
              />
              {key === "Quota" && (
                <>
                  {genderFromLocation &&
                    renderStaticLabel("Gender", genderFromLocation)}
                  {categoryFromLocation &&
                    renderStaticLabel("Category", categoryFromLocation)}
                </>
              )}
            </React.Fragment>
          ))}
          {Object.values(filters).some((arr) => arr.length > 0) && (
            <ClearAllButton clearAll={handleClearAllFilters} />
          )}
          <NewPredictoButton />
        </div>
      )}

      {isMobile && (
        <div className="mb-2 w-full">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="px-4 py-2 text-[#252525] border-[1px] border-[#9C9C9C] rounded-xl shadow-lg flex items-center overflow-hidden whitespace-nowrap text-ellipsis max-w-full"
          >
            <FaFilter style={{ marginRight: "5px", flexShrink: 0 }} />
            Filter Based On College and More
          </button>
          <PopUp open={open} onClose={() => setOpen(false)}>
            <div className="flex flex-wrap gap-4 mb-4 items-center">
              {filterKeys.map((key) => (
                <React.Fragment key={key}>
                  <FilterDropdown
                    name={key}
                    label={labelShow(key)}
                    options={uniqueValues[key]}
                    selected={filters[key]}
                    onChange={handleCheckboxChange}
                    onClear={handleClearFilter}
                    onApply={handleApplyFilters}
                    open={openDropdown === key}
                    setOpenDropdown={setOpenDropdown}
                    setPop={handleClosepop}
                  />
                  {key === "Quota" && (
                    <>
                      {genderFromLocation &&
                        renderStaticLabel("Gender", genderFromLocation)}
                      {categoryFromLocation &&
                        renderStaticLabel("Category", categoryFromLocation)}
                    </>
                  )}
                </React.Fragment>
              ))}
              {Object.values(filters).some((arr) => arr.length > 0) && (
                <ClearAllButton clearAll={handleClearAllFilters} />
              )}
              <NewPredictoButton />
            </div>
          </PopUp>
        </div>
      )}
    </div>
  );
};

FilterBar.propTypes = {
  data: PropTypes.array.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterBar;
