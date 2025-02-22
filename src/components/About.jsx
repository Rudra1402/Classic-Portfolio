import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import rp from '../assets/rp_mini.png';

function About() {
  return (
    <div className="flex flex-col w-full p-4 sm:p-6 bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-xl" id="about">

      <div className="text-2xl sm:text-3xl text-white font-semibold tracking-wide text-center mb-6">
        About Me
      </div>

      <div className="bg-white/10 !text-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className='min-w-32 sm:min-w-40 flex flex-col items-center gap-1 md:gap-0'>
          <img
            src={rp}
            alt="Rudra Patel"
            className="h-32 w-32 sm:h-40 sm:w-40 rounded-full border-4 border-blue-600 shadow-md transition-transform hover:scale-105"
          />
          <div className="mt-5 flex justify-center sm:justify-start gap-2.5">
            <a href="https://github.com/Rudra1402" target="_blank" rel="noopener noreferrer"
              className="flex items-center w-8 h-8 lg:w-10 lg:h-10 text-lg lg:text-xl justify-center bg-[#24292e] text-white rounded-full hover:bg-gray-800 transition-transform hover:scale-110">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/rudra14" target="_blank" rel="noopener noreferrer"
              className="flex items-center w-8 h-8 lg:w-10 lg:h-10 text-lg lg:text-xl justify-center bg-[#0077b5] text-white rounded-full hover:bg-blue-800 transition-transform hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="mailto:patel349@uwindsor.ca"
              className="flex items-center w-8 h-8 lg:w-10 lg:h-10 text-lg lg:text-xl justify-center bg-red-600 text-white rounded-full hover:bg-red-700 transition-transform hover:scale-110">
              <SiGmail />
            </a>
          </div>
        </div>
        <div className="text-center md:text-left tracking-wide">
          <p className="text-lg sm:text-lg font-medium">
            I'm <span className="font-bold">Rudra Patel</span>, a passionate Software Developer specializing in
            <span className="font-semibold"> JavaScript, Python</span>, and their frameworks. Check out my latest project
            <span className="font-semibold"> "UWingine - A university-specific chatbot" </span>on my GitHub.
          </p>

          <p className="text-lg sm:text-lg font-medium mt-3">
            I thrive on crafting <span className="font-semibold">innovative solutions</span> that make a difference.
            Let's connect and explore how I can contribute to your next project!
          </p>

          <p className="text-lg sm:text-lg font-medium mt-3">
            Check out my portfolio for more!
          </p>

          {/* <div className="mt-5 flex justify-center sm:justify-start gap-3">
            <a href="https://github.com/Rudra1402" target="_blank" rel="noopener noreferrer"
              className="flex items-center w-8 h-8 lg:w-10 lg:h-10 text-xl justify-center bg-[#24292e] text-white rounded-full hover:bg-gray-800 transition-transform hover:scale-110">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/rudra14" target="_blank" rel="noopener noreferrer"
              className="flex items-center w-8 h-8 lg:w-10 lg:h-10 text-xl justify-center bg-[#0077b5] text-white rounded-full hover:bg-blue-800 transition-transform hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="mailto:patel349@uwindsor.ca"
              className="flex items-center w-8 h-8 lg:w-10 lg:h-10 text-xl justify-center bg-red-600 text-white rounded-full hover:bg-red-700 transition-transform hover:scale-110">
              <SiGmail />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default About;
