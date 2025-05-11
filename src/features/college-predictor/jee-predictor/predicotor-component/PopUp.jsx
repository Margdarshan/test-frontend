import React, { useEffect } from "react";
import PropTypes from "prop-types";

const PopUp = ({ open, onClose, children }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (open && !event.target.closest(".popup-container")) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg p-3 z-10 border popup-container">

      {children}
    </div>
  );
};

PopUp.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default PopUp;
