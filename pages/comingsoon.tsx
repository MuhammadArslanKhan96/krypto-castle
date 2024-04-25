import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';
import Link from 'next/link';


function Comingsoon ()  {
    const socialIcons = [
        { icon: <BsTwitterX className='icon'/> },
        { icon: <FaGithub className='icon' /> },
        { icon: <FaInstagram className='icon' /> },
        { icon: <FaThreads className='icon' /> }, 
        { icon: <FaLinkedin className='icon' />}
     ];
  return (
    <div className="bg-black ">
    <div className="bg-black flex flex-col justify-center items-center py-40 ">
        <h1 className=" text-4xl sm:text-5xl lg:text-7xl text-white  font-semibold text-center">Coming soon</h1>
        <p className="w-full sm:w-[70%] lg:w-[30%] my-10  text-center text-gray-500 font-semibold">We are breaking barriers by enabling seamless and secure exchange, even in environments where constant <span className="text-white">Internet connectivity</span> isn't guaranteed.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <input type="text" className="bg-gray-700 px-6 py-3 my-2 sm:my-0 sm:mx-2 rounded-lg outline-none  w-full sm:w-auto" placeholder="Please Enter your E-mail" />
          <button type="button" className="py-3 px-6 my-2 sm:my-0 sm:mx-2 text-[12px] sm:text-sm font-medium text-white focus:outline-none bg-purple-600 rounded-lg tracking-widest">Notify me</button>
        </div>
      </div>
    <div className="bg-black">
      <p className="text-center text-gray-500 font-semibold tracking-wide">&#169;2022 Krypto Castle. All rights reserved</p>
      <div className="flex justify-around p-7 max-w-[300px] mx-auto pb-14">
        {socialIcons.map((socialIcon, index) => (
          <Link key={index} href={'socialIcon'} target="_blank" rel="noopener noreferrer">
            {socialIcon.icon}
          </Link>
        ))}
      </div>
    </div>
    </div>
  )
}
export default Comingsoon