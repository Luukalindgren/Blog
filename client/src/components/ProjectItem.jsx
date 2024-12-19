import React from "react";

const ProjectItem = ({ img, title, desc, link, showOverlay, onClick }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-auto shadow-xl shadow-gray-400 rounded-xl group">
      <img
        src={img}
        alt={title}
        className="object-cover w-full h-64 transition-opacity duration-200 cursor-pointer rounded-xl "
        onClick={() => onClick(title)}
      />
      <div
        className={`absolute inset-0 items-center justify-center text-center transition-all duration-300 bg-gradient-to-r from-gray-200/20 to-[#4B1300]/80 rounded-xl ${
          showOverlay ? "flex" : "hidden"
        } md:group-hover:flex`}
        onClick={() => onClick(title)}
      >
        <div>
          <h3 className="text-2xl font-bold tracking-wider text-white">
            {title}
          </h3>
          <p className="pt-2 pb-4 text-white">{desc}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-[200px] hover:scale-105 ease-in duration-200"
          >
            <p className="p-3 text-lg font-bold text-gray-700 bg-white rounded-lg cursor-pointer">
              More info
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
