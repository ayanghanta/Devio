"use client";
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { PiX } from "react-icons/pi";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const openModal = setOpenName;

  return (
    <ModalContext.Provider value={{ close, openModal, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, name }) {
  const { openModal } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => openModal(name) });
}

function Window({ children, windowName }) {
  const { openName, close } = useContext(ModalContext);

  if (openName !== windowName) return null;

  return createPortal(
    <>
      <div className="fixed left-0 top-0 h-dvh w-full bg-slate-200/20 backdrop-blur-sm"></div>

      <div className="fixed left-2/4 top-2/4 w-[600px] -translate-x-2/4 -translate-y-2/4 rounded-sm bg-slate-50 px-12 py-8 text-gray-800 shadow shadow-slate-200">
        <button onClick={close}>
          <PiX className="absolute right-2 top-2 h-6 w-6 cursor-pointer text-gray-800 transition duration-300 hover:bg-gray-200" />
        </button>
        {cloneElement(children, { onCloseModal: close })}
      </div>
    </>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
