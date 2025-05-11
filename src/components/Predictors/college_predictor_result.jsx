/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'jspdf-autotable';
import CollegeTable from './CustomizeHook';

const ResultPage = () => {
  const location = useLocation();
  const receivedData = location.state?.receivedData;
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (receivedData) {
      setFilteredItems(receivedData);
    }
  }, [receivedData]);

  return (
    <div className=" py-5 bg-[#c8c8ff] ">
      <div className="container">
        <div className="row pb-5 text-center">
          <div
            className=" inline-block col-md-6 md:ml-32 md:pl-16 pr-5 text-right text-3xl"
            style={{ borderRight: '2px solid #b8c4e6' }}
          >
            Congratulations!
          </div>
          <div className=" inline-block col-md-6 pl-3 pr-4 mt-1">
            For your <strong></strong> in <strong></strong> category:{' '}
            <strong></strong>
          </div>
        </div>
      </div>

      {/* 2nd Section  */}
      <div className="state clg_list" >
        <p className="heading">
          As per the data obtained from JOSAA{' '}
          <span className="text-xl">2023</span>
        </p>
        <div className="m-2 p-2 px-[10%] items-center font-normal">
          <h6 className=" text-blue-600 ">
            Opening/Closing Ranks for Open Seats represent CRL. Opening/Closing
            Ranks for EWS, OBC-NCL, " "SC and ST Seats represent respective
            Category Ranks. Opening/Closing Ranks for PwD Seats " "represent PwD
            Ranks within Respective Categories
          </h6>
        </div>
        <div className="m-2 p-2 items-center">
          <h6 className=" text-red-500 font-semibold ">
            If the Closing/Opening rank has a suffix 'P', it indicates that the
            corresponding rank is from " "Preparatory Rank List.
          </h6>
        </div>
      </div>

      {/* Dear Subham Ji Table mujhe lag
       rha hai thoda bigad gya hai sahi kr dena ap */}
      <div className="overflow-x-auto px-6 md:mx-10">
        <CollegeTable college_list_result={receivedData} />
      </div>

      {/* Action buttons */}
      <div className="py-4 px-6 flex justify-end"></div>
    </div>
  );
};

export default ResultPage;
