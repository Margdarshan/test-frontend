/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCaretUpOutline } from 'react-icons/io5';
import { IoCaretDownOutline } from 'react-icons/io5';
import { FaRegFile } from 'react-icons/fa';
import { CgNotes } from 'react-icons/cg';
import { MdOutlineAssignment } from 'react-icons/md';
// import Login from '../Login/Login';
import PropTypes from 'prop-types';
import UserLogin from '../Login/UserLogin';

const engineeringOptions = [
  {
    title: 'Test Series',
    items: [
      <Link key={5} to="https://marg-darshan.com/test-series/iit">
        JEE Main Test Series
      </Link>,
      <Link key={6} to="/commingsoon">JEE Advanced Test Series</Link>,
    ],
  },
  {
    title: 'Notes',
    items: [
      <Link key={"ncert"} to="https://marg-darshan.com/study-material/ncert-books/ncert-books-for-class-12th/ncert-books-for-class-12th-overall">
        NCERT
      </Link>,
      <Link key={"pyq"} to="https://marg-darshan.com/study-material/previous-year-paper/jee-mains/jee-mains-january-2020-with-solution">
        PYQ's for JEE Main
      </Link>,
      <Link key={'formula'} to="https://marg-darshan.com/study-material/notes/formula-book/formula-book-for-jee-main-2023">
        Formula Books For JEE Main
      </Link>,
      <Link key={'notes1'} to="https://marg-darshan.com/study-material/notes/complete-notes-for-jee/jee-main-2023-physics-complete-notes">
        Complete Notes For JEE Main (Physics)
      </Link>,
      <Link key={"notes2"} to="https://marg-darshan.com/study-material/notes/complete-notes-for-jee/jee-main-2023-chemistry-complete-notes">
        Complete Notes For JEE Main (Chemistry)
      </Link>,
    ],
  },
  {
    title: 'Assignment',
  },
];

const neetOptions = [
  {
    title: 'Test Series',
    items: [
      <Link key={1} to="https://marg-darshan.com/study-material/previous-year-paper/neet/neet-pyqs-with-solutions">
        NEET Test Series
      </Link>,
    ],
  },
  {
    title: 'Notes',
    items: [
      <Link key={2} to="https://marg-darshan.com/study-material/previous-year-paper/neet/neet-pyqs-with-solutions">
        Previous Year Questions
      </Link>,
      <Link key={3} to="//on">Short Notes for NEET</Link>,
      <Link key={4} to="//on">Complete Notes for NEET</Link>,
    ],
  },
  {
    title: 'Assignment',
  },
];

const MobileNavbar = () => {
  const [isEngineeringOpen, setIsEngineeringOpen] = useState(false);
  const [isMedicalOpen, setIsMedicalOpen] = useState(false);
  const [isEngineeringTestOpen, setIsEngineeringTestOpen] = useState(false);
  const [isEngineeringNotesOpen, setIsEngineeringNotesOpen] = useState(false);
  const [isMedicalTestOpen, setIsMedicalTestOpen] = useState(false);
  const [isMedicalNotesOpen, setIsMedicalNotesOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleEngineering = () => {
    setIsEngineeringOpen(!isEngineeringOpen);
    setIsMedicalOpen(false);
  };

  const toggleMedical = () => {
    setIsMedicalOpen(!isMedicalOpen);
    setIsEngineeringOpen(false);
  };

  const toggleEngineeringTest = () => {
    setIsEngineeringTestOpen(!isEngineeringTestOpen);
    setIsEngineeringNotesOpen(false);
  };

  const toggleEngineeringNotes = () => {
    setIsEngineeringNotesOpen(!isEngineeringNotesOpen);
    setIsEngineeringTestOpen(false);
  };

  const toggleMedicalTest = () => {
    setIsMedicalTestOpen(!isMedicalTestOpen);
    setIsMedicalNotesOpen(false);
  };

  const toggleMedicalNotes = () => {
    setIsMedicalNotesOpen(!isMedicalNotesOpen);
    setIsMedicalTestOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
    scrollToTop();
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="flex flex-col bg-[#E5DDF8] p-4 pt-2 text-sm space-y-4 lg:hidden">
      <Link to="/iit-jee-mentorship">
        <div className="each-link cursor-pointer">Mentorship</div>
      </Link>

      <div
        className={`each-link flex  cursor-pointer ${isEngineeringOpen ? 'text-[#4E18CD]' : 'text-[#292929]'
          }`}
        onClick={toggleEngineering}
      >
        <div className="">Engineering</div>
        <div className="ml-1 pt-[4px]">
          {isEngineeringOpen ? <IoCaretUpOutline /> : <IoCaretDownOutline />}
        </div>
      </div>
      {isEngineeringOpen && (
        <div className="ml-4">
          <div
            className={`each-link flex mb-3 cursor-pointer ${isEngineeringTestOpen ? 'text-[#4E18CD]' : 'text-[#292929]'
              }`}
            onClick={toggleEngineeringTest}
          >
            <div className="icon rounded-full px-1 py-1 font-semibold mr-4 bg-[#4E18CD] text-white">
              <FaRegFile />
            </div>
            <div className="">{engineeringOptions[0].title}</div>
            <div className="ml-1 pt-[4px]">
              {isEngineeringTestOpen ? (
                <IoCaretUpOutline />
              ) : (
                <IoCaretDownOutline />
              )}
            </div>
          </div>
          {isEngineeringTestOpen && (
            <div className="ml-4">
              {engineeringOptions[0].items.map((option, index) => (
                <div key={index} className="each-link mb-3 cursor-pointer">
                  {option}
                </div>
              ))}
            </div>
          )}
          <div
            className={`each-link flex mb-3 cursor-pointer ${isEngineeringNotesOpen ? 'text-[#4E18CD]' : 'text-[#292929]'
              }`}
            onClick={toggleEngineeringNotes}
          >
            <div className="icon rounded-full px-1 py-1 font-semibold mr-4 bg-[#4E18CD] text-white">
              <CgNotes />
            </div>
            <div className="">{engineeringOptions[1].title}</div>
            <div className="ml-1 pt-[4px]">
              {isEngineeringNotesOpen ? (
                <IoCaretUpOutline />
              ) : (
                <IoCaretDownOutline />
              )}
            </div>
          </div>
          {isEngineeringNotesOpen && (
            <div className="ml-4">
              {engineeringOptions[1].items.map((option, index) => (
                <div key={index} className="each-link mb-3 cursor-pointer">
                  {option}
                </div>
              ))}
            </div>
          )}
          <div className="each-link flex mb-3 cursor-pointer">
            <div className="icon rounded-full px-1 py-1 font-semibold mr-4 bg-[#4E18CD] text-white">
              {' '}
              <MdOutlineAssignment />
            </div>
            <div className="">{engineeringOptions[2].title}</div>
          </div>
        </div>
      )}
      <div
        className={`each-link flex mb-3 cursor-pointer ${isMedicalOpen ? 'text-[#4E18CD]' : 'text-[#292929]'
          }`}
        onClick={toggleMedical}
      >
        Medical
        <div className="ml-1 pt-[4px]">
          {isMedicalOpen ? <IoCaretUpOutline /> : <IoCaretDownOutline />}
        </div>
      </div>
      {isMedicalOpen && (
        <div className="ml-4">
          <div
            className={`each-link flex mb-3 cursor-pointer ${isMedicalTestOpen ? 'text-[#4E18CD]' : 'text-[#292929]'
              }`}
            onClick={toggleMedicalTest}
          >
            <div className="icon rounded-full px-1 py-1 font-semibold mr-4 bg-[#4E18CD] text-white">
              <FaRegFile />
            </div>
            <div className="">{neetOptions[0].title}</div>
            <div className="ml-1 pt-[4px]">
              {isMedicalTestOpen ? (
                <IoCaretUpOutline />
              ) : (
                <IoCaretDownOutline />
              )}
            </div>
          </div>
          {isMedicalTestOpen && (
            <div className="ml-4">
              {neetOptions[0].items.map((option, index) => (
                <div key={index} className="each-link mb-3 cursor-pointer">
                  {option}
                </div>
              ))}
            </div>
          )}
          <div
            className={`each-link  flex mb-3 cursor-pointer ${isMedicalNotesOpen ? 'text-[#4E18CD]' : 'text-[#292929]'
              }`}
            onClick={toggleMedicalNotes}
          >
            <div className="icon rounded-full px-1 py-1 font-semibold mr-4 bg-[#4E18CD] text-white">
              <CgNotes />
            </div>
            <div className="">{neetOptions[1].title}</div>
            <div className="ml-1 pt-[4px]">
              {isMedicalNotesOpen ? (
                <IoCaretUpOutline />
              ) : (
                <IoCaretDownOutline />
              )}
            </div>
          </div>
          {isMedicalNotesOpen && (
            <div className="ml-4">
              {neetOptions[1].items.map((option, index) => (
                <div key={index} className="each-link mb-3 cursor-pointer">
                  {option}
                </div>
              ))}
            </div>
          )}
          <div className="each-link flex mb-3 cursor-pointer">
            <div className="icon rounded-full px-1 py-1 font-semibold mr-4 bg-[#4E18CD] text-white">
              <MdOutlineAssignment />
            </div>
            <div className="">{neetOptions[2].title}</div>
          </div>
        </div>
      )}
      <Link to="/collegepredictor">
        <div className="each-link mb-3 cursor-pointer">College Predictor</div>
      </Link>
      <div>
        <button
          onClick={handleOpenLoginModal}
          className="justify-center px-4 lg:px-8 py-1.5 text-sm text-white lg:text-base bg-[#4E18CD] rounded-full"
        >
          Sign In
        </button>
      </div>
      {isLoginModalOpen && <UserLogin onClose={handleCloseLoginModal} />}
    </div>
  );
};

MobileNavbar.propTypes = {
  isEngineeringOpen: PropTypes.bool,
  setIsEngineeringOpen: PropTypes.func,
  isMedicalOpen: PropTypes.bool,
  setIsMedicalOpen: PropTypes.func,
  isEngineeringTestOpen: PropTypes.bool,
  setIsEngineeringTestOpen: PropTypes.func,
  isEngineeringNotesOpen: PropTypes.bool,
  setIsEngineeringNotesOpen: PropTypes.func,
  isMedicalTestOpen: PropTypes.bool,
  setIsMedicalTestOpen: PropTypes.func,
  isMedicalNotesOpen: PropTypes.bool,
  setIsMedicalNotesOpen: PropTypes.func,
  isLoginModalOpen: PropTypes.bool,
  setIsLoginModalOpen: PropTypes.func,
};


export default MobileNavbar;
