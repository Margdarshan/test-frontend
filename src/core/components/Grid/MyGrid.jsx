import React from "react";
import clsx from "clsx";

export const GridContainer = ({ children, className = "", cols = "grid-cols-1", gap = "gap-4" }) => {
  return (
    <div className={clsx(`grid ${cols} ${gap} w-full`, className)}>
      {children}
    </div>
  );
};

// Grid Item Component
export const GridItem = ({ children, className = "", xs, sm, md, lg, xl }) => {
  const responsiveClasses = clsx(
    xs && `col-span-${xs}`,
    sm && `sm:col-span-${sm}`,
    md && `md:col-span-${md}`,
    lg && `lg:col-span-${lg}`,
    xl && `xl:col-span-${xl}`,
    className
  );

  return <div className={responsiveClasses}>{children}</div>;
};
