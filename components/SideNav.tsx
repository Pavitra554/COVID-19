import React from 'react';
import { FaShieldVirus } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { VscTwitter } from "react-icons/vsc";
import { ImLinkedin } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

const SideNav = () => {
  return (
    <nav className='h-full w-full left-0 flex items-center border-r-[1px] border-gray-800 dark:bg-[#0f172a] bg-slate-50  flex-col'>
      <div className='flex mt-4 h-14 w-14 md:h-16 md:w-16 bg-slate-800 rounded-2xl shadow-xl items-center justify-center mb-4'>
        <FaShieldVirus size={40} color='#a6aec4'/>
      </div>

      <div className='w-[60%] h-[0.1px] pl-1 pr-1 bg-[#a6aec472]'></div>


      <a href='https://www.github.com/pavitra554'rel="noreferrer" target="_blank" className='flex mt-4 h-14 w-14 md:h-16 md:w-16 bg-slate-800 rounded-2xl shadow-xl items-center justify-center cursor-pointer text-[#a6aec4] hover:text-white ease-linear duration-100 active:text-[#595e6d]'>
        <VscGithubInverted size={40}/>
      </a>
      <a href='https://twitter.com/behara_pavitra'rel="noreferrer" target="_blank"  className='flex mt-4 h-14 w-14 md:h-16 md:w-16 bg-slate-800 rounded-2xl shadow-xl items-center justify-center cursor-pointer  text-[#a6aec4] hover:text-white ease-linear duration-100 active:text-[#595e6d]'>
        <VscTwitter size={40} />
      </a>
      <a href='https://www.linkedin.com/in/pavitra-behara/' rel="noreferrer" target="_blank"  className='flex mt-4 h-14 w-14 md:h-16 md:w-16 bg-slate-800 rounded-2xl shadow-xl items-center justify-center cursor-pointer  text-[#a6aec4] hover:text-white ease-linear duration-100 active:text-[#595e6d]'>
        <ImLinkedin size={40} />
      </a>
      <a href='https://www.instagram.com/pavitra.js/' rel="noreferrer" target="_blank"  className='flex mt-4 h-14 w-14 md:h-16 md:w-16 bg-slate-800 rounded-2xl shadow-xl items-center justify-center cursor-pointer  text-[#a6aec4] hover:text-white ease-linear duration-100 active:text-[#595e6d]'>
        <BsInstagram size={40}/>
      </a>
      
    </nav>
  )
}

export default SideNav;