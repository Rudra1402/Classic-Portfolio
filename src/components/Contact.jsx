import { BiMailSend, BiPhone, BiLinkExternal, BiMap } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
    return (
        <section className="w-full flex flex-col items-center my-1" id="contact">
            <div className="w-full bg-[#181e2a] rounded-2xl shadow-2xl p-8 md:p-12">
                <h2 className="text-4xl font-extrabold text-white mb-8 text-center">Contact</h2>
                <div className="flex flex-col gap-8">
                    {/* Contact Info Card */}
                    <div className="flex flex-col gap-5 p-6 bg-white/5 border-l-4 border-blue-600 rounded-xl shadow-lg">
                        <div className="flex items-center gap-3 group">
                            <BiMailSend className="text-2xl text-blue-400 group-hover:scale-110 transition-transform" />
                            <strong className="min-w-[60px] text-white">Email:</strong>
                            <a
                                href="mailto:patel349@uwindsor.ca"
                                className="text-blue-200 hover:underline hover:text-blue-400 transition"
                            >
                                patel349@uwindsor.ca
                            </a>
                        </div>
                        <div className="flex items-center gap-3 group">
                            <BiPhone className="text-2xl text-blue-400 group-hover:scale-110 transition-transform" />
                            <strong className="min-w-[60px] text-white">Phone:</strong>
                            <span className="text-gray-200">+1 (226) 975-9142</span>
                        </div>
                        <div className="flex items-center gap-3 group">
                            <FaLinkedin className="text-2xl text-blue-500 group-hover:scale-110 transition-transform" />
                            <strong className="min-w-[60px] text-white">LinkedIn:</strong>
                            <a
                                href="https://www.linkedin.com/in/rudra14/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-200 hover:underline hover:text-blue-400 transition flex items-center gap-1"
                            >
                                linkedin.com/in/rudra14/
                                <BiLinkExternal className="text-base" />
                            </a>
                        </div>
                        <div className="flex items-center gap-3 group">
                            <FaGithub className="text-2xl text-gray-300 group-hover:scale-110 transition-transform" />
                            <strong className="min-w-[60px] text-white">GitHub:</strong>
                            <a
                                href="https://github.com/Rudra1402"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-200 hover:underline hover:text-blue-400 transition flex items-center gap-1"
                            >
                                github.com/rudra1402
                                <BiLinkExternal className="text-base" />
                            </a>
                        </div>
                    </div>

                    {/* Map Card */}
                    <div className="p-6 bg-white/5 border-l-4 border-green-500 rounded-xl shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <BiMap className="text-2xl text-green-400" />
                            <strong className="text-white text-lg">Location:</strong>
                            <span className="text-gray-200">Markham, Ontario</span>
                        </div>
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Markham,%20ON+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            width="100%"
                            height="220"
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
        </section>
    );
}

export default Contact;
