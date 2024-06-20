import { useState, useEffect } from "react";

const useIsSmallScreen = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 440);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 440);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isSmallScreen;
};

const Search = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isSmallScreen = useIsSmallScreen();

  const handleIconClick = () => {
    if (isSmallScreen) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div
      className={`border-[1.5px] border-[#2a5bd7] rounded-md bg-[#f4f6fa] py-2 md:px-4 pl-2 flex gap-2 items-center w-[24rem] 
      ${isExpanded && isSmallScreen ? "z-40 " : ""} relative`}
    >
      <i
        className="fa-solid fa-magnifying-glass text-[#71809f] cursor-pointer"
        onClick={handleIconClick}
      ></i>
       <input
        type="text"
        className={`bg-[#f4f6fa] outline-none rounded-md w-full transition-all duration-200 
        ${
          isExpanded && isSmallScreen
            ? "absolute top--1 left-8 w-52 h-[2.5rem] z-50  px-4 border-[#2a5bd7] border-2"
            : "relative"
        }`}
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
