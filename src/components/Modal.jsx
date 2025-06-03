import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

function Modal({ children, buttontext, ref }) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 shadow-md rounded-md">
      {children}
      <form method="dialog" className="text-right">
        <Button>{buttontext}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}

export default Modal;
