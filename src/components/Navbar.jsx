import React, { useEffect } from 'react';

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
        <div className='w-full md:w-3/4 min-h-20 flex items-center bg-[#123456] text-[#fff] shadow-md overflow-hidden'>
            <div className='w-[30%] h-full p-5 bg-[#123456] text-center flex items-center justify-center text-lg font-mono cursor-pointer text-white'>Rudra Patel</div>
            <div className='w-[70%] h-full py-5 px-6 bg-[#123456] shadow-gray-200 shadow-lg text-lg font-mono rounded-bl-[32px] flex items-center justify-end gap-5'>
                <a href='#about' className='hover:border-b border-b-blue-300'>About</a>
                <a href='#experience' className='hover:border-b border-b-blue-300'>Experience</a>
                <a href='#projects' className='hover:border-b border-b-blue-300'>Projects</a>
                <a href='#education' className='hover:border-b border-b-blue-300'>Education</a>
                <a href='#skills' className='hover:border-b border-b-blue-300'>Skills</a>
                <a href='#contact' className='hover:border-b border-b-blue-300'>Contact</a>
            </div>
        </div>
    );
}

export default Navbar;