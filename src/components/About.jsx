import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import rp from '../assets/patel.jpg';


function About() {
    return (
        <div className='flex flex-col gap-y-4 w-full p-6 bg-[#F5F5F5] rounded-lg shadow-md' id='about'>
            <div className='text-2xl text-blue-600 font-semibold tracking-wide leading-none p-2 rounded'>
                About
            </div>
            <div className='px-2'>
                <div className='px-4 text-lg text-justify border-l-2 border-l-blue-600'>
                    <div className='p-4 rounded-md bg-white shadow-md'>
                        <div className='flex items-center w-full gap-4'>
                            <img
                                src={rp}
                                alt="Rudra Patel"
                                className='h-36 w-36 rounded-full shadow-md'
                            />
                            <div>
                                Hello! I'm <b>Rudra Patel</b>, a passionate Software Developer with a diverse set of skills and a deep fascination for Web Technologies like JavaScript and Python. Additionally, I have worked on Programming Languages like C++, Java, and C.
                                Throughout my career, I've had the privilege of working on a wide range of projects, from Bankify to E-Vehicle Depot. Each experience has allowed me to hone my craft, expand my knowledge, and develop a unique problem-solving approach.
                            </div>
                        </div>
                        <br />
                        <div>
                            What truly drives me is the opportunity to create meaningful solutions that make a tangible impact. Whether it's JavaScript or Python, I'm constantly seeking new ways to push the boundaries of what's possible and deliver exceptional results for my clients and collaborators. I'm excited to connect with you and discuss how I can contribute to your next project. Feel free to explore my portfolio and don't hesitate to reach out if you have any questions or would like to collaborate.
                        </div>
                        <br />
                        <div className='flex gap-2.5 items-center'>
                            <a
                                href="https://github.com/Rudra1402"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex items-center w-1/4 text-base justify-center gap-1 py-1.5 px-3 bg-[#24292e] text-white rounded hover:bg-gray-800 transition duration-300 ease-in-out'
                            >
                                <FaGithub /> GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/rudra14"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex items-center w-1/4 text-base justify-center gap-1 py-1.5 px-3 bg-[#0077b5] text-white rounded hover:bg-blue-800 transition duration-300 ease-in-out'
                            >
                                <FaLinkedin /> LinkedIn
                            </a>
                            <a
                                href="mailto:rudrapatelrp14@gmail.com"
                                className='flex items-center w-1/4 text-base justify-center gap-1 py-1.5 px-3 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300 ease-in-out'
                            >
                                <SiGmail /> Email
                            </a>
                            <a
                                href='https://x.com/rp14ok'
                                className='flex items-center w-1/4 text-base justify-center gap-1 py-1.5 px-3 bg-[#1DA1F2] text-white rounded hover:bg-[#1DA1F2DE] transition duration-300 ease-in-out'
                            >
                                <FaTwitter /> Twitter
                            </a>
                            <a
                                href="https://www.instagram.com/rudra.patel.14"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex items-center w-1/4 text-base justify-center gap-1 py-1.5 px-3 bg-[#d62976] text-white rounded hover:bg-pink-600 transition duration-300 ease-in-out'
                            >
                                <FaInstagram /> Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About