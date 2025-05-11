import { Transition } from '@headlessui/react';
import styled from 'styled-components';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Rotate90DegreesCcw } from "@mui/icons-material";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showEngineeringDropdown, setShowEngineeringDropdown] = useState(false);
  const [showMedicalDropdown, setShowMedicalDropdown] = useState(false);
  const [showTestDropdown, setshowTestDropdown] = useState(false);
  const [showNotesDropdown, setshowNotesDropdown] = useState(false);
  const handleEngineeringMouseEnter = () => {
    setShowEngineeringDropdown(true);
    setShowMedicalDropdown(false);
  };

  const handleEngineeringMouseLeave = () => {
    setShowEngineeringDropdown(false);
  };

  const handleMedicalMouseEnter = () => {
    setShowMedicalDropdown(true);
    setShowEngineeringDropdown(false);
  };

  const handleMedicalMouseLeave = () => {
    setShowMedicalDropdown(false);
  };
  //Test Series
  const handleTestMouseEnter = () => {
    setshowTestDropdown(true);
  };
  const handleTestMouseLeave = () => {
    setshowTestDropdown(false);
  };
  //Notes
  const handleNotesMouseEnter = () => {
    setshowNotesDropdown(true);
  };
  const handleNotesMouseLeave = () => {
    setshowNotesDropdown(false);
  };
  const handleTestChange = () => {
    setshowTestDropdown(!showTestDropdown);
    setshowNotesDropdown(false);
  };
  const handleNotesChange = () => {
    setshowNotesDropdown(!showNotesDropdown);
    setshowTestDropdown(false);
  };

  const GlassDiv = styled.div`
    position: relative;
    z-index: 50;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(2px);
  `;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <nav className="top-0 shadow-lg w-full fixed z-50">
        <GlassDiv>
          <div className="max-w-full md:mx-[50px] mr-10 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a href="www.marg-darshan.com" onClick={scrollToTop}>
                <img
                  className="h-32 w-32 rounded-full"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0aebaa194f27814b6b5dbaaaac4c871842ff75e1e998dbe32161c0197fd5c04a?apiKey=9a32bc866e724018820ce764b81eba46&"
                  alt=""
                />
              </a>
              <div className="flex items-center">
                <div className="flex-shrink-0"></div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-7">
                    <Link
                      to="#"
                      className=" hover:underline text-[#292929] px-3 py-2 rounded-md text-md hover:transform hover:scale-105 transition-transform font-normal"
                      onClick={scrollToTop}
                    >
                      Blog
                    </Link>

                    <Link
                      to="#"
                      className=" flex cursor-pointer relative hover:underline text-[#292929] px-3 py-2 rounded-md text-md hover:transform hover:scale-105 transition-transform font-normal"
                      onMouseEnter={handleEngineeringMouseEnter}
                      onMouseLeave={handleEngineeringMouseLeave}
                      onClick={scrollToTop}
                    >
                      Engineering{' '}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/32c111e0875e184e37b5c3f8815995670f06a0fb7578407e8ce21bcbbfd3f815?apiKey=9a32bc866e724018820ce764b81eba46&"
                        alt=""
                        className={`shrink-0 ml-1 mt-1 aspect-[1.37] fill-black w-[11px] ${
                          showEngineeringDropdown ? 'rotate-[180deg]' : ''
                        }`}
                      />
                      {showEngineeringDropdown && (
                        <div className="absolute bg-white border shadow-md mt-6 p-2">
                          <ul>
                            <li>
                              {' '}
                              <Link
                                to="#"
                                className=" flex cursor-pointer relative hover:underline text-[#292929] px-3 py-2 rounded-md text-md hover:transform hover:scale-105 transition-transform font-normal"
                                onMouseEnter={handleTestMouseEnter}
                                onMouseLeave={handleTestMouseLeave}
                                onClick={scrollToTop}
                              >
                                Test{' '}
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/32c111e0875e184e37b5c3f8815995670f06a0fb7578407e8ce21bcbbfd3f815?apiKey=9a32bc866e724018820ce764b81eba46&"
                                  alt=""
                                  className={`shrink-0 ml-1 mt-1 aspect-[1.37] fill-black w-[11px] ${
                                    showTestDropdown ? 'rotate-[-90deg]' : ''
                                  }`}
                                />
                                {showTestDropdown && (
                                  <div className="absolute ml-12 bg-white border shadow-md w-48 mt-1 p-2">
                                    <ul>
                                      <li className="hover:underline">
                                        {' '}
                                        <Link to="#">
                                          Jee Mains Test Series
                                        </Link>
                                      </li>
                                      <li className="hover:underline">
                                        <Link to="#">
                                          Jee Advance Test Series
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                )}
                              </Link>
                            </li>
                            <li>
                              {' '}
                              <Link
                                to="#"
                                className=" flex cursor-pointer relative hover:underline text-[#292929] px-3 py-2 rounded-md text-md hover:transform hover:scale-105 transition-transform font-normal"
                                onMouseEnter={handleNotesMouseEnter}
                                onMouseLeave={handleNotesMouseLeave}
                                onClick={scrollToTop}
                              >
                                Notes{' '}
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/32c111e0875e184e37b5c3f8815995670f06a0fb7578407e8ce21bcbbfd3f815?apiKey=9a32bc866e724018820ce764b81eba46&"
                                  alt=""
                                  className={`shrink-0 ml-1 mt-1 aspect-[1.37] fill-black w-[11px] ${
                                    showNotesDropdown ? 'rotate-[-90deg]' : ''
                                  }`}
                                />
                                {showNotesDropdown && (
                                  <div className="absolute ml-14 bg-white border  shadow-md w-72 mt-1 p-2">
                                    <ul>
                                      <li className="hover:underline">
                                        <Link to="#">NCERT</Link>
                                      </li>
                                      <li className="hover:underline">
                                        {' '}
                                        <Link to="#">
                                          Previose Year Questions For Jee Mains
                                        </Link>
                                      </li>
                                      <li className="hover:underline">
                                        <Link to="#">
                                          Formula Books For Jee Mains
                                        </Link>
                                      </li>
                                      <li className="hover:underline">
                                        <Link to="#">
                                          Formula Books For Jee Advance
                                        </Link>
                                      </li>
                                      <li className="hover:underline">
                                        <Link to="#">
                                          Complete Notes For Jee Mains
                                        </Link>
                                      </li>
                                      <li className="hover:underline">
                                        <Link to="#">
                                          Complete Notes For Jee Advance
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                )}
                              </Link>
                            </li>
                            <li className="hover:underline">Assignments</li>
                          </ul>
                        </div>
                      )}
                    </Link>

                    <Link
                      to="#"
                      className="flex hover:underline text-[#292929] px-3 py-2 rounded-md text-md hover:transform hover:scale-105 transition-transform font-normal cursor-pointer relative"
                      onMouseEnter={handleMedicalMouseEnter}
                      onMouseLeave={handleMedicalMouseLeave}
                      onClick={scrollToTop}
                    >
                      Medical
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/32c111e0875e184e37b5c3f8815995670f06a0fb7578407e8ce21bcbbfd3f815?apiKey=9a32bc866e724018820ce764b81eba46&"
                        alt=""
                        className={`shrink-0 ml-1 mt-1 aspect-[1.37] fill-black w-[11px] ${
                          showMedicalDropdown ? 'rotate-[180deg]' : ''
                        }`}
                      />
                      {showMedicalDropdown && (
                        <div className="absolute mt-6 bg-white border shadow-md p-2">
                          <ul>
                            <li>
                              {' '}
                              <Link
                                to="#"
                                className=" flex cursor-pointer relative hover:underline text-[#292929] px-3 py-2 rounded-md text-md hover:transform hover:scale-105 transition-transform font-normal"
                                onMouseEnter={handleTestMouseEnter}
                                onMouseLeave={handleTestMouseLeave}
                                onClick={scrollToTop}
                              >
                                Test{' '}
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/32c111e0875e184e37b5c3f8815995670f06a0fb7578407e8ce21bcbbfd3f815?apiKey=9a32bc866e724018820ce764b81eba46&"
                                  alt=""
                                  className={`shrink-0 ml-1 mt-1 aspect-[1.37] fill-black w-[11px] ${
                                    showTestDropdown ? 'rotate-[-90deg]' : ''
                                  }`}
                                />
                                {showTestDropdown && (
                                  <div className="absolute ml-12 bg-white border shadow-md w-48 mt-1 p-2">
                                    <ul>
                                      <li className="hover:underline">
                                        {' '}
                                        <Link to="#">NEET Test Series</Link>
                                      </li>
                                    </ul>
                                  </div>
                                )}
                              </Link>
                            </li>
                            <li>
                              {' '}
                              <Link
                                to="#"
                                className=" flex cursor-pointer relative hover:underline text-[#292929] px-3 py-2 rounded-md text-md hover:transform hover:scale-105 transition-transform font-normal"
                                onMouseEnter={handleNotesMouseEnter}
                                onMouseLeave={handleNotesMouseLeave}
                                onClick={scrollToTop}
                              >
                                Notes{' '}
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/32c111e0875e184e37b5c3f8815995670f06a0fb7578407e8ce21bcbbfd3f815?apiKey=9a32bc866e724018820ce764b81eba46&"
                                  alt=""
                                  className={`shrink-0 ml-1 mt-1 aspect-[1.37] fill-black w-[11px] ${
                                    showNotesDropdown ? 'rotate-[-90deg]' : ''
                                  }`}
                                />
                                {showNotesDropdown && (
                                  <div className="absolute ml-14 bg-white border shadow-md w-56 mt-1 p-2">
                                    <ul>
                                      <li className="hover:underline">
                                        <Link to="#">NCERT</Link>
                                      </li>
                                      <li className="hover:underline">
                                        {' '}
                                        <Link to="#">
                                          Previose Year Questions
                                        </Link>
                                      </li>
                                      <li className="hover:underline">
                                        <Link to="#">Short Notes For NEET</Link>
                                      </li>
                                      <li className="hover:underline">
                                        <Link to="#">
                                          Complete Notes For NEET
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                )}
                              </Link>
                            </li>
                            <li className="hover:underline">Assignments</li>
                          </ul>
                        </div>
                      )}
                    </Link>

                    <Link
                      to="collegepredictor"
                      className=" hover:underline text-[#292929] px-3 py-2 rounded-md text-md hover:transform hover:scale-105 transition-transform font-normal"
                      onClick={scrollToTop}
                    >
                      College Predictor
                    </Link>

                    <Link to="login" onClick={scrollToTop}>
                      <button className="justify-center px-8 py-1.5 text-base bg-violet-800  rounded-3xl text-slate-200 max-md:px-5">
                        Sign In
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="-mr-2 justify-center items-center flex md:hidden ">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-white inline-flex items-center justify-center p-2 rounded-md  "
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div
                className="md:hidden flex justify-center  bg-body w-full absolute z-50"
                id="mobile-menu"
              >
                <div
                  ref={ref}
                  className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white"
                >
                  <Link
                    to="#"
                    className="hover:underline text-[#292929] block px-3 py-2 rounded-md text-base font-normal"
                    onClick={scrollToTop}
                  >
                    Blogs
                  </Link>

                  <Link
                    to="#"
                    className=" flex cursor-pointer relative hover:underline text-[#292929] px-3 py-2 rounded-md text-md hover:transform hover:scale-105 transition-transform font-normal"
                    onMouseEnter={handleEngineeringMouseEnter}
                    onMouseLeave={handleEngineeringMouseLeave}
                    onClick={scrollToTop}
                  >
                    Engineering{' '}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/32c111e0875e184e37b5c3f8815995670f06a0fb7578407e8ce21bcbbfd3f815?apiKey=9a32bc866e724018820ce764b81eba46&"
                      alt=""
                      className={`shrink-0 ml-1 mt-1 aspect-[1.37] fill-black w-[11px] ${
                        showEngineeringDropdown ? 'rotate-[180deg]' : ''
                      }`}
                    />
                    {showEngineeringDropdown && (
                      <div className="absolute bg-white border shadow-md mt-6 p-2">
                        <ul>
                          <li>
                            {' '}
                            <Link
                              to="#"
                              className=" flex cursor-pointer relative hover:underline text-[#292929] px-3 py-2 rounded-md text-md hover:transform hover:scale-105 transition-transform font-normal"
                              onMouseOver={handleTestChange}
                              onClick={scrollToTop}
                            >
                              Test{' '}
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/32c111e0875e184e37b5c3f8815995670f06a0fb7578407e8ce21bcbbfd3f815?apiKey=9a32bc866e724018820ce764b81eba46&"
                                alt=""
                                className={`shrink-0 ml-1 mt-1 aspect-[1.37] fill-black w-[11px] ${
                                  showTestDropdown ? 'rotate-[-90deg]' : ''
                                }`}
                              />
                              {showTestDropdown && (
                                <div className="absolute ml-12 bg-white border shadow-md w-48 mt-1 p-2">
                                  <ul>
                                    <li className="hover:underline">
                                      {' '}
                                      <Link to="#">Jee Mains Test Series</Link>
                                    </li>
                                    <li className="hover:underline">
                                      <Link to="#">
                                        Jee Advance Test Series
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              )}
                            </Link>
                          </li>
                          <li>
                            {' '}
                            <Link
                              to="#"
                              className=" flex cursor-pointer relative hover:underline text-[#292929] px-3 py-2 rounded-md text-md hover:transform hover:scale-105 transition-transform font-normal"
                              onMouseOver={handleNotesChange}
                              onClick={scrollToTop}
                            >
                              Notes{' '}
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/32c111e0875e184e37b5c3f8815995670f06a0fb7578407e8ce21bcbbfd3f815?apiKey=9a32bc866e724018820ce764b81eba46&"
                                alt=""
                                className={`shrink-0 ml-1 mt-1 aspect-[1.37] fill-black w-[11px] ${
                                  showNotesDropdown ? 'rotate-[-90deg]' : ''
                                }`}
                              />
                              {showNotesDropdown && (
                                <div className="absolute flex items-center justify-center bg-white border z-50 shadow-md w-48 mt-1 p-2">
                                  <ul>
                                    <li className="hover:underline">
                                      <Link to="#">NCERT</Link>
                                    </li>
                                    <li className="hover:underline">
                                      {' '}
                                      <Link to="#">
                                        Previose Year Questions For Jee Mains
                                      </Link>
                                    </li>
                                    <li className="hover:underline">
                                      <Link to="#">
                                        Formula Books For Jee Mains
                                      </Link>
                                    </li>
                                    <li className="hover:underline">
                                      <Link to="#">
                                        Formula Books For Jee Advance
                                      </Link>
                                    </li>
                                    <li className="hover:underline">
                                      <Link to="#">
                                        Complete Notes For Jee Mains
                                      </Link>
                                    </li>
                                    <li className="hover:underline">
                                      <Link to="#">
                                        Complete Notes For Jee Advance
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              )}
                            </Link>
                          </li>
                          <li className="hover:underline">Assignments</li>
                        </ul>
                      </div>
                    )}
                  </Link>

                  <Link
                    to="#"
                    className="flex hover:underline text-[#292929] px-3 py-2 rounded-md text-md hover:transform hover:scale-105 transition-transform font-normal cursor-pointer relative"
                    onMouseEnter={handleMedicalMouseEnter}
                    onMouseLeave={handleMedicalMouseLeave}
                    onClick={scrollToTop}
                    style={{
                      marginTop: showEngineeringDropdown ? '7rem' : '0',
                    }} // Adjust the marginTop based on the Engineering dropdown visibility
                  >
                    Medical
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/32c111e0875e184e37b5c3f8815995670f06a0fb7578407e8ce21bcbbfd3f815?apiKey=9a32bc866e724018820ce764b81eba46&"
                      alt=""
                      className={`shrink-0 ml-1 mt-1 aspect-[1.37] fill-black w-[11px] ${
                        showMedicalDropdown ? 'rotate-[180deg]' : ''
                      }`}
                    />
                    {showMedicalDropdown && (
                      <div className="absolute mt-6 bg-white border shadow-md p-2">
                        <ul>
                          <li>
                            <Link
                              to="#"
                              className="flex cursor-pointer relative hover:underline text-[#292929] px-3 py-2 rounded-md text-md hover:transform hover:scale-105 transition-transform font-normal"
                              onMouseOver={handleTestChange}
                              onClick={scrollToTop}
                            >
                              Test
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/32c111e0875e184e37b5c3f8815995670f06a0fb7578407e8ce21bcbbfd3f815?apiKey=9a32bc866e724018820ce764b81eba46&"
                                alt=""
                                className={`shrink-0 ml-1 mt-1 aspect-[1.37] fill-black w-[11px] ${
                                  showTestDropdown ? 'rotate-[-90deg]' : ''
                                }`}
                              />
                              {showTestDropdown && (
                                <div className="relative flex items-center justify-center bg-white border shadow-md w-48 mt-1 p-2">
                                  <ul>
                                    <li className="hover:underline">
                                      <Link to="#">NEET Test Series</Link>
                                    </li>
                                  </ul>
                                </div>
                              )}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="flex cursor-pointer relative hover:underline text-[#292929] px-3 py-2 rounded-md text-md hover:transform hover:scale-105 transition-transform font-normal"
                              onMouseOver={handleNotesChange}
                              onClick={scrollToTop}
                            >
                              Notes
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/32c111e0875e184e37b5c3f8815995670f06a0fb7578407e8ce21bcbbfd3f815?apiKey=9a32bc866e724018820ce764b81eba46&"
                                alt=""
                                className={`shrink-0 ml-1 mt-1 aspect-[1.37] fill-black w-[11px] ${
                                  showNotesDropdown ? 'rotate-[-90deg]' : ''
                                }`}
                              />
                              {showNotesDropdown && (
                                <div className="absolute ml-12 bg-white border shadow-md w-56 mt-1 p-2">
                                  <ul>
                                    <li className="hover:underline">
                                      <Link to="#">NCERT</Link>
                                    </li>
                                    <li className="hover:underline">
                                      <Link to="#">
                                        Previose Year Questions
                                      </Link>
                                    </li>
                                    <li className="hover:underline">
                                      <Link to="#">Short Notes For NEET</Link>
                                    </li>
                                    <li className="hover:underline">
                                      <Link to="#">
                                        Complete Notes For NEET
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              )}
                            </Link>
                          </li>
                          <li className="hover:underline">Assignments</li>
                        </ul>
                      </div>
                    )}
                  </Link>

                  <Link
                    to="collegepredictor"
                    className=" hover:underline text-[#292929] block px-3 py-2 rounded-md text-base font-normal"
                    onClick={scrollToTop}
                    style={{ marginTop: showMedicalDropdown ? '7rem' : '0' }}
                  >
                    College Predictor
                  </Link>
                  <Link to="login" onClick={scrollToTop}>
                    <button className="justify-center px-8 py-1.5 text-base bg-violet-800 rounded-3xl text-slate-200 max-md:px-5">
                      Sign In
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </Transition>
        </GlassDiv>
      </nav>
      <div className="mb-16 shadow-md"></div>
    </>
  );
};

export default Navbar;
