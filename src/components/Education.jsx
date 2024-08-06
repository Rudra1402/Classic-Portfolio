import React from 'react'
import { education } from '../data'

function Education() {
    return (
        <div className='flex flex-col gap-y-5 w-full p-6 bg-[#F5F5F5] rounded-lg shadow-md' id='education'>
            <div className='text-2xl text-blue-600 font-semibold tracking-wide leading-none p-2 rounded'>
                Education
            </div>
            <div className='px-2'>
                <div className='border-l-2 border-l-blue-600 flex gap-5 flex-col px-4'>
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className='p-4 mr-1 flex flex-col gap-y-2 shadow-md rounded-md bg-white'
                        >
                            <div className='flex items-center justify-between gap-4'>
                                <div className='text-xl text-[#123456] font-semibold cursor-pointer'>
                                    {edu.courseDegree}, {edu.major}
                                </div>
                                <div className='text-gray-600 leading-none'>
                                    {edu.duration}
                                </div>
                            </div>
                            <div>
                                {edu.institute}
                                <br />
                                {edu.city}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Education