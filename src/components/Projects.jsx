import React from 'react'
import { BiLink } from 'react-icons/bi'
import { projects, techSkills } from '../data'

function Projects() {
    return (
        <div className='flex flex-col gap-y-3 sm:gap-y-4 w-full py-3 px-2 sm:p-6 bg-[#123456]' id='projects'>
            <div className='text-xl sm:text-2xl text-white font-semibold tracking-wide leading-none px-3 py-2 sm:p-2 rounded'>
                Projects
            </div>
            <div className='sm:px-2'>
                <div className='border-0 sm:border-l-2 border-l-white flex gap-4 sm:gap-5 flex-wrap px-3 sm:px-4'>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className='md:w-[calc(50%-12px)] w-full p-4 flex flex-col gap-y-2 shadow-md rounded-md bg-white'
                        >
                            <div className='flex items-center justify-start gap-1.5'>
                                <div className='text-xl text-[#123456] font-semibold cursor-pointer'>
                                    {project.name}
                                </div>
                                {project.isOnGithub
                                    ? <a
                                        href={project.ghUrl}
                                        target={'_blank'}
                                        className='text-red-500'
                                    >
                                        <BiLink className='text-xl leading-none' />
                                    </a>
                                    : null
                                }
                            </div>
                            <div className='text-blue-600 flex overflow-auto' style={{ scrollbarWidth: 'none' }}>
                                {project.techStack.map((tech, idx) => (
                                    <div
                                        key={idx}
                                    >
                                        {tech}{idx == project.techStack.length - 1 ? '' : <>,&nbsp;</>}
                                    </div>
                                ))}
                            </div>
                            <div className='overflow-hidden line-clamp-3 text-ellipsis'>{project.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects