/* eslint-disable react/jsx-props-no-spreading */
import classes from './Input.module.scss';

export default function Input(props) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
}
