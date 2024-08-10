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
      <div id='container' className='flex flex-col items-center w-full h-full overflow-y-auto px-4 md:p-0 gap-6 md:gap-8'>
        <Navbar />
        <div
          id='right-container'
          className='w-full md:w-3/4 flex flex-col gap-6 md:gap-8 rounded-lg text-[#333333] p-0 pb-8'
          style={{ scrollbarWidth: "none" }}
        >
          <About />
          <Experience />
          <Projects />
          <Education />
          <Skills />
          <Contact />
          <div className='py-4 px-8 rounded-lg text-center text-lg bg-green-600 text-white shadow-md leading-none'>Thank you for visting my portfolio!👍🏼</div>
        </div>
      </div>
    </div>
  )
}

export default App
