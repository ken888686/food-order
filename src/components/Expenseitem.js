import './ExpenseItem.css';

export default function ExpenseItem(props) {
  const { title, amount, date } = props;
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.toLocaleString('default', { day: '2-digit' });
  const year = date.getFullYear();
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
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
