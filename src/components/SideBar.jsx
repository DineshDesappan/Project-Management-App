import React from "react";
import Button from "./Button";
import { list } from "postcss";

function SideBar({ oncreate, projects }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-black text-stone-50 rounded-r-xl md:w-72">
      <h2 className="mb-8 font-bold md:text-xl text-stone-200 uppercase">
        Your Projects
      </h2>
      <div>
        <Button onClick={oncreate}> + Add Project</Button>
      </div>
      <ul className="my-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full px-2 py-1 text-left text-stone-400 hover:text-stone-200 hover:bg-stone-800 rounded-sm my-1">{project.title}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SideBar;
