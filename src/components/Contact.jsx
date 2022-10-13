import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/5c5c1920-daab-4c7e-9875-a59b0a2366d9" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-4 inline border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form Below or shoot me an E-mail:- gagangomu@gmail.com </p>
            </div>
            <input className="p-2 bg-[#ccd6f6]" type="text" placeholder='Name' name='name' />
            <input className='p-2 my-4 bg-[#ccd6f6]' type="email" placeholder='E-mail' name='email' />
            <textarea className='p-2 bg-[#ccd6f6]' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 py-4 px-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact