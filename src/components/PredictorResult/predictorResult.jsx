import React, { useState } from 'react';

const CollegePredictor = () => {
  const data = [
    {
      institute: 'National Institute of Technology',
      gender: 'Co-Ed',
      quota: 'Home State',
      closingRank: '5000',
      branch: 'Electronics and Communication Engineering',
      program: '4 Years, Bachelor of Technology',
      probability: 'Medium',
    },
    {
      institute: 'Indian Institute of Technology',
      gender: 'Boys Only',
      quota: 'Other State',
      closingRank: '2000',
      branch: 'Computer Science and Engineering',
      program: '4 Years, Bachelor of Technology',
      probability: 'High',
    },
    {
      institute: 'Indian Institute of Technology',
      gender: 'Boys Only',
      quota: 'Other State',
      closingRank: '2000',
      branch: 'Computer Science and Engineering',
      program: '4 Years, Bachelor of Technology',
      probability: 'High',
    },
    {
      institute: 'Indian Institute of Technology',
      gender: 'Boys Only',
      quota: 'Other State',
      closingRank: '2000',
      branch: 'Computer Science and Engineering',
      program: '4 Years, Bachelor of Technology',
      probability: 'High',
    },
    {
      institute: 'Indian Institute of Technology',
      gender: 'Boys Only',
      quota: 'Other State',
      closingRank: '2000',
      branch: 'Computer Science and Engineering',
      program: '4 Years, Bachelor of Technology',
      probability: 'High',
    },
    {
      institute: 'Indian Institute of Technology',
      gender: 'Boys Only',
      quota: 'Other State',
      closingRank: '2000',
      branch: 'Computer Science and Engineering',
      program: '4 Years, Bachelor of Technology',
      probability: 'High',
    },
    {
      institute: 'Indian Institute of Technology',
      gender: 'Boys Only',
      quota: 'Other State',
      closingRank: '2000',
      branch: 'Computer Science and Engineering',
      program: '4 Years, Bachelor of Technology',
      probability: 'High',
    },
    {
      institute: 'Indian Institute of Technology',
      gender: 'Boys Only',
      quota: 'Other State',
      closingRank: '2000',
      branch: 'Computer Science and Engineering',
      program: '4 Years, Bachelor of Technology',
      probability: 'High',
    },
    {
      institute: 'Indian Institute of Technology',
      gender: 'Boys Only',
      quota: 'Other State',
      closingRank: '2000',
      branch: 'Computer Science and Engineering',
      program: '4 Years, Bachelor of Technology',
      probability: 'High',
    },
    {
      institute: 'Indian Institute of Technology',
      gender: 'Boys Only',
      quota: 'Other State',
      closingRank: '2000',
      branch: 'Computer Science and Engineering',
      program: '4 Years, Bachelor of Technology',
      probability: 'High',
    },
    {
      institute: 'Indian Institute of Technology',
      gender: 'Boys Only',
      quota: 'Other State',
      closingRank: '2000',
      branch: 'Computer Science and Engineering',
      program: '4 Years, Bachelor of Technology',
      probability: 'High',
    },
    {
      institute: 'Indian Institute of Technology',
      gender: 'Gender Neutral',
      quota: 'Other State',
      closingRank: '2000',
      branch: 'Computer Science and Engineering',
      program: '4 Years, Bachelor of Technology',
      probability: 'High',
    },
    {
      institute: 'Indian Institute of Technology',
      gender: 'Boys Only',
      quota: 'Other State',
      closingRank: '2000',
      branch: 'Computer Science and Engineering',
      program: '4 Years, Bachelor of Technology',
      probability: 'High',
    },
    {
      institute: 'Indian Institute of Technology',
      gender: 'Gender Neutral',
      quota: 'Other State',
      closingRank: '2000',
      branch: 'Computer Science and Engineering',
      program: '4 Years, Bachelor of Technology',
      probability: 'High',
    },
    {
      institute: 'Indian Institute of Technology',
      gender: 'Boys Only',
      quota: 'Other State',
      closingRank: '2000',
      branch: 'Computer Science and Engineering',
      program: '4 Years, Bachelor of Technology',
      probability: 'High',
    },
    {
      institute: 'Indian Institute of Technology',
      gender: 'Gender Neutral',
      quota: 'Other State',
      closingRank: '2000',
      branch: 'Computer Science and Engineering',
      program: '4 Years, Bachelor of Technology',
      probability: 'High',
    },
    {
      institute: 'Indian Institute of Technology',
      gender: 'Boys Only',
      quota: 'Other State',
      closingRank: '2000',
      branch: 'Computer Science and Engineering',
      program: '4 Years, Bachelor of Technology',
      probability: 'High',
    },
    {
      institute: 'Indian Institute of Technology',
      gender: 'Boys Only',
      quota: 'Other State',
      closingRank: '2000',
      branch: 'Computer Science and Engineering',
      program: '4 Years, Bachelor of Technology',
      probability: 'High',
    },
    {
      institute: 'Indian Institute of Technology',
      gender: 'Boys Only',
      quota: 'Other State',
      closingRank: '2000',
      branch: 'Computer Science and Engineering',
      program: '4 Years, Bachelor of Technology',
      probability: 'High',
    },
    {
      institute: 'Indian Institute of Technology',
      gender: 'Boys Only',
      quota: 'Other State',
      closingRank: '2000',
      branch: 'Computer Science and Engineering',
      program: '4 Years, Bachelor of Technology',
      probability: 'High',
    },
    {
      institute: 'Indian Institute of Technology',
      gender: 'Boys Only',
      quota: 'Other State',
      closingRank: '2000',
      branch: 'Computer Science and Engineering',
      program: '4 Years, Bachelor of Technology',
      probability: 'High',
    },
    {
      institute: 'Indian Institute of Technology',
      gender: 'Boys Only',
      quota: 'Other State',
      closingRank: '2000',
      branch: 'Computer Science and Engineering',
      program: '4 Years, Bachelor of Technology',
      probability: 'low',
    },
    {
      institute: 'Indian Institute of Technology',
      gender: 'Boys Only',
      quota: 'Other State',
      closingRank: '2000',
      branch: 'Computer Science and Engineering',
      program: '4 Years, Bachelor of Technology',
      probability: 'low',
    },
    {
      institute: 'Indian Institute of Technology',
      gender: 'Boys Only',
      quota: 'Other State',
      closingRank: '2000',
      branch: 'Computer Science and Engineering',
      program: '4 Years, Bachelor of Technology',
      probability: 'low',
    },
    // Add more rows as needed
  ];

  const [expanded, setExpanded] = useState({});

  // Toggle card expansion for mobile view
  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="p-4">
      {/* Header */}
      <h1 className="text-xl font-bold text-gray-700 mb-4">
        JEE College Predictor
      </h1>

      {/* Table for Desktop View */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left font-medium text-gray-700">
                Institute
              </th>
              <th className="p-4 text-left font-medium text-gray-700">Quota</th>
              <th className="p-4 text-left font-medium text-gray-700">
                Closing Rank
              </th>
              <th className="p-4 text-left font-medium text-gray-700">
                Branch
              </th>
              <th className="p-4 text-left font-medium text-gray-700">
                Program Details
              </th>
              <th className="p-4 text-left font-medium text-gray-700">
                Probability
              </th>
              <th className="p-4 text-left font-medium text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-4">
                  <div className="font-semibold">{item.institute}</div>
                  <div
                    className={`text-sm px-2 py-1 mt-1 rounded-full inline-block ${item.gender === 'Gender Neutral'
                      ? 'bg-green-100 text-black-800'
                      : 'bg-pink-100 text-black-800'
                      }`}
                  >
                    {item.gender}
                  </div>
                </td>
                <td className="p-4">{item.quota}</td>
                <td className="p-4">{item.closingRank}</td>
                <td className="p-4">{item.branch}</td>
                <td className="p-4">{item.program}</td>
                <td className="p-4">
                  <div
                    className={`px-2 py-1 rounded-full text-center text-black-800 text-sm ${item.probability === 'High'
                      ? 'bg-green-100'
                      : item.probability === 'Medium'
                        ? 'bg-orange-100'
                        : 'bg-red-100'
                      }`}
                  >
                    {item.probability}
                  </div>
                </td>
                <td className="p-4">
                  <button className="px-1 py-1 border border-blue-500 text-blue-500 rounded-lg bg-transparent hover:bg-blue-50">
                    More Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card Layout for Mobile Views */}
      <div className="block lg:hidden  grid-cols-1 sm:grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow p-4"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-700">
                {item.institute}
              </h2>
              {/* Expand/Collapse Arrow */}
              <button
                onClick={() => toggleExpand(index)}
                className="text-gray-500 focus:outline-none hover:text-blue-700"
              >
                {expanded[index] ? '↑' : '↓'}
              </button>
            </div>
            <div className="flex items-center space-x-5 mt-6">
              {/* Gender Highlight */}
              <span
                className={`text-sm px-2 py-1 rounded-full ${item.gender === 'Gender Neutral'
                  ? 'bg-green-100 text-black-800'
                  : 'bg-pink-100 text-black-800'
                  }`}
              >
                {item.gender}
              </span>
              {/* Probability Highlight */}
              <div className="px-2 py-1 rounded-full bg-gray-100">
                <div className="text-sm">
                  <span className="text-gray-500">Probability{'   '}</span>
                  <span
                    className={`px-2 py-1 rounded-full ${item.probability === 'High'
                      ? 'bg-green-100 text-black-800'
                      : item.probability === 'Medium'
                        ? 'bg-yellow-100 text-black-800'
                        : 'bg-red-100 text-black-800'
                      }`}
                  >
                    {item.probability}
                  </span>
                </div>
              </div>
            </div>

            {/* Expandable Content */}
            {expanded[index] && (
              <div className="mt-4 text-sm text-gray-600">
                <div className="space-y-2">
                  {/* Quota */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Quota:</span>
                    <span className="font-semibold text-gray-700">
                      {item.quota}
                    </span>
                  </div>
                  {/* Closing Rank */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Closing Rank:</span>
                    <span className="font-semibold text-gray-700">
                      {item.closingRank}
                    </span>
                  </div>
                  {/* Branch */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Branch:</span>
                    <span className="font-semibold text-gray-700">
                      {item.branch}
                    </span>
                  </div>
                  {/* Program */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Program:</span>
                    <span className="font-semibold text-gray-700">
                      {item.program}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-6">
        <button className="px-6 py-2 bg-blue-500 text-white font-medium rounded shadow hover:bg-blue-600">
          Load More
        </button>
      </div>
    </div>
  );
};

export default CollegePredictor;
