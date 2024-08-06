import React from 'react'
import { workExp } from '../data'

function Experience() {
    return (
        <div className='flex flex-col gap-y-5 w-full p-6 bg-[#F5F5F5] rounded-lg shadow-md' id='experience'>
            <div className='text-2xl text-blue-600 font-semibold tracking-wide leading-none p-2 rounded'>
                Experience
            </div>
            <div className='px-2'>
                <div className='border-l-2 border-l-blue-600 flex flex-col gap-5 px-4'>
                    {workExp.map((exp, index) => (
                        <div
                            key={index}
                            className='p-4 flex flex-col gap-y-2 shadow-md rounded-md bg-white'
                        >
                            <div className='flex items-center justify-between gap-4'>
                                <div className='flex items-end justify-start gap-2'>
                                    <div
                                        className='text-xl text-[#123456] leading-none font-semibold cursor-pointer'
                                    >
                                        {exp.role}
                                    </div>
                                    <div className='text-gray-600 leading-none'>
                                        ({exp.location})
                                    </div>
                                </div>
                                <div className='text-gray-600 leading-none'>
                                    {exp.duration}
                                </div>
                            </div>
                            <div className='text-gray-600'>
                                {exp.company}
                            </div>
                            <div className='px-3 flex flex-col gap-y-2'>
                                {exp.desc.map((d, idx) => (
                                    <div
                                        key={idx}
                                        className='flex !gap-2'
                                    >
                                        <div>&bull;</div>
                                        <div>{d}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience