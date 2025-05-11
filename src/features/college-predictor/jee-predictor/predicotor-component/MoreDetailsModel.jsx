/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PropTypes from "prop-types";
import CustomDialog from "../../../../core/components/CustomDialog/CustomDialog";
import ProbabiltyCell from "./ProbabiltyCell";

function MoreDetailsModel({ open, handleClose, selectedRow }) {
    if (!selectedRow) {
        return null;
    }
    const closingData = [];
    for (let round = 1; round <= 6; round++) {
        closingData.push({
            round,
            year22: selectedRow[`Closing_2022_${round}`] ?? "NA",
            year23: selectedRow[`Closing_2023_${round}`] ?? "NA",
            year24: selectedRow[`Closing_2024_${round}`] ?? "NA",
            year25: round <= 5 ? selectedRow[`Closing_2025_${round}`] ?? "NA" : "NA",
        });
    }

    return (
        <CustomDialog
            isOpen={open}
            onClose={handleClose}
            title={
                <div>
                    <p className="text-lg font-medium text-gray-700">{selectedRow?.Institute}</p>
                    <p className="text-primary mt-1 text-base text-jee">{selectedRow?.Branch}</p>
                </div>
            }
            maxWidth="xl"
            scroll="paper"
            actions={
                <button
                    onClick={handleClose}
                    className="px-4 py-2 rounded-md text-jee text-sm"
                >
                    Close
                </button>
            }
        >
            <>
                <div className="flex items-center mb-4">
                    <p className="text-gray-700 font-medium">Category -</p>
                    <span className="ml-2 text-primary text-jee font-bolder">{selectedRow.Category === "OPEN" ? "GENERAL" : selectedRow.Category}</span>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-3">
                    <div className="border border-gray-800 rounded-lg overflow-hidden">
                        <table className="min-w-full min-h-full text-sm text-left">
                            <thead className="bg-green-600 text-white">
                                <tr>
                                    <th className="py-1.5 px-4 text-center border border-gray-700">Year</th>
                                    <th className="py-1.5 px-4 text-center border border-gray-700">NIRF Ranking</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-800 bg-[#BEF4D4]">
                                <tr>
                                    <td className="py-1 md:py-0.5 px-4 text-center border border-gray-700 whitespace-nowrap">2022-2023</td>
                                    <td className="py-1 md:py-0.5 px-4 text-center border border-gray-700">
                                        {selectedRow.nirf_rank_2022 ?? "NA"}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-1 md:py-0.5 px-4 text-center border border-gray-700 whitespace-nowrap">2023-2024</td>
                                    <td className="py-1 md:py-0.5 px-4 text-center border border-gray-700">
                                        {selectedRow.nirf_rank_2023 ?? "NA"}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="min-w-[47%] gap-2">
                        <div className="flex flex-col justify-center items-center border border-gray-300 rounded-lg px-4 py-3 text-center w-full">
                            <p className="text-gray-700 font-medium mb-2">Probability of getting this branch</p>
                            <div className="flex justify-center">
                                <ProbabiltyCell value={selectedRow.Probability} isMobile={0} />
                            </div>
                        </div>
                        <div className="pt-2">
                            <p className="flex text-gray-800 px-1 mt-2 whitespace-wrap md:whitespace-nowrap">
                                Likely Round - <span className="flex px-1 text-jee"> {selectedRow?.["Likely Round"] ?? "-"}</span>
                            </p>
                        </div>
                    </div>
                </div>

                <h2 className="text-gray-800 text-lg font-bolder my-4">
                    Round-wise Yearly Closing Ranks
                </h2>

                <div className="overflow-x-auto border rounded-lg">
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-indigo-600 text-white">
                            <tr>
                                <th className="px-4 py-2">JoSAA Round</th>
                                <th className="px-4 py-2">Closing Rank '22</th>
                                <th className="px-4 py-2">Closing Rank '23</th>
                                <th className="px-4 py-2">Closing Rank '24</th>
                                <th className="px-4 py-2">Forecasted Rank '25</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white text-gray-800">
                            {closingData.map((entry) => (
                                <tr key={entry.round} className="border-t">
                                    <td className="px-4 py-2">{entry.round}</td>
                                    <td className="px-4 py-2">{entry.year22}</td>
                                    <td className="px-4 py-2">{entry.year23}</td>
                                    <td className="px-4 py-2">{entry.year24}</td>
                                    <td className="px-4 py-2">{entry.year25}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        </CustomDialog>
    );
}

MoreDetailsModel.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    selectedRow: PropTypes.shape({
        Institute: PropTypes.string,
        Branch: PropTypes.string,
        Category: PropTypes.string,
        Probability: PropTypes.string,
        nirf_rank_2022: PropTypes.string,
        nirf_rank_2023: PropTypes.string,
        Closing_2022_1: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        Closing_2022_2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        Closing_2022_3: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        Closing_2022_4: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        Closing_2022_5: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        Closing_2022_6: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        Closing_2023_1: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        Closing_2023_2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        Closing_2023_3: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        Closing_2023_4: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        Closing_2023_5: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        Closing_2023_6: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        Closing_2024_1: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        Closing_2024_2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        Closing_2024_3: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        Closing_2024_4: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        Closing_2024_5: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        Closing_2024_6: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        Closing_2025_1: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        Closing_2025_2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        Closing_2025_3: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        Closing_2025_4: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        Closing_2025_5: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
};

export default MoreDetailsModel;
