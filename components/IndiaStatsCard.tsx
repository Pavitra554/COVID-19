import React from "react";
import Tilt from "react-parallax-tilt";

interface props {
  State: string;
  confirmed:number;
  recovered:number;
  deceased:number

}


export const IndiaStatsCard: React.FC<props> = ({
    State,
    confirmed,
    recovered,
    deceased
}) => {
  return (
    <Tilt
      className='parallax-effect'
      perspective={500}
      transitionSpeed={1000}
      glareEnable={false}
    >
      <div className='h-44 w-64 shadow-xl  bg-[#1a2235] rounded-2xl border-2 border-[#2f3749] m-4 p-[3px] cursor-pointer'>
        <div className='text-2xl text-gray-100 mt-4 ml-4'>{State}</div>
        <div className='text-sm text-red-400 mt-4 ml-4 mr-4 flex flex-row justify-between'>
            <div>
                Confirmed Cases
            </div> 
            <div>
            {confirmed}
            </div>
        </div>
        <div className='text-sm text-green-400 mt-2 ml-4 mr-4 flex flex-row justify-between'>
            <div>
            Recovered
            </div> 
            <div>
            {recovered}
            </div>
        </div>
        <div className='text-sm text-gray-400 mt-2 ml-4 mr-4 flex flex-row justify-between'>
            <div>
            Deceased
            </div> 
            <div>
            {deceased}
            </div>
        </div>
        
      </div>
    </Tilt>
  );
};

// bg-[#1a2235]
