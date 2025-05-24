import { education } from "../data";

function Education() {
  return (
    <section className="w-full flex flex-col items-center my-1" id="education">
      <div className="w-full bg-[#181e2a] rounded-2xl shadow-2xl p-8 md:p-12">
        <h2 className="text-4xl font-extrabold text-white mb-8 text-center">Education</h2>
        <div className="flex flex-col gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/5 border-l-4 border-blue-700 shadow-lg hover:shadow-2xl transition duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <span className="text-xl font-semibold text-white">
                  {edu.courseDegree}, <span className="text-blue-400">{edu.major}</span>
                </span>
                <span className="text-sm text-blue-200">{edu.duration}</span>
              </div>
              <div className="mt-2">
                <div className="text-lg text-blue-300 font-bold">{edu.institute}</div>
                <div className="text-gray-300">{edu.city}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
