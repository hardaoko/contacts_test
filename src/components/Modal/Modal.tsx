import { FC, useEffect } from "react";
import "./Modal.css";
import CloseIcon from '@mui/icons-material/Close';
import { createPortal } from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { IModalProps } from "../../utils/types";

export const Modal:FC<IModalProps> = ({ title, onClose, children }) => {
  const modalRoot: HTMLElement = document.getElementById("react-modal") as HTMLElement;

  useEffect(() => {
    const handleEscapeClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keyup", handleEscapeClose);
    return () => {
      document.removeEventListener("keyup", handleEscapeClose);
    };
  }, [onClose]);

  return createPortal(
    <>
      <div className='modal_container'>
        <div className='modal_header'>
            <h2 className='header_title'>
              Add Contact
            </h2>
          <button onClick={onClose} className='modal_button' data-at="close-button">
            <CloseIcon/>
          </button>
        </div>
        {children}
      </div>
      <ModalOverlay onClose={onClose} />
    </>,
    modalRoot
  );
};


