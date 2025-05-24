import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import rp from '../assets/rp_mini.png';

export default function About() {
  return (
    <section className="w-full flex flex-col items-center my-1" id="about">
      <div className="w-full bg-[#181e2a] rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
        {/* Profile Image */}
        <div className="flex flex-col items-center min-w-[130px]">
          <img
            src={rp}
            alt="Rudra Patel"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-600 shadow-lg"
          />
          <div className="flex gap-4 mt-5">
            <a href="https://github.com/Rudra1402" target="_blank" rel="noopener noreferrer"
              className="bg-[#24292e] hover:bg-gray-900 transition p-2 rounded-full text-xl text-white shadow">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/rudra14" target="_blank" rel="noopener noreferrer"
              className="bg-[#0077b5] hover:bg-blue-800 transition p-2 rounded-full text-xl text-white shadow">
              <FaLinkedin />
            </a>
            <a href="mailto:patel349@uwindsor.ca"
              className="bg-red-600 hover:bg-red-700 transition p-2 rounded-full text-xl text-white shadow">
              <SiGmail />
            </a>
          </div>
        </div>
        {/* About Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-100 mb-3">
            I&apos;m <span className="font-bold text-blue-400">Rudra Patel</span>, a passionate Software Developer specializing in
            <span className="font-semibold text-blue-300"> JavaScript, Python</span>, and their frameworks. Check out my latest project,
            <span className="font-semibold text-blue-300">UWingine - A university-specific chatbot</span> on my GitHub.
          </p>
          <p className="text-lg text-gray-200 mb-3">
            I thrive on crafting <span className="font-semibold text-blue-400">innovative solutions</span> that make a difference.
            Let&apos;s connect and explore how I can contribute to your next project!
          </p>
          <p className="text-lg text-gray-300">
            Check out my portfolio for more!
          </p>
        </div>
      </div>
    </section>
  );
}
