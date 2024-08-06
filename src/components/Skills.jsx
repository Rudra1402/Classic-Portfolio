import React from 'react'
import { techSkills } from '../data'

function Skills() {
    return (
        <div className='flex flex-col gap-y-5 w-full p-6 bg-[#F5F5F5] rounded-lg shadow-md' id='skills'>
            <div className='text-2xl text-blue-600 font-semibold tracking-wide leading-none p-2 rounded'>
                Skills
            </div>
            <div className='px-2'>
                <div className='border-l-2 border-l-blue-600 flex gap-6 flex-col px-4'>
                    <div className='text-lg text-blue-900 font-semibold tracking-wide leading-none'>Programming Languages</div>
                    <div className='flex flex-wrap gap-4'>
                        {techSkills.filter(skill => skill.category == 'lang').map((skill, index) => (
                            <div
                                key={index}
                                className='w-[calc(50%-12px)] min-w-[400px] p-5 flex items-center gap-3 shadow-md rounded-md bg-white'
                            >
                                <skill.Component className='text-[#123456] text-3xl leading-none' />{skill.sname}
                            </div>
                        ))}
                    </div>
                    <div className='text-lg text-blue-900 font-semibold tracking-wide leading-none'>Libraries & Frameworks</div>
                    <div className='flex flex-wrap gap-4'>
                        {techSkills.filter(skill => skill.category == 'l&f').map((skill, index) => (
                            <div
                                key={index}
                                className='w-[calc(50%-12px)] min-w-[400px] p-5 flex items-center gap-3 shadow-md rounded-md bg-white'
                            >
                                <skill.Component className='text-[#123456] text-3xl leading-none' />{skill.sname}
                            </div>
                        ))}
                    </div>
                    <div className='text-lg text-blue-900 font-semibold tracking-wide leading-none'>Databases</div>
                    <div className='flex flex-wrap gap-4'>
                        {techSkills.filter(skill => skill.category == 'db').map((skill, index) => (
                            <div
                                key={index}
                                className='w-[calc(50%-12px)] min-w-[400px] p-5 flex items-center gap-3 shadow-md rounded-md bg-white'
                            >
                                <skill.Component className='text-[#123456] text-3xl leading-none' />{skill.sname}
                            </div>
                        ))}
                    </div>
                    <div className='text-lg text-blue-900 font-semibold tracking-wide leading-none'>Version Control</div>
                    <div className='flex flex-wrap gap-4'>
                        {techSkills.filter(skill => skill.category == 'vcs').map((skill, index) => (
                            <div
                                key={index}
                                className='w-[calc(50%-12px)] min-w-[400px] p-5 flex items-center gap-3 shadow-md rounded-md bg-white'
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