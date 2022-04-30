import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.scss';

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle('Hi');
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <p className="expense-item__price">
            $
            {props.amount}
          </p>
        </div>
        <button type="button" onClick={() => clickHandler()}>
          Change Title
        </button>
      </Card>
    </li>
  );
}
