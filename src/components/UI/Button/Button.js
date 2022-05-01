import classes from './Button.module.scss';

function Button(props) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default Button;
