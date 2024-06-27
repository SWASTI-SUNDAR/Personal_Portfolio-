// @flow strict

import Link from "next/link";
import * as React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="flex p-3 justify-between items-center ">
        <div className="flex gap-2 ">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <div>
          <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
            {project.name}
          </p>
        </div>
        <div className="cursor-pointer">
          <Link href={project.link || ""} target="_blank">
            <FaExternalLinkAlt />
          </Link>
        </div>
      </div>
      <div
        className={`"overflow- border-t-[2px]  border-indigo-900 px-4 lg:px- py-4 lg:py-8"`}
      >
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="">
            <img
              src={project.image}
              className="object-contain rounded-lg "
              alt=""
            />
          </div>
          <div>
            <span>{project.description}</span>
          </div>
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;
