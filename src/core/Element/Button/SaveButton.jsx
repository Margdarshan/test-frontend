import React from "react";

const SaveButton = ({
  children,
  type = "submit",
  loading = false,
  icon = null,
  showIcon = false,
  onClick,
  disabled = false,
  className = "",
}) => {
  const baseStyle = `
    inline-flex items-center justify-center gap-2
    px-8 py-4 rounded-lg text-[18px] font-semibold
    transition-all duration-200 ease-in-out
    border
    disabled:opacity-60 disabled:cursor-not-allowed
  `;

  const defaultColor = {
    backgroundColor: "#4E18CD",
    borderColor: "#4E18CD",
    color: "#FFFFFF",
  };

  const hoverColor = {
    backgroundColor: "#FFFFFF",
    color: "#4E18CD",
  };

  // Custom circular loader
  const CircularLoader = () => (
    <svg
      className="animate-spin h-5 w-5 text-white"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      style={{
        ...defaultColor,
        ...(disabled || loading ? {} : hoverColor),
      }}
      className={`${baseStyle} ${className} justify-center hover:bg-white hover:text-[#4E18CD] hover:border-[#4E18CD]`}
      onMouseEnter={(e) => {
        if (!disabled && !loading) {
          e.target.style.backgroundColor = hoverColor.backgroundColor;
          e.target.style.color = hoverColor.color;
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled && !loading) {
          e.target.style.backgroundColor = defaultColor.backgroundColor;
          e.target.style.color = defaultColor.color;
        }
      }}
    >
      {showIcon && icon}
      {children}
      {loading ? <span className="ml-2"> <CircularLoader /></span> : null}
    </button>
  );
};

export default SaveButton;
