/* eslint-disable react/jsx-props-no-spreading */
import { forwardRef } from 'react';
import classes from './Input.module.scss';

const Input = forwardRef((props, ref) => (
  <div className={classes.input}>
    <label htmlFor={props.input.id}>{props.label}</label>
    <input ref={ref} {...props.input} />
  </div>
));

export default Input;
