import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { TiThList } from 'react-icons/ti';
import { MdLibraryAdd } from 'react-icons/md';
import { BiSolidCommentDetail } from 'react-icons/bi';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { RiMessage3Fill } from 'react-icons/ri';
import { FaUsersRectangle } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
import { MdEngineering } from 'react-icons/md';
import { FaStethoscope } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa6';
import { IoIosPaper } from 'react-icons/io';
import { PiExamFill } from 'react-icons/pi';

const sidePanelData = [
  {
    id: 1,
    icon: <AiFillHome />,
    optionName: 'Dashboard',
    path: '/admin/',
  },
  {
    id: 2,
    icon: <TiThList />,
    optionName: 'Blog List',
    path: '//g-list',
  },
  {
    id: 3,
    icon: <MdLibraryAdd />,
    optionName: 'Add Blog',
    path: '//g-new',
  },
  {
    id: 4,
    icon: <BiSolidCommentDetail />,
    optionName: 'Blog Comments',
    path: '//g-comment',
  },
  {
    id: 5,
    icon: <BiSolidCategoryAlt />,
    optionName: 'Blog Category',
    path: '//g-category',
  },
  {
    id: 6,
    icon: <RiMessage3Fill />,
    optionName: 'OTP Message',
    path: '//-message',
  },
  {
    id: 7,
    icon: <FaUser />,
    optionName: 'Users',
    path: '//rs',
  },
  {
    id: 8,
    icon: <FaUsersRectangle />,
    optionName: 'News Letter',
    path: '//s-letter',
  },
  {
    id: 9,
    icon: <ImBooks />,
    optionName: 'Study Material',
    path: '//dy-material',
    childItem: [
      {
        id: 1,
        icon: <MdEngineering />,
        optionName: 'JEE',
        path: '//dy-material/jee',
        childItem: [
          {
            id: 1,
            icon: <FaBook />,
            optionName: 'NCERT Books',
            path: '//dy-material/jee/ncert-books',
          },
          {
            id: 2,
            icon: <IoIosPaper />,
            optionName: 'Previous Year Papers',
            path: '//dy-material/jee/previous-year-papers',
          },
          {
            id: 3,
            icon: <PiExamFill />,
            optionName: 'Test Series',
            path: '//dy-material/jee/test-series',
          },
        ],
      },
      {
        id: 2,
        icon: <FaStethoscope />,
        optionName: 'NEET',
        path: '//dy-material/neet',
        childItem: [
          {
            id: 1,
            icon: <FaBook />,
            optionName: 'NCERT Books',
            path: '//dy-material/neet/ncert-books',
          },
          {
            id: 2,
            icon: <IoIosPaper />,
            optionName: 'Previous Year Papers',
            path: '//dy-material/neet/previous-year-papers',
          },
          {
            id: 3,
            icon: <PiExamFill />,
            optionName: 'Test Series',
            path: '//dy-material/neet/test-series',
          },
        ],
      },
    ],
  },
];

export default sidePanelData;
