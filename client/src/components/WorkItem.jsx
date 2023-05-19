import React from "react";

const WorkItem = ({ title, company, year, duration, description }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-500">
      <li className="mb-10 ml-4 ">
        <div className="absolute w-3 h-3 bg-stone-500 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[#4B1300] rounded-md">
            {year}
          </span>
          <span className="text-lg font-semibold text-[#4B1300]">{title}</span>
          <span className="my-1 text-sm font-normal leading-none text-stone-400">
            {company}
          </span>
        </p>
        <p>{description}</p>
      </li>
    </ol>
  );
};

export default WorkItem;
