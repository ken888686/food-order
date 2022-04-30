import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(0);

  const addUserHandler = (name, age) => {
    setUsers((prev) => [...prev, { id: userId, name, age }]);
    setUserId(userId + 1);
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
