import React from "react";
import { BiMailSend, BiPhone, BiLinkExternal, BiMap } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
    return (
        <div className="flex flex-col w-full p-4 sm:p-6 bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-xl" id="contact">

            <div className="text-2xl sm:text-3xl text-white font-semibold tracking-wide text-center mb-6">
                Contact
            </div>

            <div className="">
                <div className="flex flex-col gap-4 sm:gap-6">

                    <div className="flex flex-col gap-y-4 p-5 bg-white/10 backdrop-blur-md shadow-lg rounded-xl text-white">
                        <div className="flex items-center gap-3">
                            <BiMailSend className="text-xl text-blue-300" />
                            <strong>Email:</strong>
                            <a href="mailto:patel349@uwindsor.ca" className="text-blue-200 hover:underline">
                                patel349@uwindsor.ca
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <BiPhone className="text-xl text-blue-300" />
                            <strong>Phone:</strong> +1 (226) 975-9142
                        </div>
                        <div className="flex items-center gap-3">
                            <FaLinkedin className="text-xl text-blue-500" />
                            <strong>LinkedIn:</strong>
                            <a href="https://www.linkedin.com/in/rudra14/" target="_blank" className="text-blue-200 hover:underline flex items-center gap-1">
                                linkedin.com/in/rudra14/ <BiLinkExternal />
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaGithub className="text-xl text-gray-300" />
                            <strong>GitHub:</strong>
                            <a href="https://github.com/Rudra1402" target="_blank" className="text-blue-200 hover:underline flex items-center gap-1">
                                github.com/rudra1402 <BiLinkExternal />
                            </a>
                        </div>
                    </div>

                    <div className="border-t border-gray-600 pt-4">
                        <div className="flex items-center gap-3 text-white mb-2">
                            <BiMap className="text-xl text-green-400" />
                            <strong>Location:</strong> Markham, Ontario
                        </div>
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Markham,%20ON+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            width="100%"
                            height="300"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                            className="rounded-lg shadow-md"
                        ></iframe>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;
