import React from 'react'
import { workExp } from '../data'

function Experience() {
    return (
        <div className='flex flex-col gap-y-2 sm:gap-y-3 w-full py-3 px-2 sm:p-6 bg-[#123456]' id='experience'>
            <div className='text-xl sm:text-2xl text-white font-semibold tracking-wide leading-none px-3 py-2 sm:p-2 rounded'>
                Experience
            </div>
            <div className='sm:px-2'>
                <div className='border-0 sm:border-l-2 border-l-white flex flex-col gap-4 sm:gap-5 px-3 sm:px-4'>
                    {workExp.map((exp, index) => (
                        <div
                            key={index}
                            className='p-4 flex flex-col gap-y-2 shadow-md rounded-md bg-white'
                        >
                            <div className='flex lg:flex-row flex-col items-start lg:items-center justify-between gap-3 lg:gap-4'>
                                <div className='flex items-end justify-start gap-2'>
                                    <div
                                        className='text-xl text-[#123456] leading-none font-semibold cursor-pointer'
                                    >
                                        {exp.role}
                                    </div>
                                    <div className='hidden sm:block text-gray-600 leading-none'>
                                        ({exp.location})
                                    </div>
                                </div>
                                <div className='text-gray-600 leading-none'>
                                    {exp.duration}
                                </div>
                            </div>
                            <div className='flex items-center justify-start gap-1'>
                                <div className='text-gray-600'>
                                    {exp.company}
                                </div>
                                <div className='block sm:hidden text-gray-600 leading-none'>
                                    ({exp.location})
                                </div>
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