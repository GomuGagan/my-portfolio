import React, { useState } from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";
import {Link} from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);

  return (
    <div className='w-full h-[80px] flex fixed justify-between items-center px-4 bg-[#0a192f] text-gray-300 '>
        <div>
            <h3 className='text-pink-600 text-5xl font-bold'>GK</h3>
        </div>

        {/* Menu */}
        
            <ul className='hidden md:flex justify-end'>
                <li>
                <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
                </li>
                <li>
                <Link to="about" smooth={true} duration={500}>
          About
        </Link>
                </li>
                <li>
                <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
                </li>
                <li>
                <Link to="work" smooth={true} duration={500}>
          Work
        </Link>
                </li>
                <li>
                <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
                </li>
            </ul>
        

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={`md:hidden ${!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"} `}>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
          About
        </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
          Skills
        </Link>
                </li>
                <li className='py-6 text-4xl'> 
                <Link onClick={handleClick} to="work" smooth={true} duration={500}>
          Work
        </Link>
        </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
        </Link>
                </li>
            </ul>

        {/* Social Icons */}
        <ul className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='w-full flex justify-between items-center text-gray-300 ' href="/">LinkedIn<FaLinkedin size={30}/></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] '>
                <a className='w-full flex justify-between items-center text-gray-300 ' href="/">Github<FaGithub size={30}/></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] '>
                <a className='w-full flex justify-between items-center text-gray-300 ' href="/">Email<HiOutlineMail size={30}/></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] '>
                <a className='w-full flex justify-between items-center text-gray-300 ' href="/">Resume<BsFillPersonLinesFill size={30}/></a>
            </li>
            
        </ul>

    </div>
  )
}

export default Navbar