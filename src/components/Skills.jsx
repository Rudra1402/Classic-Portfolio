import React from 'react'
import { techSkills } from '../data'

function Skills() {
    return (
        <div className='flex flex-col gap-y-2 sm:gap-y-3 w-full py-3 px-2 sm:p-6 bg-[#123456]' id='skills'>
            <div className='text-xl sm:text-2xl text-white font-semibold tracking-wide leading-none sm:p-2 px-3 pt-2 pb-3 rounded'>
                Skills
            </div>
            <div className='sm:px-2'>
                <div className='border-0 sm:border-l-2 border-l-white flex gap-6 flex-col px-3 sm:px-4'>
                    <div className='text-lg text-blue-100 font-semibold tracking-wide leading-none'>Programming Languages</div>
                    <div className='flex flex-wrap gap-4'>
                        {techSkills.filter(skill => skill.category == 'lang').map((skill, index) => (
                            <div
                                key={index}
                                className='w-[calc(50%-12px)] min-w-full md:min-w-[300px] p-5 flex items-center gap-3 shadow-md rounded-md bg-white'
                            >
                                <skill.Component className='text-[#123456] text-3xl leading-none' />{skill.sname}
                            </div>
                        ))}
                    </div>
                    <div className='text-lg text-blue-100 font-semibold tracking-wide leading-none'>Libraries & Frameworks</div>
                    <div className='flex flex-wrap gap-4'>
                        {techSkills.filter(skill => skill.category == 'l&f').map((skill, index) => (
                            <div
                                key={index}
                                className='w-[calc(50%-12px)] min-w-full md:min-w-[300px] p-5 flex items-center gap-3 shadow-md rounded-md bg-white'
                            >
                                <skill.Component className='text-[#123456] text-3xl leading-none' />{skill.sname}
                            </div>
                        ))}
                    </div>
                    <div className='text-lg text-blue-100 font-semibold tracking-wide leading-none'>Databases</div>
                    <div className='flex flex-wrap gap-4'>
                        {techSkills.filter(skill => skill.category == 'db').map((skill, index) => (
                            <div
                                key={index}
                                className='w-[calc(50%-12px)] min-w-full md:min-w-[300px] p-5 flex items-center gap-3 shadow-md rounded-md bg-white'
                            >
                                <skill.Component className='text-[#123456] text-3xl leading-none' />{skill.sname}
                            </div>
                        ))}
                    </div>
                    <div className='text-lg text-blue-100 font-semibold tracking-wide leading-none'>Version Control</div>
                    <div className='flex flex-wrap gap-4'>
                        {techSkills.filter(skill => skill.category == 'vcs').map((skill, index) => (
                            <div
                                key={index}
                                className='w-[calc(50%-12px)] min-w-full md:min-w-[300px] p-5 flex items-center gap-3 shadow-md rounded-md bg-white'
                            >
                                <skill.Component className='text-[#123456] text-3xl leading-none' />{skill.sname}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills