import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.scss';

export default function ExpenseItem(props) {
  const { title, amount, date } = props;
  const clickHandler = (input) => {
    console.log(input);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <p className="expense-item__price">
          $
          {amount}
        </p>
      </div>
      <button type="button" onClick={() => clickHandler(title)}>
        Change Title
      </button>
    </Card>
  );
}
