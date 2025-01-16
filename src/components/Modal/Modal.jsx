import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import "./Modal.css";
import Button from "../Button/Button";

function Modal({ children, show }) {
  const modal = useRef();

  useEffect(() => {
    if (show) {
      modal.current.showModal();
    } else {
      modal.current.close();
    }
  }, [show]);

  return (
    <>
      {createPortal(
        <dialog ref={modal}>{children}</dialog>,
        document.getElementById("modal")
      )}
    </>
  );
}

export default Modal;
