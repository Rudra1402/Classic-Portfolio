import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {

  return (
    <div className='m-0 p-0 w-screen h-screen'>
      <div id='container' className='flex flex-col items-center w-full h-full overflow-y-auto px-4 md:p-0 gap-3 md:gap-5'>
        <Navbar />
        <div
          id='right-container'
          className='w-full md:w-3/4 flex flex-col rounded-xl shadow-md gap-0 md:gap-0 text-[#333333] p-0'
          style={{ scrollbarWidth: "none" }}
        >
          <About />
          <Experience />
          <Projects />
          <Education />
          <Skills />
          <Contact />
        </div>
        <div className='py-4 px-8 mb-6 w-3/4 rounded-lg text-center text-lg bg-green-600 text-white shadow-md leading-none'>Thank you for visting my portfolio!👍🏼</div>
      </div>
    </div>
  )
}

export default App
