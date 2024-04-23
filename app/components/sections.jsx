import React from "react";

function SectionsTab({ active, selected, title}) {
  const buttonClass = active
    ? "text-white border-b border-blue-400"
    : "text-neutral-500";
  return (
  
     <button
      onClick={selected}
      className={`font-semibold  hover:text-white  ${buttonClass} `}
    >
      {title}
    </button>
    


  );
}

export default SectionsTab;
