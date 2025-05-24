import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from 'react-icons/io'
import { MdWork, MdSchool, MdContactMail } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

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
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50">
            <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] w-full max-w-sm p-5 h-full shadow-lg transform translate-x-0 transition-transform duration-300">
                <div className="flex justify-between items-center mb-2 pb-4 border-b border-b-gray-600">
                    <div className="text-white text-xl font-bold">Rudra Patel</div>
                    <IoMdClose
                        className="text-white text-2xl cursor-pointer"
                        onClick={() => setIsMenuOpen(false)}
                    />
                </div>
                <nav className="flex flex-col items-start space-y-4">
                    {[
                        { name: "experience", icon: <MdWork className="mr-2" /> },
                        { name: "projects", icon: <FaProjectDiagram className="mr-2" /> },
                        { name: "education", icon: <MdSchool className="mr-2" /> },
                        { name: "skills", icon: <GiSkills className="mr-2" /> },
                        { name: "contact", icon: <MdContactMail className="mr-2" /> }
                    ].map((section) => (
                        <a
                            key={section.name}
                            href={`#${section.name}`}
                            className="text-white text-center text-lg w-full hover:bg-blue-700 py-2 px-4 rounded transition-colors flex items-center gap-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {section.icon}
                            {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );

    return (
        <div className='w-full md:w-11/12 lg:w-3/4 min-h-16 sm:min-h-16 flex items-center justify-between sm:px-2 md:px-4 border-b-4 border-blue-600 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-[#fff] shadow-md overflow-hidden rounded-b-lg'>
            <div className='w-fit h-full p-3 flex items-center'>
                <a href='#about' className='w-full h-fit py-1 px-2 bg-[#123456] rounded md:rounded-md text-center flex lg:flex items-center justify-start sm:justify-start text-xl font-mono cursor-pointer hover:text-green-400 text-white'>Rudra</a>
            </div>
            <div className='w-fit h-full py-5 px-6 text-lg hidden sm:flex items-center justify-center lg:justify-end gap-5'>
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