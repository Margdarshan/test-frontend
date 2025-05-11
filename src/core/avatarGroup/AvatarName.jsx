import React from "react";

const AvatarName = ({ authorName }) => {
  // Extract the first letter of the first name
  const getInitial = (name) => name?.charAt(0).toUpperCase() || "?";

  return (
    <div className="flex items-center justify-center w-10 h-10 p-1 bg-[#4E18CD] text-white font-bold text-lg rounded-full">
      {getInitial(authorName)}
    </div>
  );
};

export default AvatarName;
