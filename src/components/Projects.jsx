import React from 'react'
import { BiLink } from 'react-icons/bi'
import { projects, techSkills } from '../data'

function Projects() {
    return (
        <div className='flex flex-col gap-y-5 w-full p-6 bg-[#F5F5F5] rounded-lg shadow-md' id='projects'>
            <div className='text-2xl text-blue-600 font-semibold tracking-wide leading-none p-2 rounded'>
                Projects
            </div>
            <div className='px-2'>
                <div className='border-l-2 border-l-blue-600 flex gap-5 flex-wrap px-4'>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className='md:w-[calc(50%-12px)] w-[400px] p-4 flex flex-col gap-y-2 shadow-md rounded-md bg-white'
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