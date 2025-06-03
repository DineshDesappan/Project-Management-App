import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import SideBar from "./components/SideBar";

function App() {
  const [projectState, setProjectState] = useState({
    projectId: undefined,
    project: [],
  });

  function handleCreateProject() {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        projectId: null,
      };
    });
  }


function handleCancelProject(){
   setProjectState((prevProject) => {
      return {
        ...prevProject,
        projectId: undefined,
      };
    });
}  
function handleAddProject(projectData) {
    setProjectState((prevProject) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevProject,
        projectId:undefined,
        project: [...projectState.project, newProject],
      };
    });
  }

  let content;
  if (projectState.projectId === null) {
    content = <NewProject onCancel={handleCancelProject} onAdd={handleAddProject}/>;
  } else if (projectState.projectId === undefined) {
    content = <NoProject onCreate={handleCreateProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar projects={projectState.project} oncreate={handleCreateProject} />
      {/* <NewProject/> */}
      {content}
    </main>
  );
}

export default App;
