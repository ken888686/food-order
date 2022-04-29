import ExpenseItem from './ExpenseItem';

export default function Expenses(props) {
  const { expenses } = props;

  return expenses.map((item) => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  ));
}
