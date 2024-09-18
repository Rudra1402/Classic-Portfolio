import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import rp from '../assets/patel.jpg';

function About() {
    return (
        <div className='flex flex-col gap-y-2 sm:gap-y-3 w-full py-3 px-2 sm:p-6 bg-[#123456] rounded-tl-xl rounded-tr-xl' id='about'>
            <div className='text-xl sm:text-2xl text-white font-semibold tracking-wide leading-none sm:p-2 px-3 py-2 rounded'>
                About
            </div>
            <div className='sm:px-2'>
                <div className='px-3 sm:px-4 text-base sm:text-lg text-justify border-0 sm:border-l-2 border-l-white'>
                    <div className='p-4 rounded-md bg-white shadow-md'>
                        <div className='flex flex-col sm:flex-row items-center w-full gap-4'>
                            <img
                                src={rp}
                                alt="Rudra Patel"
                                className='h-24 w-24 sm:h-36 sm:w-36 rounded-full shadow-md'
                            />
                            <div className=''>
                                Hello! I'm <b>Rudra Patel</b>, a dedicated Software Developer with a passion for Web Technologies, particularly JavaScript and Python. My journey has taken me through diverse projects like Bankify and E-Vehicle Depot, allowing me to refine my skills in languages such as C++, Java, and C.
                                <hr className='my-1 border border-transparent' />
                                I thrive on creating impactful solutions that push boundaries and deliver exceptional results. I'm eager to connect and explore how I can contribute to your next project. Feel free to check out my portfolio and reach out for collaboration!
                            </div>
                        </div>
                        {/* <br />
                        <div>
                            What truly drives me is the opportunity to create meaningful solutions that make a tangible impact. Whether it's JavaScript or Python, I'm constantly seeking new ways to push the boundaries of what's possible and deliver exceptional results for my clients and collaborators. I'm excited to connect with you and discuss how I can contribute to your next project. Feel free to explore my portfolio and don't hesitate to reach out if you have any questions or would like to collaborate.
                        </div> */}
                        <hr className='my-2.5 md:my-4 border border-transparent' />
                        <div className='flex flex-wrap gap-2.5 items-center justify-center'>
                            <b>Connect with me&nbsp;&nbsp;~</b>
                            <div className='flex flex-wrap gap-2.5 items-center justify-center'>
                                <a
                                    href="https://github.com/Rudra1402"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='flex items-center w-9 h-9 text-lg justify-center gap-1 p-0.5 bg-[#24292e] text-white rounded hover:bg-gray-800 transition duration-300 ease-in-out'
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/rudra14"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='flex items-center w-9 h-9 text-lg justify-center gap-1 p-0.5 bg-[#0077b5] text-white rounded hover:bg-blue-800 transition duration-300 ease-in-out'
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="mailto:rudrapatelrp14@gmail.com"
                                    className='flex items-center w-9 h-9 text-lg justify-center gap-1 p-0.5 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300 ease-in-out'
                                >
                                    <SiGmail />
                                </a>
                                <a
                                    href='https://x.com/rp14ok'
                                    className='flex items-center w-9 h-9 text-lg justify-center gap-1 p-0.5 bg-[#1DA1F2] text-white rounded hover:bg-[#1DA1F2DE] transition duration-300 ease-in-out'
                                >
                                    <FaTwitter />
                                </a>
                                <a
                                    href="https://www.instagram.com/rudra.patel.14"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='flex items-center w-9 h-9 text-lg justify-center gap-1 p-0.5 bg-[#d62976] text-white rounded hover:bg-pink-600 transition duration-300 ease-in-out'
                                >
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About