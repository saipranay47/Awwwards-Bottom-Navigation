import React, { useState } from "react";

const Arrow = ({ ...props }) => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" {...props}>
      <g id="Img">
        <path
          id="Vector"
          d="M2 5L6 8L10 5"
          stroke="white"
          strokeWidth="1.0625"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

function StickyBottomNavigation() {
  const [learnVisible, setLearnVisible] = useState(false);

  const toggleLearnVisibility = () => {
    setLearnVisible(!learnVisible);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (learnVisible) {
      root.style.setProperty("--border-radius--menu-wrapper", "50px");
      root.style.setProperty("--border-radius--menu-link", "192px");
    } else {
      root.style.setProperty("--border-radius--menu-wrapper", "32px");
      root.style.setProperty("--border-radius--menu-link", "23px");
    }
    toggleLearnVisibility();
  };

  return (
    <nav className=" fixed bottom-12 max-w-full gap-x-2 gap-y-2 rounded-[var(--border-radius--menu-wrapper)] bg-[rgba(26,27,30,0.4)] border flex-col flex  p-[9px] max-sm:p-[5px] border-solid border-[#222325] transition-custom ">
      {learnVisible && (
        <div className="max-w-full gap-x-6 gap-y-6 bg-[#1a1b1e] flex-col flex overflow-hidden p-0 rounded-[23px] animateNav transition-custom">
          <div className="text-[#313235] text-[10px] leading-[120%] mt-6 mx-6 pb-[13px] border-b-[#222325] border-b border-solid">
            LEARN
          </div>
          <div className="gap-x-4 gap-y-4 grid-rows-[auto_auto] grid-cols-[1fr_1fr_1fr] auto-cols-[1fr] justify-items-center grid mb-6 mx-6">
            <a
              href="#"
              className="text-white text-center text-sm max-sm:text-xs font-normal leading-[142.857%] max-sm:leading-none no-underline hover:underline transition-all duration-[0.2s] ease-[ease-in-out]"
            >
              Navigation Link
            </a>
            <a
              href="#"
              className="text-white text-center text-sm max-sm:text-xs font-normal leading-[142.857%] max-sm:leading-none no-underline hover:underline transition-all duration-[0.2s] ease-[ease-in-out]"
            >
              Navigation Link
            </a>
            <a
              href="#"
              className="text-white text-center text-sm max-sm:text-xs font-normal leading-[142.857%] max-sm:leading-none no-underline hover:underline transition-all duration-[0.2s] ease-[ease-in-out]"
            >
              Navigation Link
            </a>
            <a
              href="#"
              className="text-white text-center text-sm max-sm:text-xs font-normal leading-[142.857%] max-sm:leading-none no-underline hover:underline transition-all duration-[0.2s] ease-[ease-in-out]"
            >
              Navigation Link
            </a>
            <a
              href="#"
              className="text-white text-center text-sm max-sm:text-xs font-normal leading-[142.857%] max-sm:leading-none no-underline hover:underline transition-all duration-[0.2s] ease-[ease-in-out]"
            >
              Navigation Link
            </a>
            <a
              href="#"
              className="text-white text-center text-sm max-sm:text-xs font-normal leading-[142.857%] max-sm:leading-none no-underline hover:underline transition-all duration-[0.2s] ease-[ease-in-out]"
            >
              Navigation Link
            </a>
          </div>
        </div>
      )}
      <div className="w-full gap-x-2 max-md:gap-1 gap-y-2 rounded-[var(--border-radius--menu-link)] bg-[#1a1b1e] justify-between flex overflow-auto p-3 max-sm:p-2 transition-custom">
        <a href="/" className="menuLink">
          Home
        </a>

        <a href="/about" className="menuLink">
          About
        </a>

        <a href="/works" className="menuLink">
          Works
        </a>

        <button className="menuLink" onClick={handleClick}>
          Learn <Arrow />
        </button>

        <a
          href="/contact"
          className="menuLink bg-[#36353a] hover:text-[#111] hover:bg-[#fff]"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
}

export default StickyBottomNavigation;
