import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = ({ searchTerm, setSearchTerm, placeholder }) => {
  return (
    <div className="relative text-[#B0B0B0] pb-1 capitalize border-[#DDDDDD]">
      {/* Search Icon */}
      <FaSearch className="absolute left-3 top-3 text-gray-400" />

      {/* Search Input */}
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-8 py-2 w-full border border-[#DDDDDD] rounded focus:outline-none focus:border-[#DDDDDD] rounded-lg"
      />
    </div>
  );
};

export default SearchInput;
