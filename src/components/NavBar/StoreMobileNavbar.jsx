import React, { useState, useEffect } from 'react';
import { FaRegFile } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CgNotes } from 'react-icons/cg';
import { MdOutlineAssignment } from 'react-icons/md';
import { IoCaretDownOutline } from 'react-icons/io5';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserLogin from '../Login/UserLogin';
import useAuthStore from '../../store/authStore';
import UserBox from './UserBox';

const StoreMobileNavbar = ({ setIsMobileNavbarOpen }) => {
  const { isAuthenticated } = useAuthStore()
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeOption, setActiveOption] = useState(null)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const location = useLocation(); // Use the hook at the top level
  const navigate = useNavigate();


  const handleNavbarClick = (id) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
      setActiveOption(null);
    }
  };

  const handleOptionClick = (id) => {
    if (activeOption === id) {
      setActiveOption(null);
    } else {
      setActiveOption(id);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleOpenLoginModal = (currentRoute) => {
    localStorage.setItem('currentRoute', currentRoute);
    setIsLoginModalOpen(true);
    scrollToTop();
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const engineeringOptions = [
    {
      id: 'engineeringStudyMaterial',
      title: 'Study Material',
      icon: <FaRegFile />,
      items: [
        ['Comprehensive Formula Books', '/commingsoon'],
        ['Textbooks and Practice Notebooks', '//s'],
        ['Revision Notes', '//notes'],
        ['Previous Year Paper for JEE', '//year'],
        ['Detailed Topic Wise Notes', '//on'],
      ],
    },

    {
      id: 'engineeringTestSeries',
      title: 'Test Series',
      icon: <FaRegFile />,
      items: [
        ['JEE Main Test Series', '//on'],
        ['JEE Advanced Test Series', '//on'],
      ],
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
    },
    {
      id: 'engineeringColleges',
      title: 'Top 10 Colleges',
      icon: <MdOutlineAssignment />,
      items: [
        ['Last year cutoff for JoSAA', '//on'],
        ['Marks vs Percentile for JEE Mains', '//on'],
      ],
    },
    {
      id: 'quickLinksEngineering',
      title: 'Quick Links',
      icon: <FaRegFile />,
      items: [
        ['Last year cutoff for JoSAA', '//on'],
        ['Marks vs Percentile for JEE Mains', '//on'],
      ],
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
    },
    {
      id: 'managementTestSeries',
      title: 'Test Series',
      icon: <CgNotes />,
      items: [
        ['CAT Test Series', '//on'],
        ['XAT Test Series', '//on'],
      ],
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
    },
    {
      id: 'managementColleges',
      title: 'Top 10 Colleges',
      icon: <MdOutlineAssignment />,
      items: [
        ['Last year cutoff for JoSAA', '//on'],
        ['Marks vs Percentile for JEE Mains', '//on'],
      ],
    },
    {
      id: 'quickLinksManagement',
      title: 'Quick Links',
      icon: <FaRegFile />,
      items: [
        ['Last year cutoff for MBA', '//on'],
        ['Marks vs Percentile for CAT', '//on'],
      ],
    },
  ];

  const navbarElements = [
    {
      id: 'Mentorship',
      element: 'Mentorship',
      options: [],
      to: "/iit-jee-mentorship",
    },
    {
      id: 'Engineering',
      element: 'Engineering',
      options: engineeringOptions,
      to: '',
    },
    {
      id: 'Management',
      element: 'Management',
      options: managementOptions,
      to: '',
    },
    {
      id: 'CollegePredictor',
      element: 'College Predictor',
      options: [],
      to: '/collegepredictor',
    },
  ];

  return (
    <div>
      <nav className="pt-2 pb-4 ">
        <div className="navbar   text-sm space-y-4 lg:hidden">
          {navbarElements.map((item) => (
            <div key={item.id} className="navbar-item">
              <div
                className={`elements flex ${activeDropdown === item.id ? 'text-[#4E18CD]' : 'text-[#292929]'}`}
                onClick={() => handleNavbarClick(item.id)}
              >
                <div className="title cursor-pointer pl-4">
                  {item.options.length > 0 ? (
                    item.element
                  ) : (
                    <Link
                      onClick={() => {
                        setIsMobileNavbarOpen(false);
                      }}
                      to={item.to}
                    >
                      <div className="each-link cursor-pointer">
                        {item.element}
                      </div>
                    </Link>
                  )}
                </div>
                <div className="dropdown-icon ml-1 pt-[4px] cursor-pointer">
                  {item.options.length > 0 && (
                    <IoCaretDownOutline
                      className={`transform ${activeDropdown === item.id ? 'rotate-180' : ''}`}
                    />
                  )}
                </div>
              </div>
              {item.options.length > 0 && activeDropdown === item.id && (
                <div className="dropdown-content ml-4 pt-4 pb-1 text-sm">
                  {item.options.map((option) => (
                    <div key={option.id} className="sub-navbar-item">
                      <div
                        className={`options flex mb-3 cursor-pointer  ${activeOption === option.id ? 'text-[#4E18CD]' : 'text-[#292929]'}`}
                        onClick={() => handleOptionClick(option.id)}
                      >
                        <div className="icon rounded-full px-1 py-1 font-semibold mr-4 bg-[#4E18CD] text-white">
                          {option.icon}
                        </div>
                        <div className="option-title">{option.title}</div>
                        <div className="dropdownn-icon ml-1 pt-[4px]">
                          {option.items.length > 0 && (
                            <IoCaretDownOutline
                              className={`transform ${activeOption === option.id ? 'rotate-180' : ''}`}
                            />
                          )}
                        </div>
                      </div>
                      {option.items.length > 0 &&
                        activeOption === option.id && (
                          <div className="dropdown-content flex flex-col ml-10">
                            {option.items.map(([label, link], index) => (
                              <Link
                                className="mb-3 hover:text-[#4E18CD]"
                                key={index}
                                onClick={() => {
                                  setIsMobileNavbarOpen(false);
                                }}
                                to={link}
                              >
                                {label}
                              </Link>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="auth-btn pt-4 pb-2 pl-3">
          {isAuthenticated ? (

            <UserBox isMobile="Mobile" />

          ) : (
            <div>
              <button
                onClick={() => handleOpenLoginModal(location.pathname)}
                className="justify-center pl-4 px-4 lg:px-8 py-1.5 text-sm text-white lg:text-base bg-[#4E18CD] rounded-full"
              >
                Sign In
              </button>
            </div>
          )}
        </div>
      </nav>
      {isLoginModalOpen && <UserLogin onClose={handleCloseLoginModal} />}
    </div>
  );
};

StoreMobileNavbar.propTypes = {
  setIsMobileNavbarOpen: PropTypes.func,
}
export default StoreMobileNavbar;
