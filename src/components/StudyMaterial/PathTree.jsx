import React from 'react'
import PropTypes from 'prop-types';

const PathTree = ({treeData}) => {
  return (
    <div className="flex flex-col relative">
        <div className="absolute w-full -top-1 flex items-center justify-center">
            <div className="p-[8px] rounded-full  bg-[#4E18CD]"></div>
        </div>
        <div className="absolute w-full -bottom-1 flex items-center justify-center">
            <div className="p-[8px] rounded-full  bg-[#4E18CD]"></div>
        </div>
        {/* Only below part should be mapped */}
        {treeData.map((item, index)=>(
            <div key={index} className="one flex">
                <div className={`${index%2===0?"invisible":""} w-[50%] flex  py-2 ${index===0?"pt-16":""} ${index=== (treeData.length -1)?"pb-16":""}`}>

                    <div className="content w-[85%] p-4 flex flex-col space-y-1 bg-white rounded-xl shadow-md">
                        <div className="title font-semibold text-lg text-[#4E18CD] font-manrope">{item.title}</div>
                        <div className="description text-[#252525] text-[13px] font-inter">{item.description}</div>
                    </div>
                    <div className="w-[15%] flex items-center ">
                        <div className="w-full border-[1.5px] border-[#4E18CD] relative">
                            <div className="absolute rounded-full p-[6px] -right-[9px] -top-[6px] bg-[#4E18CD]"></div>
                        </div>
                    </div>
                </div>
                <div className="border-0 border-r-[3px] border-[#4E18CD]"></div>
                <div className={`${index%2 === 1?"invisible":""} w-[50%]  flex  py-2 ${index===0?"pt-16":""} ${index === (treeData.length -1)?"pb-16":""}`}>
                    <div className="w-[15%] flex items-center ">
                        <div className="w-full border-[1.5px] border-[#4E18CD] relative">
                            <div className="absolute rounded-full p-[6px] -left-[9px] -top-[6px] bg-[#4E18CD]"></div>
                        </div>
                    </div>
                    <div className="content w-[85%] p-4 flex flex-col space-y-1 bg-white rounded-xl shadow-md">
                        <div className="title font-semibold text-lg text-[#4E18CD] font-manrope">{item.title}</div>
                        <div className="description text-[#252525] text-[13px] font-inter">{item.description}</div>
                    </div>
                    
                </div>
            </div>
        ))}
    </div>
  )
}

PathTree.propTypes = {
    treeData: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
export default PathTree