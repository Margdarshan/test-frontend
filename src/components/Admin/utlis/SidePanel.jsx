import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SidePanelItem from './SidePanelItem';
import sidePanelData from '../../../data/utlis/SidePanel';
import margLogo from '../../../assest/Marg-Logo.svg';

const SidePanel = () => {
  const [activeItemId, setActiveItemId] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Update active item based on current path
  useEffect(() => {
    const currentPath = location.pathname;
    
    // Find the matching item in sidePanelData
    const matchingItem = sidePanelData.find(item => item.path === currentPath);
    
    // If matching item found, set it as active
    if (matchingItem) {
      setActiveItemId(matchingItem.id);
    } else {
      // Check if it's a child item path
      for (const item of sidePanelData) {
        if (item.childItem) {
          const matchingChildItem = item.childItem.find(child => child.path === currentPath);
          if (matchingChildItem) {
            setActiveItemId(item.id); // Set parent as active if child matches
            break;
          }
        }
      }
    }
  }, [location.pathname]);

  const handleItemClick = (id, path) => {
    setActiveItemId(id);
    navigate(path);
  };

  // No role-based filtering, display all items
  const filteredSidePanelData = sidePanelData;

  return (
    <div className='fixed top-0 left-0 w-[20%] 2xl:w-[18%] h-screen pb-20 bg-[#F7F9FB] flex flex-col overflow-y-auto'>
      <div className="flex flex-col justify-start pt-6 px-5 w-full">
        <div className="flex items-center pb-4 px-3 border-b">
          <img src={margLogo} alt='Margdarshan'/>
        </div>
        <div className="sidePanel-items flex flex-col pt-5 items-start">
          {filteredSidePanelData.map(item => (
              <SidePanelItem
                key={item.id}
                icon={item.icon}
                optionName={item.optionName}
                isActive={item.id === activeItemId}
                onClick={() => handleItemClick(item.id, item.path)}
              />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidePanel;