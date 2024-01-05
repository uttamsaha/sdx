"use client";
import { useEffect, useRef, useState } from "react";

const Service = ({ service }) => {
  const [isSubButtonVisible, setIsSubButtonVisible] = useState(false);
  const subButtonRef = useRef(null);

  const { img, title } = service;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        subButtonRef.current &&
        !subButtonRef.current.contains(event.target)
      ) {
        // Clicked outside the sub-button, hide it
        setIsSubButtonVisible(false);
      }
    };

    // Attach event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [subButtonRef]);

  return (
    <div className="flex bg-white w-[300px] h-[200px] relative">
      <p className="text-[18px] text-blue-500">{title}</p>
      <img className="w-[130px] h-[130px]" src={img} alt="" />
      <div className="flex  bg-white absolute top-0 right-0">
        <img
          onClick={() => setIsSubButtonVisible(!isSubButtonVisible)}
          src="menu.svg"
          className="w-8 w-8 "
          alt=""
        />
      </div>
      {isSubButtonVisible && (
        <div
          ref={subButtonRef}
          className="h-[30px] w-[130px] bg-slate-300  absolute rounded-[4px] top-8 right-2"
        >
          <p className="text-black">Refresh</p>
        </div>
      )}
    </div>
  );
};

export default Service;
