import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from 'react-icons/io'

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const navLinks = (
        <div className='bg-white p-4 absolute top-0 right-0 bottom-0 left-0'>
            <div className='flex flex-col items-center gap-4 bg-[#123456] rounded-md h-full w-full p-5'>
                <div className='p-2 w-2/3 text-center mb-2 bg-white rounded leading-none text-[#123456] font-mono text-2xl'>Rudra Patel</div>
                <a
                    href='#about'
                    className='p-2 w-2/3 text-center bg-white rounded text-[#123456] text-lg leading-none'
                    onClick={() => setIsMenuOpen(false)}
                >
                    About
                </a>
                <a
                    href='#experience'
                    className='p-2 w-2/3 text-center bg-white rounded text-[#123456] text-lg leading-none'
                    onClick={() => setIsMenuOpen(false)}
                >
                    Experience
                </a>
                <a
                    href='#projects'
                    className='p-2 w-2/3 text-center bg-white rounded text-[#123456] text-lg leading-none'
                    onClick={() => setIsMenuOpen(false)}
                >
                    Projects
                </a>
                <a
                    href='#education'
                    className='p-2 w-2/3 text-center bg-white rounded text-[#123456] text-lg leading-none'
                    onClick={() => setIsMenuOpen(false)}
                >
                    Education
                </a>
                <a
                    href='#skills'
                    className='p-2 w-2/3 text-center bg-white rounded text-[#123456] text-lg leading-none'
                    onClick={() => setIsMenuOpen(false)}
                >
                    Skills
                </a>
                <a
                    href='#contact'
                    className='p-2 w-2/3 text-center bg-white rounded text-[#123456] text-lg leading-none'
                    onClick={() => setIsMenuOpen(false)}
                >
                    Contact
                </a>
            </div>
        </div>
    );

    return (
        <div className='w-full md:w-3/4 min-h-16 sm:min-h-20 flex items-center bg-[#123456] text-[#fff] shadow-md overflow-hidden rounded-b-lg'>
            <div className='w-[50%] sm:w-[20%] h-full py-3 px-4 lg:p-5 bg-[#123456] text-center flex sm:hidden lg:flex items-center justify-start sm:justify-center text-lg font-mono cursor-pointer text-white'>Rudra</div>
            <div className='w-[100%] lg:w-[80%] h-full py-5 px-6 bg-[#123456] shadow-gray-200 shadow-lg text-lg font-mono lg:rounded-bl-[32px] hidden sm:flex items-center justify-center lg:justify-end gap-5'>
                <a href='#about' className='hover:border-b border-b-blue-300'>About</a>
                <a href='#experience' className='hover:border-b border-b-blue-300'>Experience</a>
                <a href='#projects' className='hover:border-b border-b-blue-300'>Projects</a>
                <a href='#education' className='hover:border-b border-b-blue-300'>Education</a>
                <a href='#skills' className='hover:border-b border-b-blue-300'>Skills</a>
                <a href='#contact' className='hover:border-b border-b-blue-300'>Contact</a>
            </div>
            <div className='sm:hidden py-3 px-4 lg:p-5 flex items-center justify-end w-[50%]'>
                {isMenuOpen ?
                    <IoMdClose className='text-xl cursor-pointer' onClick={() => setIsMenuOpen(false)} />
                    : <GiHamburgerMenu className='text-xl cursor-pointer' onClick={() => setIsMenuOpen(true)} />
                }
            </div>
            {isMenuOpen ? navLinks : null}
        </div>
    );
}

export default Navbar;