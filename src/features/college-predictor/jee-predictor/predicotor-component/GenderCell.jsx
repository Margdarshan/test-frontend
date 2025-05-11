import React from 'react'

const GenderCell = ({val}) => {
    const usePredictorColor =(value)=>{
        if(value==='Gender-Neutral'){
            return <span className="flex items-start justify-center gap-0.5 py-1.5 px-0.5 rounded-[12px] my-1 bg-[rgba(100,175,75,0.30)] text-[#175031] font-inter text-[15px] font-normal leading-[20px] w-32">
            Gender Neutral
          </span>   
         }
        if( value === "Female"){
            return <span className="flex items-center justify-center gap-2 py-1.5 px-2.5 rounded-[12px] my-1 bg-[#E6A8FF] text-[#500073] font-inter text-[15px] font-normal leading-[20px]">
            Female
          </span>      
        }
    }
  return (
    <div>{usePredictorColor(val)}</div>
  )
}

export default GenderCell