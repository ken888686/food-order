import React from 'react';
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

  const testTitle = 'Let\'s Go!';

  // return (
  //   <div className="App">
  //     <h1>{testTitle}</h1>
  //     <Expenses expenses={expenses} />
  //   </div>
  // );

  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement('h2', {}, testTitle),
    React.createElement(Expenses, { expenses }),
  );
}

export default App;
