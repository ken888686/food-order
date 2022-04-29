import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: 1,
      title: 'Car A',
      amount: 100,
      date: new Date(2020, 0, 1),
    },
    {
      id: 2,
      title: 'Car B',
      amount: 200,
      date: new Date(2022, 1, 4),
    },
    {
      id: 3,
      title: 'Car C',
      amount: 300,
      date: new Date(2022, 2, 4),
    },
    {
      id: 4,
      title: 'Car D',
      amount: 400,
      date: new Date(2022, 3, 4),
    },
  ];

  return (
    <div className="App">
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
