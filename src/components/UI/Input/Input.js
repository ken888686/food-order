import classes from './Input.module.scss';

export default function Input(props) {
  return (
    <div
      className={`
      ${classes.control}
      ${!props.isValid ? classes.invalid : ''}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
}
