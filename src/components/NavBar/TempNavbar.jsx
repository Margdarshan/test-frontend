import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoCaretDownOutline } from 'react-icons/io5';
import SubNavbar from './SubNavbar';
import { IoClose } from 'react-icons/io5';
import StoreMobileNavbar from './StoreMobileNavbar';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import { FaCartShopping } from 'react-icons/fa6';
import { RiMenu4Fill } from 'react-icons/ri';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import UserLogin from '../Login/UserLogin';
import useAuthStore from '../../store/authStore';
import UserBox from './UserBox';


export const settings = [
  {
    name: 'My Profile',
    link: 'frontend/user-profile',
    icon: <IoPersonCircleOutline />,
  },
  {
    name: 'Study Material',
    link: 'frontend/study-material',
    icon: <MdOutlineLibraryBooks />,
  },
];

const TempNavbar = () => {
  const [showEngineeringDropdown, setShowEngineeringDropdown] = useState(false);
  const [showManagementDropdown, setshowManagementDropdown] = useState(false);
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
  const { isAuthenticated } = useAuthStore()
  const [anchorElUser, setAnchorElUser] = useState(null);
  const menuRef = useRef(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const location = useLocation(); // Use the hook at the top level


  const toggleMobileNavbar = () => {
    setIsMobileNavbarOpen(!isMobileNavbarOpen);
  };

  const handleEngineeringMouseEnter = () => {
    setShowEngineeringDropdown(true);
    setshowManagementDropdown(false);
  };

  const handleEngineeringMouseLeave = () => {
    setShowEngineeringDropdown(false);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleManagementMouseEnter = () => {
    setshowManagementDropdown(true);
    setShowEngineeringDropdown(false);
  };

  const handleManagementMouseLeave = () => {
    setshowManagementDropdown(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileNavbarOpen) {
        setIsMobileNavbarOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobileNavbarOpen]);



  const handleOpenLoginModal = (currentRoute) => {
    localStorage.setItem('currentRoute', currentRoute);
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  useEffect(() => {
    // Close the menu if clicked outside of it
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleCloseUserMenu();
      }
    };

    if (anchorElUser) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [anchorElUser]);

  return (
    <>
      <nav className="top-0 w-full fixed z-50 ">
        <div className="relative z-50 ">
          <div className="max-w-full mx-[20px] md:mx-[20px] lg:mx-[50px]  sm:px-2 lg:px-4 xl:px-8  bg-white sm:shadow-xl rounded-2xl mt-2 ">
            <div className="flex items-center justify-between h-16 pl-2   ">
              <div className="brand">
                <Link to="/frontend/" onClick={scrollToTop}>
                  <img
                    className="w-32"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0aebaa194f27814b6b5dbaaaac4c871842ff75e1e998dbe32161c0197fd5c04a?apiKey=9a32bc866e724018820ce764b81eba46&"
                    alt=""
                  />
                </Link>
              </div>
              <div className="nav-items flex items-center ">
                <div className="hidden lg:flex lg:justify-center ">
                  <div className=" flex  space-x-5 xl:space-x-[57px]">
                    <div className="each-item pt-3">
                      <Link
                        to="/frontend/mentorship"
                        onClick={scrollToTop}
                        className=" hover:text-[#4E18CD] no-underline hover:no-underline cursor-pointer text-[#292929] text-md font-normal"
                      >
                        Mentorship
                      </Link>
                    </div>
                    <div className="each-item">
                      <Link
                        to="/frontend/study-material"
                        onClick={scrollToTop}
                        className="flex relative py-3 hover:text-[#4E18CD] no-underline hover:no-underline cursor-pointer text-[#292929] text-md font-normal"
                        onMouseEnter={handleEngineeringMouseEnter}
                        onMouseLeave={handleEngineeringMouseLeave}
                      >
                        <div className="mr-1">Engineering</div>
                        <div className="pt-[6px]">
                          <IoCaretDownOutline
                            className={`${showEngineeringDropdown ? 'rotate-[180deg]' : ''
                              }`}
                          />
                        </div>
                        {showEngineeringDropdown && (
                          <SubNavbar isEngineering={true} />
                        )}
                      </Link>
                    </div>
                    <div className="each-item ">
                      <Link
                        to="#"
                        className="flex relative py-3 hover:text-[#4E18CD] no-underline hover:no-underline cursor-pointer text-[#292929] text-md font-normal"
                        onMouseEnter={handleManagementMouseEnter}
                        onMouseLeave={handleManagementMouseLeave}
                        onClick={scrollToTop}
                      >
                        <div className="mr-1">Management</div>
                        <div className="pt-[6px]">
                          <IoCaretDownOutline
                            className={`${showManagementDropdown ? 'rotate-[180deg]' : ''
                              }`}
                          />
                        </div>
                        {showManagementDropdown && (
                          <SubNavbar isEngineering={false} />
                        )}
                      </Link>
                    </div>
                    <div className="each-item pt-3">
                      <Link

                        to="frontend/collegepredictor"
                        onClick={scrollToTop}
                        className=" hover:text-[#4E18CD] no-underline hover:no-underline cursor-pointer text-[#292929] text-md font-normal"
                      >
                        College Predictor
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="each-item flex justify-center items-center  space-x-4 lg:space-x-2  xl:space-x-6 pr-2">
                <div className="flex justify-center items-center">
                  <Tooltip>
                    <Link to="frontend/cart">
                      <div className="p-2 text-xs sm:text-lg  bg-[#4E18CD] rounded-md text-white">
                        <FaCartShopping />

                      </div>
                    </Link>
                  </Tooltip>
                </div>

                {isAuthenticated ?

                  <div className="hidden lg:block">
                    <UserBox isMobile="large" />
                  </div>
                  : (<div className="hidden lg:flex space-x-3">
                    <button
                      onClick={() => handleOpenLoginModal(location.pathname)}
                      className="justify-center my-2 px-4 lg:px-8 py-1.5 text-md text-[#4E18CD] text-xs lg:text-sm font-semibold border border-[#4E18CD] bg-white rounded-full"
                    >
                      Sign In
                    </button>
                  </div>

                  )}
                <div className="hamburger-button text-xl lg:hidden flex justify-end ">
                  <button
                    className="block lg:hidden"
                    onClick={toggleMobileNavbar}
                  >
                    {isMobileNavbarOpen ? (
                      <IoClose />
                    ) : (
                      <RiMenu4Fill className="text-[#4E18CD] text-2xl" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              {isMobileNavbarOpen && (
                <StoreMobileNavbar
                  setIsMobileNavbarOpen={setIsMobileNavbarOpen}
                />
              )}
            </div>
          </div>
        </div>
      </nav>
      {isLoginModalOpen && <UserLogin onClose={handleCloseLoginModal} />}
    </>
  );
};

export default TempNavbar;
