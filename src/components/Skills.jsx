import React from 'react';
import Css from "../assets/css.png";
import Github from "../assets/github.png"
import Html from "../assets/html.png"
import Javascript from "../assets/javascript.png"
import Node from "../assets/node.png"
import react from "../assets/react.png"
import Tailwind from "../assets/tailwind.png"

const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shodow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Html} alt="html icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shodow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Css} alt="css icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shodow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Javascript} alt="javascript icon" />
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shodow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt="tailwind icon" />
            <p className='my-4'>TAILWIND</p>
          </div>
          <div className='shadow-md shodow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={react} alt="react icon" />
            <p className='my-4'>REACT</p>
          </div>
          <div className='shadow-md shodow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Github} alt="github icon" />
            <p className='my-4'>GITHUB</p>
          </div>
          <div className='shadow-md shodow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt="node icon" />
            <p className='my-4'>NODE JS</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Skills