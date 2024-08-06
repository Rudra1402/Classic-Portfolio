import React from 'react'

function Contact() {
    return (
        <div className='flex flex-col gap-y-4 w-full p-6 bg-[#F5F5F5] rounded-lg shadow-md' id='contact'>
            <div className='text-2xl text-blue-600 font-semibold tracking-wide leading-none p-2 rounded'>
                Contact
            </div>
            <div className='px-2'>
                <div className='border-l-2 border-l-blue-600 flex gap-5 flex-col px-4'>
                    <div className="flex flex-col gap-y-1">
                        <p className="text-gray-700"><strong>Email:</strong> <a href="mailto:rudrapatelrp14@gmail.com" className="text-blue-500 hover:underline">rudrapatelrp14@gmail.com</a></p>
                        <p className="text-gray-700"><strong>Phone:</strong> +1 (226) 975-9142</p>
                        <p className="text-gray-700"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/rudra14/" target={'_blank'} className="text-blue-500 hover:underline">linkedin.com/in/rudra14/</a></p>
                        <p className="text-gray-700"><strong>GitHub:</strong> <a href="https://github.com/Rudra1402" target={'_blank'} className="text-blue-500 hover:underline">github.com/rudra14/</a></p>
                    </div>
                    <div className="border-t border-gray-300 rounded-xl">
                        <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12623.073723328213!2d-83.04925118862186!3d42.31743223201452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b65d90f5f9b19%3A0x1ad7b0d118affbc3!2sWindsor%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1594666563580!5m2!1sen!2sus"
                            width="100%"
                            height="300"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact