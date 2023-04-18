import React, {useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';
function App () {
  const [enteredUserList, setUserList] = useState( [] );

  const userSupplier = ( uName, uAge ) => {
    setUserList( ( previousList ) => {
     return [...previousList ,{ name: uName, age: uAge, id: Math.random().toString() } ];
    })
  }
  return (
    <div>
      <AddUser onAddUser={userSupplier} />
      <UserList users={enteredUserList} />
    </div>
  );
}

export default App;
