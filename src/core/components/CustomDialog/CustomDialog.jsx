/* eslint-disable react/no-unknown-property */
// // components/CustomDialog.jsx
// import React, { useEffect, useRef } from "react";
// import PropTypes from "prop-types";
// import { AnimatePresence, motion } from "framer-motion";

// const widthMap = {
//   sm: "max-w-sm",
//   md: "max-w-md",
//   lg: "max-w-lg",
//   xl: "max-w-xl",
//   full: "w-full h-full",
// };

// const CustomDialog = ({
//   isOpen,
//   onClose,
//   title,
//   children,
//   actions,
//   maxWidth = "md",
//   fullScreen = false,
//   scroll = "paper",
// }) => {
//   const dialogRef = useRef(null);

//   // Close on Escape
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "Escape") onClose();
//     };
//     if (isOpen) {
//       document.addEventListener("keydown", handleKeyDown);
//     }
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [isOpen, onClose]);

//   // Auto focus trap
//   useEffect(() => {
//     if (isOpen && dialogRef.current) {
//       dialogRef.current.focus();
//     }
//   }, [isOpen]);

//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) onClose();
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           <motion.div
//             className="fixed inset-0 z-40 shadow-lg"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={handleOverlayClick}
//           />

//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center p-4"
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.95 }}
//           >
//             <div
//               ref={dialogRef}
//               tabIndex={-1}
//               role="dialog"
//               aria-modal="true"
//               className={`bg-white rounded-2xl shadow-xl w-full outline-none ${fullScreen ? "h-full" : widthMap[maxWidth]
//                 } ${scroll === "paper" ? "max-h-[90vh] overflow-y-auto" : ""}`}
//               onClick={(e) => e.stopPropagation()}
//             >
//               {title && (
//                 <div className="text-lg font-semibold px-6 pt-6 text-black ">
//                   {title}
//                 </div>
//               )}

//               <div
//                 className={`px-6 py-4 text-black ${scroll === "body" ? "overflow-y-auto max-h-[70vh]" : ""
//                   }`}
//               >
//                 {children}
//               </div>

//               {/* Actions */}
//               {actions && (
//                 <div className="px-6 py-4 flex justify-end space-x-2 border-t border-gray-200 dark:border-gray-700">
//                   {actions}
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

// CustomDialog.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
//   title: PropTypes.string,
//   children: PropTypes.node.isRequired,
//   actions: PropTypes.node,
//   maxWidth: PropTypes.oneOf(["sm", "md", "lg", "xl", "full"]),
//   fullScreen: PropTypes.bool,
//   scroll: PropTypes.oneOf(["paper", "body"]),
// };

// export default CustomDialog;

// components/CustomDialog.jsx
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

const widthMap = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "w-full h-full",
};

const CustomDialog = ({
  isOpen,
  onClose,
  title,
  children,
  actions,
  maxWidth = "lg",
  fullScreen = false,
  scroll = "paper",
}) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.focus();
    }
  }, [isOpen]);
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Close if clicking on the overlay (but not inside the dialog)
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOverlayClick}
          />

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div
              ref={dialogRef}
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              className={`bg-white rounded-2xl shadow-xl w-full outline-none ${fullScreen ? "h-full" : widthMap[maxWidth]
                } ${scroll === "paper" ? "max-h-[90vh] overflow-y-auto custom-scroll" : ""}`}
              onClick={(e) => e.stopPropagation()}
            >
              {title && (
                <div className="text-lg font-semibold px-6 pt-2 text-black sticky">
                  {title}
                </div>
              )}

              <div
                className={`px-6 py-4 text-black ${scroll === "body" ? "overflow-y-auto max-h-[70vh] custom-scroll" : ""
                  }`}
              >
                {children}
              </div>

              {/* Actions */}
              {actions && (
                <div className="px-6 py-4 flex justify-end space-x-2 border-t border-gray-200">
                  {actions}
                </div>
              )}
            </div>
          </motion.div>

          <style jsx="true">{`
            .custom-scroll::-webkit-scrollbar {
              width: 10px;
              height: 2px;
            }
            .custom-scroll::-webkit-scrollbar-track {
              background: transparent;
            }
            .custom-scroll::-webkit-scrollbar-thumb {
              background-color: #888;
              border-radius: 1px;
            }
            /* For Firefox */
            .custom-scroll {
              scrollbar-width: thin;
              scrollbar-color: #888 transparent;
            }
          `}</style>
        </>
      )}
    </AnimatePresence>
  );
};

CustomDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  actions: PropTypes.node,
  maxWidth: PropTypes.oneOf(["sm", "md", "lg", "xl", "full"]),
  fullScreen: PropTypes.bool,
  scroll: PropTypes.oneOf(["paper", "body"]),
};

export default CustomDialog;
