import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineAssignment } from 'react-icons/md';
import { IoCaretDownOutline } from 'react-icons/io5';
import { FaRegFile } from 'react-icons/fa';
import { CgNotes } from 'react-icons/cg';
import DropdownPanel from './DropdownPanel';
import PropTypes from 'prop-types';

const SubNavbar = (props) => {
  const [showDropdown, setShowDropdown] = useState({
    engineeringStudyMaterial: false,
    engineeringTestSeries: false,
    engineeringExams: false,
    engineeringColleges: false,
    quickLinksEngineering: false,
    managementStudyMaterial: false,
    managementTestSeries: false,
    managementExams: false,
    managementColleges: false,
    quickLinksManagement: false,
  });

  const handleMouseEnter = (key) => {
    setShowDropdown({ ...showDropdown, [key]: true });
  };

  const handleMouseLeave = (key) => {
    setShowDropdown({ ...showDropdown, [key]: false });
  };

  const engineeringOptions = [
    {
      id: 'engineeringStudyMaterial',
      title: 'Study Material',
      icon: <FaRegFile />,
      items: [
        ['Comprehensive Formula Books', '/comp-books'],
        ['Textbooks and Practice Notebooks', '//s'],
        ['Revision Notes', '//notes'],
        ['Previous Year Paper for JEE', '//year'],
        ['Detailed Topic Wise Notes', '//on'],
      ],
      // items: [
      //   ["JEE Main Test Series", "https://marg-darshan.com/test-series/iit"],
      //   ["JEE Advanced Test Series", "//on"],
      // ],
      onMouseEnter: () => handleMouseEnter('engineeringStudyMaterial'),
      onMouseLeave: () => handleMouseLeave('engineeringStudyMaterial'),
    },

    {
      id: 'engineeringTestSeries',
      title: 'Test Series',
      icon: <FaRegFile />,
      items: [
        ['JEE Main Test Series', '//on'],
        ['JEE Advanced Test Series', '//on'],
      ],
      // items: [
      //   ["JEE Main Test Series", "https://marg-darshan.com/test-series/iit"],
      //   ["JEE Advanced Test Series", "//on"],
      // ],
      onMouseEnter: () => handleMouseEnter('engineeringTestSeries'),
      onMouseLeave: () => handleMouseLeave('engineeringTestSeries'),
    },
    {
      id: ' engineeringExams',
      title: 'Exams',
      icon: <CgNotes />,
      items: [
        ['JEE Main', '//on'],
        ['JEE Advanced', '//on'],
        ['BITSAT', '//on'],
      ],
      // items: [
      //   ["NCERT", "https://marg-darshan.com/study-material/ncert-books/ncert-books-for-class-12th/ncert-books-for-class-12th-overall"],
      //   ["PYQ's for JEE Main", "https://marg-darshan.com/study-material/previous-year-paper/jee-mains/jee-mains-january-2020-with-solution"],
      //   ["Formula Books For JEE Main", "https://marg-darshan.com/study-material/notes/formula-book/formula-book-for-jee-main-2023"],
      //   ["Complete Notes For JEE Main (Physics)", "https://marg-darshan.com/study-material/notes/complete-notes-for-jee/jee-main-2023-physics-complete-notes"],
      //   ["Complete Notes For JEE Main (Chemistry)", "https://marg-darshan.com/study-material/notes/complete-notes-for-jee/jee-main-2023-chemistry-complete-notes"],
      // ],
      onMouseEnter: () => handleMouseEnter(' engineeringExams'),
      onMouseLeave: () => handleMouseLeave(' engineeringExams'),
    },
    {
      id: 'engineeringColleges',
      title: 'Top 10 Colleges',
      icon: <MdOutlineAssignment />,
      items: [
        ['Last year cutoff for JoSAA', '//on'],
        ['Marks vs Percentile for JEE Mains', '//on'],
      ],
      onMouseEnter: () => handleMouseEnter('engineeringColleges'),
      onMouseLeave: () => handleMouseLeave('engineeringColleges'),
    },
    {
      id: 'quickLinksEngineering',
      title: 'Quick Links',
      icon: <FaRegFile />,
      items: [
        ['Last year cutoff for JoSAA', '//on'],
        ['Marks vs Percentile for JEE Mains', '//on'],
      ],
      onMouseEnter: () => handleMouseEnter('quickLinksEngineering'),
      onMouseLeave: () => handleMouseLeave('quickLinksEngineering'),
    },
  ];

  const managementOptions = [
    {
      id: 'managementStudyMaterial',
      title: 'Study Material',
      icon: <FaRegFile />,
      items: [
        ['Comprehensive Formula Books', '//on'],
        ['Textbooks and Practice Notebooks', '//on'],
        ['Revision Notes', '//on'],
        ['Previous Year Paper', '//on'],
        ['Detailed Topic Wise Notes', '//on'],
      ],
      onMouseEnter: () => handleMouseEnter('managementStudyMaterial'),
      onMouseLeave: () => handleMouseLeave('managementStudyMaterial'),
    },
    {
      id: 'managementTestSeries',
      title: 'Test Series',
      icon: <CgNotes />,
      items: [
        ['CAT Test Series', '//on'],
        ['XAT Test Series', '//on'],
      ],
      // items: [
      //   ["Previous Year Questions", "https://marg-darshan.com/study-material/previous-year-paper/neet/neet-pyqs-with-solutions"],
      //   ["Short Notes for NEET", "//on"],
      //   ["Complete Notes for NEET", "//on"],
      // ],
      onMouseEnter: () => handleMouseEnter('managementTestSeries'),
      onMouseLeave: () => handleMouseLeave('managementTestSeries'),
    },
    {
      id: 'managementExams',
      title: 'Exams',
      icon: <MdOutlineAssignment />,
      items: [
        ['CAT', '//on'],
        ['XAT', '//on'],
        ['SNAP', '//on'],
      ],
      onMouseEnter: () => handleMouseEnter('managementExams'),
      onMouseLeave: () => handleMouseLeave('managementExams'),
    },
    {
      id: 'managementColleges',
      title: 'Top 10 Colleges',
      icon: <MdOutlineAssignment />,
      items: [
        ['Last year cutoff for JoSAA', '//on'],
        ['Marks vs Percentile for JEE Mains', '//on'],
      ],
      onMouseEnter: () => handleMouseEnter('managementColleges'),
      onMouseLeave: () => handleMouseLeave('managementColleges'),
    },
    {
      id: 'quickLinksManagement',
      title: 'Quick Links',
      icon: <FaRegFile />,
      items: [
        ['Last year cutoff for MBA', '//on'],
        ['Marks vs Percentile for CAT', '//on'],
      ],
      onMouseEnter: () => handleMouseEnter('quickLinksManagement'),
      onMouseLeave: () => handleMouseLeave('quickLinksManagement'),
    },
  ];

  const subnavbarOptions = props.isEngineering
    ? engineeringOptions
    : managementOptions;

  return (
    <div className="absolute flex rounded-xl bg-white mt-9 pl-4 pr-16 py-4">
      <div className="links-container flex-col space-y-7 z-40">
        {subnavbarOptions.map((option, index) => (
          <div key={index} className="each-link">
            <Link
              className="flex pr-4 hover:no-underline text-[#252525] hover:text-[#4E18CD] space-x-6 text-sm font-normal"
              onMouseEnter={option.onMouseEnter}
              onMouseLeave={option.onMouseLeave}
            >
              <div
                className={`icon flex-shrink-0 px-1 py-1 text-sm rounded-full ${showDropdown[option.id] ? 'bg-[#4E18CD] text-white' : 'text-black bg-[#DCD1F5]'} font-light`}
              >
                {option.icon}
              </div>
              <div className="text flex items-start hover:no-underline hover:text-[#4E18CD]">
                <div className="flex-shrink-0 mr-1">{option.title}</div>
                {option.items.length > 0 && (
                  <div className="icon pt-[4px]">
                    <IoCaretDownOutline
                      className={`${showDropdown[option.id] ? 'rotate-[270deg]' : ''}`}
                    />
                  </div>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
      {showDropdown['engineeringStudyMaterial'] && (
        <DropdownPanel
          options={engineeringOptions[0]}
          id={'engineeringStudyMaterial'}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      )}
      {showDropdown['engineeringTestSeries'] && (
        <DropdownPanel
          options={engineeringOptions[1]}
          id={'engineeringTestSeries'}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      )}
      {showDropdown[' engineeringExams'] && (
        <DropdownPanel
          options={engineeringOptions[2]}
          id={' engineeringExams'}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      )}
      {showDropdown['engineeringColleges'] && (
        <DropdownPanel
          options={engineeringOptions[3]}
          id={'engineeringColleges'}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      )}
      {showDropdown['quickLinksEngineering'] && (
        <DropdownPanel
          options={engineeringOptions[4]}
          id={'quickLinksEngineering'}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      )}

      {showDropdown['managementStudyMaterial'] && (
        <DropdownPanel
          options={managementOptions[0]}
          id={'managementStudyMaterial'}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      )}
      {showDropdown['managementTestSeries'] && (
        <DropdownPanel
          options={managementOptions[1]}
          id={'managementTestSeries'}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      )}
      {showDropdown['managementExams'] && (
        <DropdownPanel
          options={managementOptions[2]}
          id={'managementExams'}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      )}
      {showDropdown['managementColleges'] && (
        <DropdownPanel
          options={managementOptions[3]}
          id={'managementColleges'}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      )}
      {showDropdown['quickLinksManagement'] && (
        <DropdownPanel
          options={engineeringOptions[4]}
          id={'quickLinksManagement'}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      )}
    </div>
  );
};
SubNavbar.propTypes = {
  isEngineering: PropTypes.bool,
};
export default SubNavbar;
