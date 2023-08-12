import "./Modal.scss";
import { createPortal } from "react-dom";
import React, { useEffect } from "react";

const modalRootElement = document.getElementById("modal") as HTMLElement;

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
}

function Modal(props: Props) {
  const { isOpen, setIsOpen, children } = props;
  const element = document.createElement("div");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    modalRootElement?.appendChild(element);
    return () => {
      document.body.style.overflow = "auto";
      modalRootElement?.removeChild(element);
    };
  });

  if (isOpen) {
    return createPortal(
      <div className="modal" onClick={() => setIsOpen(false)}>
        <div
          className="modal__contentBox"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            aria-label="Close"
            className="modal__closeButton"
            onClick={() => setIsOpen(false)}
          />
          {children}
        </div>
      </div>,
      element
    );
  }
  return null;
}

export default Modal;
