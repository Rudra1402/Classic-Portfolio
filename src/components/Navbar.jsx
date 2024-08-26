import React, { useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }, []);

    return (
        <div className='w-full md:w-3/4 min-h-20 flex items-center bg-[#123456] text-[#fff] shadow-md overflow-hidden rounded-b-lg'>
            <div className='w-[50%] sm:w-[20%] h-full py-3 px-4 lg:p-5 bg-[#123456] text-center flex sm:hidden lg:flex items-center justify-start sm:justify-center text-lg font-mono cursor-pointer text-white'>Rudra</div>
            <div className='w-[100%] lg:w-[80%] h-full py-5 px-6 bg-[#123456] shadow-gray-200 shadow-lg text-lg font-mono lg:rounded-bl-[32px] hidden sm:flex items-center justify-center lg:justify-end gap-5'>
                <a href='#about' className='hover:border-b border-b-blue-300'>About</a>
                <a href='#experience' className='hover:border-b border-b-blue-300'>Experience</a>
                <a href='#projects' className='hover:border-b border-b-blue-300'>Projects</a>
                <a href='#education' className='hover:border-b border-b-blue-300'>Education</a>
                <a href='#skills' className='hover:border-b border-b-blue-300'>Skills</a>
                <a href='#contact' className='hover:border-b border-b-blue-300'>Contact</a>
            </div>
            <div className='sm:hidden p-5 flex items-center justify-end w-[50%]'>
                <GiHamburgerMenu className='text-xl cursor-pointer' />
            </div>
        </div>
    );
}

export default Navbar;