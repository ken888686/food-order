import Card from './Card';
import Button from './Button';

import classes from './ErrorModal.module.scss';

function ErrorModal(props) {
  return (
    <>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button type="button">OK</Button>
        </footer>
      </Card>
    </>
  );
}

export default ErrorModal;
