import React, { useState } from "react";

function NewTask({onAddTask}) {
  const [enteredTask, setEnteredTask] = useState("");
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if(enteredTask.trim() === "") {
      return;
    }
    onAddTask(enteredTask);
    setEnteredTask("");
  }
  return (
    <div className="flex gap-4 ">
      <input
        onChange={handleChange}
        value={enteredTask}
        type="text"
        className="w-64 rounded-sm px-2 py-1 bg-stone-200 "
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
