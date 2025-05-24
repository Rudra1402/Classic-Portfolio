import { techSkills } from "../data";

function Skills() {
    const categories = [
        { title: "Programming Languages", key: "lang" },
        { title: "Libraries & Frameworks", key: "l&f" },
        { title: "Databases", key: "db" },
        { title: "Cloud", key: "cloud" },
        { title: "Containerization", key: "cont" },
        { title: "Version Control", key: "vcs" },
        { title: "Software Development Tools", key: "tool" }
    ];

    return (
        <section className="w-full flex flex-col items-center my-1" id="skills">
            <div className="w-full bg-[#181e2a] rounded-2xl shadow-2xl p-8 md:p-12">
                <h2 className="text-4xl font-extrabold text-white mb-8 text-center">Skills</h2>
                <div className="flex flex-col gap-10">
                    {categories.map((category, idx) => (
                        <div key={idx}>
                            <div className="text-xl text-white font-semibold tracking-wide mb-4 border-b-4 border-blue-600 pb-2 w-fit">
                                {category.title}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {techSkills.filter(skill => skill.category === category.key).map((skill, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 p-4 bg-white/5 border-l-4 border-blue-600 rounded-xl shadow-lg hover:shadow-2xl transition hover:scale-[1.03] text-white"
                                    >
                                        <skill.Component className="text-2xl text-blue-400" />
                                        <span className="text-lg font-semibold">{skill.sname}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
