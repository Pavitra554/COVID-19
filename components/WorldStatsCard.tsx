import React from "react";
import Tilt from "react-parallax-tilt";
interface props {
  caseType: string;
  message: string;
  cases: number;
  textcolor: string;
}

export const WorldStatsCard: React.FC<props> = ({
  caseType,
  message,
  cases,
  textcolor,
}) => {
  return (
    <Tilt className="parallax-effect" perspective={500} transitionSpeed={1000} glareEnable={false}>
      <div className='h-44 w-64  flex items-center justify-center flex-col shadow-xl bg-gradient-to-r from-[#6419E6] to-[#D926A9] rounded-2xl m-4 p-[3px] cursor-pointer'>
        <div className='h-full w-full  bg-[#1a2235] rounded-2xl'>
          <div className='text-2xl text-gray-100 mt-4 ml-4'>{caseType}</div>
          <div className='text-sm text-gray-400 ml-4'>{message}</div>
          <div className={"mt-6 ml-4 text-3xl " + textcolor}>{cases}</div>
        </div>
      </div>
    </Tilt>
  );
};

// bg-[#1a2235]
