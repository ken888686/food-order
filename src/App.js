// import logo from './logo.svg';
// import './App.css';
import Expenses from './components/Expenses';

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
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
