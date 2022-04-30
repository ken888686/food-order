import { useState } from 'react';
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.scss';

export default function Expenses(props) {
  const { expenses } = props;

  const [filteredYear, setFilteredYear] = useState(2020);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(parseInt(selectedYear, 10));
  };

  const filteredExpenses = filteredYear === 0
    ? expenses
    : expenses.filter(
      (expense) => expense.date.getFullYear() === filteredYear,
    );

  return (
    <div className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {filteredExpenses.map((item) => (
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
