import React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";


const CustomModal = ({
  isOpen,
  onClose,
  showCloseIcon = true,
  className = "",
  children,
  size = "md",
  fullScreen = false,
}) => {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-3xl",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        className={cn(
          "relative bg-white rounded-2xl shadow-xl p-6 w-full",
          fullScreen ? "h-full max-w-full" : sizeClasses[size],
          className
        )}
      >
        {showCloseIcon && onClose && (
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  showCloseIcon: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  fullScreen: PropTypes.bool,
};

export default CustomModal;