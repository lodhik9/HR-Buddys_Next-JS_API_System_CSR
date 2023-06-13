import React from "react";

const Category = ({ logo, title, css }) => {
    const modifiedTitle = title === "POSITION" ? title : <span className="ml-8">{title}</span>;
  return (
    <div className={` cursor-pointer flex items-center  mr-10  `}>
      <button className={`flex items-center  ${css} `}>
        <p className=" whitespace-nowrap font-semibold text-[10px]">{modifiedTitle}</p>
        {logo}
      </button>
    </div>
  );
};

export default Category;
