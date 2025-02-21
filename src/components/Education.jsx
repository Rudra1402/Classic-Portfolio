import React from "react";
import { education } from "../data";

function Education() {
  return (
    <div className="flex flex-col w-full p-4 sm:p-6 bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-xl" id="education">

      {/* Section Title */}
      <div className="text-2xl sm:text-3xl text-white font-semibold tracking-wide text-center mb-6">
        Education
      </div>

      {/* Education List */}
      <div className="">
        <div className="flex flex-col gap-4 sm:gap-5">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 flex flex-col gap-y-1.5 shadow-lg rounded-xl bg-white/10 text-white transition-transform hover:shadow-xl"
            >
              {/* Degree & Duration */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
                <div className="text-xl font-semibold tracking-wide">
                  {edu.courseDegree}, <span className="text-blue-400">{edu.major}</span>
                </div>
                <div className="text-sm">
                  {edu.duration}
                </div>
              </div>

              {/* Institution & City */}
              <div className="">
                <div className="text-gray-100 font-semibold tracking-wide text-lg mb-1">{edu.institute}</div>
                <div className="text-gray-300">{edu.city}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
