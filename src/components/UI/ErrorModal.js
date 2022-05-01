import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';

import classes from './ErrorModal.module.scss';

function Backdrop() {
  return <div className={classes.backdrop} />;
}

function ModalOverlay(props) {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button type="button" onClick={props.onConfirm}>OK</Button>
      </footer>
    </Card>
  );
}

function ErrorModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onConfirm} />,
        document.getElementById('backdrop-root'),
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />,
        document.getElementById('overlay-root'),
      )}
    </>
  );
}

export default ErrorModal;
