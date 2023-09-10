import React, { useState } from "react";

export const FaqItem = ({ header, text, isHidden } : any) => {
    const [hidden, setHidden] = useState(isHidden);

    const handleToggle = () => {
      setHidden(!hidden);
    };

    return (
        <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
        <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={()=>{handleToggle()}}>
            <span className="flex text-lg font-semibold text-black"> {header} </span>

            <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>

        <div className={`${ !hidden ? "" : "hidden" } px-4 pb-5 sm:px-6 sm:pb-6`}>
            {text}
        </div>
    </div>
    );
  };
