"use client";

import React from "react";
import { teamData } from "../../../lib/constants/about";
import TeamSection from "./TeamSection";

export default function TeamPapge() {
  return (
    <div className="bg-white text-gray-800 mx-auto mb-16 sm:mb-24 px-4 sm:px-6 lg:px-8 text-center">
      <div className="text-[15px] font-bold md:text-[20px] sm:text-[18px] mb-2 sm:mb-4">
        우리의 팀
      </div>
      <div className="text-[20px] font-black mb-[3rem] md:text-[35px] lg:text-[40px] ">
        우리는 연대하고 협력하며, 도전합니다.
      </div>
      <div className="w-full lg:w-[64rem] mx-auto">
        {/* Team Sections */}
        <div className="flex flex-col md:flex-row gap-4">
          {teamData.map((team) => (
            <TeamSection key={team.title} {...team} />
          ))}
        </div>
      </div>
    </div>
  );
}
