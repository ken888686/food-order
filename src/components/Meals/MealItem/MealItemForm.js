import Input from '../../UI/Input';
import classes from './MealItemForm.module.scss';

export default function MealItemForm(props) {
  return (
    <form action="" className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type="button"> + Add</button>
    </form>
  );
}
