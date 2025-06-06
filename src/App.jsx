import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    projectId: undefined,
    project: [],
    task: [],
  });

  function handleCreateProject() {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        projectId: null,
      };
    });
  }

  function handleSelectedProject(projectId) {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        projectId: projectId,
      };
    });
  }
  function handleCancelProject() {
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
        projectId: undefined,
        project: [...projectState.project, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        projectId: undefined,
        project: prevProject.project.filter(
          (project) => project.id !== prevProject.projectId
        ),
      };
    });
  }

  function addTask(text) {
    setProjectState((prevProject) => {
      const newTask = {
        text: text,
        projectId: prevProject.projectId,
        id: Math.random(),
      };
      return {
        ...prevProject,
        task: [...prevProject.task, newTask],
      };
    });
  }
  function deleteTask(id) {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        task: prevProject.task.filter((task) => task.id !== id),
      };
    });
  }

  const selectedProjectId = projectState.project.find(
    (project) => project.id === projectState.projectId
  );
  let content = (
    <SelectedProject
      onAddTask={addTask}
      onDeleteTask={deleteTask}
      onDelete={handleDeleteProject}
      project={selectedProjectId}
      tasks={projectState.task}
    />
  );
  if (projectState.projectId === null) {
    content = (
      <NewProject onCancel={handleCancelProject} onAdd={handleAddProject} />
    );
  } else if (projectState.projectId === undefined) {
    content = <NoProject onCreate={handleCreateProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        selectedProjectId={projectState.projectId}
        onSelectedProject={handleSelectedProject}
        projects={projectState.project}
        oncreate={handleCreateProject}
      />
      {/* <NewProject/> */}
      {content}
    </main>
  );
}

export default App;
