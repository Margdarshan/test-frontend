import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaFilter } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import PopUp from "./PopUp";
import { states, collegeType } from "../data/state";
import ClearAllButton from "./ClearAllButton";
import NewPredictoButton from "./NewPredictoButton";
import SearchInput from "./SearchInput";

const FilterDropdown = ({ name, label, options, selected, onChange, onClear, onApply, open, setOpenDropdown, setPop }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const showSearch = (val) => {
    if (val === 'College Type' || val === 'Duration') return false
    return true
  }
  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="relative">
      <button
        onClick={() => setOpenDropdown(open ? null : name)}
        className={`px-4 py-2 border rounded-[20px] shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 capitalize ${selected.length >= 1 ? 'flex font-normal bg-[#DDDDDD] px-1 rounded-lg' : ''
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
            {showSearch(label) ? <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder="Search..." /> : label}

          </div>

          {/* Filtered Options */}
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

          {/* Clear & Apply Buttons */}
          <div className="flex justify-between border-t pt-2 mt-2">
            <button
              onClick={() => {
                setSearchTerm(""); // Clear search input
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
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [open, setOpen] = useState(false)
  const [filters, setFilters] = useState({
    state: [],
    branch: [],
    field: [],
    Program_Details: [],
    collegeType: [],
  });

  const [uniqueValues, setUniqueValues] = useState({
    state: [],
    branch: [],
    field: [],
    Program_Details: [],
    collegeType: [],
  });

  const [openDropdown, setOpenDropdown] = useState(null);


  useEffect(() => {
    const extractState = (institute) => {
      const foundState = states.find((state) => institute.includes(state));
      return foundState || "Unknown";
    };

    const extractCollegeType = (institute) => {
      if (institute.toLowerCase().includes("iiit")) return "iiit";
      if (institute.toLowerCase().includes("nit")) return "nit";
      if (institute.toLowerCase().includes("gfti")) return "gfti";
      return "other";
    };

    const extractProgramType = (program) => {
      if (program.includes("4 Years")) return "4 Years";
      if (program.includes("5 Years")) return "5 Years";
      return "Other";
    };
    const extractField = (program) => {
      const parts = program.split(",").map(part => part.trim());
      return parts.length > 1 ? parts[1] : "Other";
    };


    const updatedData = data.map((item) => ({
      ...item,
      state: extractState(item.Institute),
      collegeType: extractCollegeType(item?.Institute),
      programType: extractProgramType(item?.Program_Details),
      field: extractField(item.Program_Details),
    }));

    const extractUniqueValues = (key) =>
      [...new Set(updatedData.map((item) => item[key]?.trim()).filter(Boolean))];

    setUniqueValues({
      state: states,
      branch: extractUniqueValues("Branch"),
      field: extractUniqueValues("field"),
      Program_Details: extractUniqueValues("programType"),
      collegeType: collegeType,
    });

  }, [data]);

  const handleCheckboxChange = (event, name) => {
    const { value, checked } = event.target;
    setFilters((prev) => {
      const updatedFilters = {
        ...prev,
        [name]: checked ? [...prev[name], value] : prev[name].filter((item) => item !== value),
      };
      return updatedFilters;
    });
  };

  const handleApplyFilters = () => {
    onFilterChange(filters);
  };

  const handleClearFilter = (name) => {
    setFilters((prev) => {
      const updatedFilters = { ...prev, [name]: [] };
      return { ...updatedFilters };
    });
    setTimeout(() => {
      onFilterChange({ ...filters, [name]: [] });
    }, 0);
  };

  const handleClosepop = () => {
    setOpen(false)
  }

  const handleClearAllFilters = () => {
    setFilters({ state: [], branch: [], field: [], Program_Details: [], collegeType: [] });
    onFilterChange({ state: [], branch: [], field: [], Program_Details: [], collegeType: [] });
  };
  const labelShow = (val) => {
    switch (val) {
      case 'state':
        return 'State'
      case 'branch':
        return 'Branch'
      case 'Program_Details':
        return 'Duration'
      case 'collegeType':
        return 'College Type'
      default: return 'Degree'


    }
  }

  return (
    <div>
      {!isMobile && <div className="flex flex-wrap gap-4 mb-4 items-center">
        {["state", "branch", "field", "Program_Details", "collegeType"].map((key) => (
          <FilterDropdown
            key={key}
            name={key}
            label={labelShow(key)}
            // label={key.replace("_", " ")}
            options={uniqueValues[key]}
            selected={filters[key]}
            onChange={handleCheckboxChange}
            onClear={handleClearFilter}
            onApply={handleApplyFilters}
            open={openDropdown === key}
            setOpenDropdown={setOpenDropdown}
            setPop={handleClosepop}
          />
        ))}
        {Object.values(filters).some(arr => arr.length > 0) && <ClearAllButton clearAll={handleClearAllFilters} />}

        <NewPredictoButton />
      </div>}
      {isMobile && (
        <div className="mb-2 w-[100%]">
          <button
            onClick={() => { setOpen((prev) => !prev) }}
            className="px-4 py-2 text-[#252525] border-[1px] border-[#9C9C9C] rounded-xl shadow-lg flex items-center overflow-hidden whitespace-nowrap text-ellipsis max-w-full"
          >
            <FaFilter style={{ marginRight: '5px', flexShrink: 0 }} />
            Filter Based On College and More
          </button>
          <PopUp open={open} onClose={() => setOpen(open)}>
            <div className="flex flex-wrap gap-4 mb-4 items-center">
              {["state", "branch", "field", "Program_Details", "collegeType"].map((key) => (
                <FilterDropdown
                  key={key}
                  name={key}
                  label={key.replace("_", " ")}
                  options={uniqueValues[key]}
                  selected={filters[key]}
                  onChange={handleCheckboxChange}
                  onClear={handleClearFilter}
                  onApply={handleApplyFilters}
                  open={openDropdown === key}
                  setOpenDropdown={setOpenDropdown}
                  setPop={handleClosepop}
                />
              ))}
              {Object.values(filters).some(arr => arr.length > 0) && <ClearAllButton clearAll={handleClearAllFilters} />}
              <NewPredictoButton />
            </div>

          </PopUp>
          <div className="flex gap-5 mt-4">  {Object.values(filters).some(arr => arr.length > 0) && <ClearAllButton clearAll={handleClearAllFilters} />}
            <NewPredictoButton /></div>

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
