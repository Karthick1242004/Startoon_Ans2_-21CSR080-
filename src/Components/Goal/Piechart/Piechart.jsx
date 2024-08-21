import React from "react";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import data from "../../../JSON/data.json";

const Piechart = () => {
  const percentage = data.progress.percentage; 
  return (
    <div className="flex justify-center items-center text-white">
      <SemiCircleProgressBar
        percentage={percentage}                 
        stroke="#FCB000"                
        strokeWidth={15}                
        background="#E5E7EB"            
        diameter={200}                  
        orientation="up"                
        direction="right"               
        showPercentValue={true}       
      />
    </div>
  );
}

export default Piechart;
