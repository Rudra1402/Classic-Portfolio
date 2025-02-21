import React from "react";
import { workExp } from "../data";

function Experience() {
  return (
    <div className="flex flex-col w-full p-4 sm:p-6 bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-xl" id="experience">

      <div className="text-2xl sm:text-3xl text-white font-semibold tracking-wide text-center mb-6">
        Experience
      </div>

      <div className="">
        <div className="flex flex-col gap-4 sm:gap-5">
          {workExp.map((exp, index) => (
            <div
              key={index}
              className="p-6 flex flex-col gap-y-2 shadow-lg rounded-xl bg-white/10 !text-white transition-transform hover:shadow-xl"
            >
              <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between gap-3 lg:gap-4">

                <div className="flex items-end justify-start gap-2">
                  <div className="text-xl font-semibold cursor-pointer">
                    {exp.role}
                  </div>
                  <div className="hidden sm:block text-sm">
                    ({exp.location})
                  </div>
                </div>

                <div className="text-base">
                  {exp.duration}
                </div>
              </div>

              <div className="flex items-center justify-start gap-2">
                <div className="font-medium text-lg">{exp.company}</div>
                <div className="block sm:hidden text-sm">({exp.location})</div>
              </div>

              <div className="px-1 md:px-2 flex flex-col gap-y-2">
                {exp.desc.map((d, idx) => (
                  <div key={idx} className="flex gap-2">
                    <div className="text-blue-300">•</div>
                    <div className="text-gray-200">{d}</div>
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

export default Experience;
