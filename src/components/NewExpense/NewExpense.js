import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.scss';

export default function NewExpense(props) {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpense(expenseData);
  };

  const buttonClickHandler = () => {
    setShowExpenseForm(true);
  };

  const cancelButtonClickHandler = () => {
    setShowExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {showExpenseForm
      && (
      <ExpenseForm
        onSaveExpenseData={onSaveExpenseDataHandler}
        onCancel={cancelButtonClickHandler}
      />
      )}

      {!showExpenseForm
       && (
       <button
         type="button"
         onClick={buttonClickHandler}
       >
         Add New Expense
       </button>
       )}
    </div>
  );
}
