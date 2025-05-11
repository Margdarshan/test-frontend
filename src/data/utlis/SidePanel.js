import React from "react";
import { AiFillHome } from "react-icons/ai";
import { TiThList } from "react-icons/ti";
import { MdLibraryAdd } from "react-icons/md";
import { BiSolidCommentDetail } from "react-icons/bi";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { RiMessage3Fill } from "react-icons/ri";
import { FaUsersRectangle } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { MdEngineering } from "react-icons/md";
import { FaStethoscope } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { IoIosPaper } from "react-icons/io";
import { PiExamFill } from "react-icons/pi";


const sidePanelData = [
    {
        id: 1,
        icon: <AiFillHome />,
        optionName: "Dashboard",
        path: "/frontend/admin/"
    },
    {
        id: 2,
        icon: <TiThList />,
        optionName: "Blog List",
        path: "/frontend/admin/blog-list"
    },
    {
        id: 3,
        icon: <MdLibraryAdd />,
        optionName: "Add Blog",
        path: "/frontend/admin/blog-new"
    },
    {
        id: 4,
        icon: <BiSolidCommentDetail />,
        optionName: "Blog Comments",
        path: "/frontend/admin/blog-comment"
    },
    {
        id: 5,
        icon: <BiSolidCategoryAlt />,
        optionName: "Blog Category",
        path: "/frontend/admin/blog-category"
    },
    {
        id: 6,
        icon: <RiMessage3Fill />,
        optionName: "OTP Message",
        path: "/frontend/admin/otp-message"
    },
    {
        id: 7,
        icon: <FaUser />,
        optionName: "Users",
        path: "/frontend/admin/users"
    },
    {
        id: 8,
        icon: <FaUsersRectangle />,
        optionName: "News Letter",
        path: "/frontend/admin/news-letter"
    },
    {
        id: 9,
        icon: <ImBooks />,
        optionName: "Study Material",
        path: "/frontend/admin/study-material",
        childItem : [
            {
                id: 1,
                icon: <MdEngineering />,
                optionName: "JEE",
                path: "/frontend/admin/study-material/jee",
                childItem:[
                    {
                        id: 1,
                        icon: <FaBook />,
                        optionName: "NCERT Books",
                        path:"/frontend/admin/study-material/jee/ncert-books"
                    },
                    {
                        id: 2,
                        icon: <IoIosPaper />,
                        optionName: "Previous Year Papers",
                        path:"/frontend/admin/study-material/jee/previous-year-papers"
                    },
                    {
                        id: 3,
                        icon: <PiExamFill />,
                        optionName: "Test Series",
                        path:"/frontend/admin/study-material/jee/test-series"
                    }
                ],

            },
            {
                id: 2,
                icon: <FaStethoscope />,
                optionName: "NEET",
                path: "/frontend/admin/study-material/neet",
                childItem:[
                    {
                        id: 1,
                        icon: <FaBook />,
                        optionName: "NCERT Books",
                        path:"/frontend/admin/study-material/neet/ncert-books"
                    },
                    {
                        id: 2,
                        icon: <IoIosPaper />,
                        optionName: "Previous Year Papers",
                        path:"/frontend/admin/study-material/neet/previous-year-papers"
                    },
                    {
                        id: 3,
                        icon: <PiExamFill />,
                        optionName: "Test Series",
                        path:"/frontend/admin/study-material/neet/test-series"
                    }
                ]

            }
        ]

    }
]

export default sidePanelData;