import React from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";

import "./Modal.scss";

type Props = {
  children: JSX.Element | JSX.Element[];
  open: boolean;
  close: () => void;
  [key: string]: any;
};

const Modal: React.FC<Props> = ({ children, open, close, ...restProps }) => {
  return ReactDOM.createPortal(
    <>
      {open && (
        <>
          <div className="overlay" />
          <div {...restProps} className="modal">
            <MdClose className="close" onClick={close} />
            <div>{children}</div>
          </div>
        </>
      )}
    </>,
    document.getElementById("portal")!
  );
};

export default Modal;
