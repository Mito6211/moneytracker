import React from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";

const OVERLAY_STYLES: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.75)",
  zIndex: 1000,
  backdropFilter: "blur(3px)",
};

const X_STYLES: React.CSSProperties = {
  color: "red",
  cursor: "pointer",
  display: "flex",
  fontSize: "2rem",
};

const MODAL_STYLES: React.CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "purple",
  color: "green",
  padding: "50px",
  zIndex: 1000,
};

type Props = {
  children: JSX.Element;
  open: boolean;
  close: () => void;
  [key: string]: any;
};

const Modal: React.FC<Props> = ({ children, open, close, ...restProps }) => {
  return ReactDOM.createPortal(
    <>
      {open && (
        <>
          <div style={OVERLAY_STYLES} />
          <div {...restProps} style={MODAL_STYLES}>
            <MdClose style={X_STYLES} onClick={close} />
            <div>{children}</div>
          </div>
        </>
      )}
    </>,
    document.getElementById("portal")!
  );
};

export default Modal;
