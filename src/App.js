// import logo from './logo.svg';
// import './App.css';
import ExpenseItem from './components/Expenseitem';

function App() {
  const expenses = [
    {
      id: 1,
      title: 'Car Insurance',
      amount: 100,
      date: new Date(2020, 0, 1),
    },
    {
      id: 2,
      title: 'Car Insurance',
      amount: 200,
      date: new Date(2022, 1, 4),
    },
    {
      id: 3,
      title: 'Car Insurance',
      amount: 300,
      date: new Date(2022, 2, 4),
    },
    {
      id: 4,
      title: 'Car Insurance',
      amount: 400,
      date: new Date(2022, 3, 4),
    },
  ];

  return (
    <div className="App">
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

export default App;
