import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const modal = useRef();

  function handlesave() {
    const enteredTitle = title.current.value;
    const entereddescription = description.current.value;
    const entereddate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      entereddescription.trim() === "" ||
      entereddate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: entereddescription,
      dueDate: entereddate,
    });
  }
  return (
    <>
      <Modal ref={modal} buttontext="Close">
        <h2 className='text-stone-700 font-bold my-4 text-xl'>Invalid Input</h2>
        <p className='font-bold text-stone-600 my-4'>OOps... Looks like you forgot to enter a value.</p>
        <p className='font-bold text-stone-600 my-4'> 
          Please make sure that you entered a valid value for every input field
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end my-4 gap-4">
          <li>
            <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handlesave}
              className="px-6 py-2 rounded-md bg-stone-800 hover:bg-stone-950 text-stone-50"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textArea={true} />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}

export default NewProject;
