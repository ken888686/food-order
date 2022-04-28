import './ExpenseItem.css';

export default function ExpenseItem(props) {
  const { title, amount, date } = props;
  return (
    <div className="expense-item">
      <div>{date.toLocaleDateString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <p className="expense-item__price">
          $
          {amount}
        </p>
      </div>
    </div>
  );
}
