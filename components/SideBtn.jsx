import React from "react";

const SideBtn = ({ title, icon , path}) => {
  return (
   
    <div className="flex gap-3" >
      {icon}
      <p className="">{title}</p>
    </div>
    
  );
};

export default SideBtn;
