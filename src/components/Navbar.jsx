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
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="bg-[#123456] w-full max-w-sm p-5 h-full shadow-lg transform translate-x-0 transition-transform duration-300">
                <div className="flex justify-between items-center mb-6">
                    <div className="text-white text-xl font-bold">Rudra Patel</div>
                    <IoMdClose
                        className="text-white text-2xl cursor-pointer"
                        onClick={() => setIsMenuOpen(false)}
                    />
                </div>
                <nav className="flex flex-col items-start space-y-4">
                    {["about", "experience", "projects", "education", "skills", "contact"].map((section) => (
                        <a
                            key={section}
                            href={`#${section}`}
                            className="text-white text-lg w-full hover:bg-blue-700 py-2 px-4 rounded transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );

    return (
        <div className='w-full md:w-3/4 min-h-16 sm:min-h-20 flex items-center bg-[#123456] text-[#fff] shadow-md overflow-hidden rounded-b-lg'>
            <a href='#about' className='w-[50%] sm:w-[20%] h-full py-3 px-4 lg:p-5 bg-[#123456] text-center flex sm:hidden lg:flex items-center justify-start sm:justify-start underline underline-offset-4 text-xl font-mono cursor-pointer text-white'>Rudra</a>
            <div className='w-[100%] lg:w-[80%] h-full py-5 px-6 bg-[#123456] text-lg hidden sm:flex items-center justify-center lg:justify-end gap-5'>
                {/* <a href='#about' className='hover:border-b border-b-blue-300'>About</a> */}
                <a href='#experience' className='hover:border-b border-b-blue-300'>Experience</a>
                <a href='#projects' className='hover:border-b border-b-blue-300'>Projects</a>
                <a href='#education' className='hover:border-b border-b-blue-300'>Education</a>
                <a href='#skills' className='hover:border-b border-b-blue-300'>Skills</a>
                <a href='#contact' className='hover:border-b border-b-blue-300'>Contact</a>
            </div>
            <div className='sm:hidden py-3 px-4 lg:p-5 flex items-center justify-end w-[50%]'>
                {isMenuOpen ?
                    // <IoMdClose className='text-xl cursor-pointer' onClick={() => setIsMenuOpen(false)} />
                    null
                    : <GiHamburgerMenu className='text-xl cursor-pointer' onClick={() => setIsMenuOpen(true)} />
                }
            </div>
            {isMenuOpen ? navLinks : null}
        </div>
    );
}

export default Navbar;