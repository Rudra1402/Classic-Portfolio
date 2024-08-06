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
        <div className='w-3/4 min-h-20 flex items-center bg-[#4A90E2] text-[#fff] shadow-md'>
            <div className='w-1/4 h-full p-5 bg-[#4A90E2] text-center flex items-center justify-center text-lg font-mono cursor-pointer text-white'>Rudra</div>
            <div className='w-3/4 h-full py-5 px-6 bg-[#123456] text-lg font-mono rounded-bl-[32px] flex items-center justify-end gap-5'>
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