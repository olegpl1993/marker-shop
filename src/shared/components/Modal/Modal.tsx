"use client";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
}

function Modal(props: Props) {
  const { isOpen, setIsOpen, children } = props;

  const element =
    typeof document !== "undefined" ? document.createElement("div") : null;

  useEffect(() => {
    if (element) {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
      const modalRootElement = document.getElementById(
        "portal-modal"
      ) as HTMLElement;
      modalRootElement?.appendChild(element);
      return () => {
        document.body.style.overflow = "auto";
        modalRootElement?.removeChild(element);
      };
    }
  }, [isOpen, element]);

  if (isOpen && element) {
    return createPortal(
      <div className="modalWindow" onClick={() => setIsOpen(false)}>
        <div
          className="modalWindow__contentBox"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            aria-label="Close"
            className="modalWindow__closeButton"
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
