import React from 'react'
import { education } from '../data'

function Education() {
    return (
        <div className='flex flex-col gap-y-2 sm:gap-y-3 w-full py-4 px-2 sm:p-6 bg-[#123456] rounded-xl shadow-md' id='education'>
            <div className='text-xl sm:text-2xl text-white font-semibold tracking-wide leading-none px-3 py-2 sm:p-2 rounded'>
                Education
            </div>
            <div className='sm:px-2'>
                <div className='border-0 sm:border-l-2 border-l-white flex gap-4 sm:gap-5 flex-col px-3 sm:px-4'>
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className='p-4 mr-1 flex flex-col gap-y-2 shadow-md rounded-md bg-white'
                        >
                            <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-4'>
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