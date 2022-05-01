import { createPortal } from 'react-dom';
import classes from './Modal.module.scss';

function Backdrop(props) {
  return (
    <div
      className={classes.backdrop}
      onClick={props.onClose}
      onKeyDown={props.onClose}
      role="button"
      aria-label="Close Modal"
      tabIndex={0}
    />
  );
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

const portalElement = document.getElementById('overlays');

export default function Modal(props) {
  return (
    <>
      {createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement,
      )}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement,
      )}
    </>
  );
}
