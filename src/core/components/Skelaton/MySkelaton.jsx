import React from "react";
import clsx from "clsx";

const MySkeleton = ({
  variant = "text",
  width = "w-full",
  height = "h-4",
  borderRadius = "rounded",
  className = "",
  style,
}) => {
  const baseStyles = "bg-gray-300 dark:bg-gray-700 animate-pulse";

  const variantStyles = {
    text: `h-4 ${borderRadius}`,
    circle: `rounded-full ${width} ${height}`,
    rectangle: `rounded-md ${width} ${height} ${borderRadius}`,
  };

  return (
    <div style={{ ...style }} className={clsx(baseStyles, variantStyles[variant], className)} ></div>
  );
};


export default MySkeleton;
