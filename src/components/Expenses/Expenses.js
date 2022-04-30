import { useState } from 'react';
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import './Expenses.scss';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

export default function Expenses(props) {
  const { expenses } = props;

  const [filteredYear, setFilteredYear] = useState(0);

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
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </div>
  );
}
