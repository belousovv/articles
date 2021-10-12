import React from "react";
import "./Modal.scss";

const Modal: React.FC<PropsType> = ({ isActive, setIsActive, children }) => {
  return (
    <div
      className={`modal ${isActive && "modal--active"}`}
      onClick={() => setIsActive(false)}
    >
      <div
        className={`modal__content ${isActive && "modal__content--active"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;

// Types

type PropsType = {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
};
