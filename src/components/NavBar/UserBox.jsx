import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TbLogout2 } from 'react-icons/tb';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import IconButton from '../../core/components/Button/IconButton';
import useAuthStore from '../../store/authStore';
import AvatarName from '../../core/avatarGroup/AvatarName';

const UserBox = ({ isMobile }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { logout, userAvatar, email } = useAuthStore()
  const navigate = useNavigate();

  const settings = [
    {
      name: 'My Profile',
      link: '/user-profile',
      icon: <IoPersonCircleOutline />,
    },
    {
      name: 'Study Material',
      link: '/study-material',
      icon: <MdOutlineLibraryBooks />,
    },
  ];

  const handleLogout = () => {

    navigate('/');
    logout()
    window.location.reload();
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);
  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* <Tooltip title="Profile"> */}
      <IconButton onClick={() => setOpen((prev) => !prev)}>
        <img
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
          }}
          src={"https://img.freepik.com/free-vector/handsome-man_1308-85984.jpg?size=626&ext=jpg"}
          alt='Avtar'
        />
      </IconButton>
      {/* </Tooltip> */}

      {open && (
        <div className={`absolute z-50 w-48 mt-2 ${isMobile === 'Mobile' ? 'left-0' : 'md:right-[-60%]'} bg-white shadow-lg rounded-b-xl px-2 pt-6 pb-7`}>


          <div className="flex flex-col space-y-2 px-4">
            {settings.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="flex items-center space-x-3 hover:text-[#4E18CD]"
              >
                <div className="icon bg-[#DCD1F5] p-1 rounded-full">
                  {item.icon}
                </div>
                <span className="text-sm">{item.name}</span>
              </Link>
            ))}
          </div>
          <div
            onClick={handleLogout}
            className="flex items-center px-4 pt-3 space-x-3 cursor-pointer hover:text-[#4E18CD]"
          >
            <div className="icon bg-[#DCD1F5] p-1 rounded-full">
              <TbLogout2 />
            </div>
            <span className="text-sm">Log Out</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserBox;
