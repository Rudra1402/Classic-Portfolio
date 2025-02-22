import React from "react";
import { techSkills } from "../data";

function Skills() {
    return (
        <div className="flex flex-col w-full p-4 sm:p-6 bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-xl" id="skills">

            <div className="text-2xl sm:text-3xl text-white font-semibold tracking-wide text-center mb-6">
                Skills
            </div>

            <div className="">
                <div className="flex flex-col gap-6 sm:gap-8">
                    {[
                        { title: "Programming Languages", key: "lang" },
                        { title: "Libraries & Frameworks", key: "l&f" },
                        { title: "Databases", key: "db" },
                        { title: "Cloud", key: "cloud" },
                        { title: "Containerization", key: "cont" },
                        { title: "Version Control", key: "vcs" },
                        { title: "Software Development Tools", key: "tool" }
                    ].map((category, idx) => (
                        <div key={idx}>
                            <div className="text-lg text-blue-100 font-semibold tracking-wide mb-3">
                                {category.title}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {techSkills.filter(skill => skill.category === category.key).map((skill, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 p-3 shadow-lg rounded-lg bg-white/10 text-white transition-transform hover:shadow-xl"
                                    >
                                        <skill.Component className="text-xl" />
                                        <span className="text-lg font-medium">{skill.sname}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
