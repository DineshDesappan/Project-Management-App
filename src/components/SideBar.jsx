import React from "react";
import Button from "./Button";
import { list } from "postcss";

function SideBar({ oncreate, projects, onSelectedProject, selectedProjectId }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-black text-stone-50 rounded-r-xl md:w-72">
      <h2 className="mb-8 font-bold md:text-xl text-stone-200 uppercase">
        Your Projects
      </h2>
      <div>
        <Button onClick={oncreate}> + Add Project</Button>
      </div>
      <ul className="my-8">
        {projects.map((project) => {
          let cssClasses = "w-full px-2 py-1 text-left text-stone-400 hover:text-stone-200 hover:bg-stone-800 rounded-sm my-1";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-700 text-stone-400";
          }else {
            cssClasses += " bg-stone-950 ";
          }

          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectedProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default SideBar;
