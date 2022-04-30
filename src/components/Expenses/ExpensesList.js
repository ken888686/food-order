import ExpenseItem from './ExpenseItem';
import './ExpensesList.scss';

export default function ExpensesList(props) {
  const { items } = props;

  if (items.length === 0) {
    return (
      <div className="expenses-list__fallback">
        <p>No expenses</p>
      </div>
    );
  }
  return (
    <ul className="expenses-list">
      {items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
}
