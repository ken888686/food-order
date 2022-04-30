import classes from './Button.module.scss';

function Button(props) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={props.type || 'button'}
      className={classes.button}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
