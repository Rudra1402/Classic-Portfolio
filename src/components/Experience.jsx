import { workExp } from "../data";

export default function Experience() {
  return (
    <section className="w-full flex flex-col items-center my-1" id="experience">
      <div className="w-full bg-[#181e2a] rounded-2xl shadow-2xl p-8 md:p-12">
        <h2 className="text-4xl font-extrabold text-white mb-8 text-center">Experience</h2>
        <div className="flex flex-col gap-8">
          {workExp.map((exp, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/5 border-l-4 border-blue-700 shadow-lg hover:shadow-xl transition duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-semibold text-white">{exp.role}</span>
                  <span className="hidden md:block text-sm text-blue-200">({exp.location})</span>
                </div>
                <div className="text-base text-blue-200">{exp.duration}</div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-medium text-lg text-blue-400">{exp.company}</span>
                <span className="block md:hidden text-sm text-blue-200">({exp.location})</span>
              </div>
              <ul className="list-disc ml-7 mt-2 space-y-2">
                {exp.desc.map((d, idx) => (
                  <li key={idx} className="text-gray-200">{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
