import ExpenseItem from './ExpenseItem';
import './Expenses.scss';

export default function Expenses(props) {
  const { expenses } = props;

  return (
    <div className="expenses">
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
}
