import React, {useState} from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
////////////////////////////////////////////////
const AddUser = ( props ) => {

  const [enteredUsername, setEnteredUsername] = useState( '' );
  const [enteredAge, setEnteredAge] = useState( '' );
  const [enteredError, setError] = useState();

  const addUserHandler = ( event ) => {
    event.preventDefault();
    if ( enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ) {
      setError( {
        title: 'Invalid input', message: 'Please enter a valid name and age (non-empty values)'
      } );
      return;
    }
    if ( +enteredAge < 1 ) {
        setError( {
          title: 'Invalid Age', message: 'Please enter a valid age'
        } );
      return;
    }
    props.onAddUser( enteredUsername, enteredAge );
    setEnteredUsername( '' );
    setEnteredAge( '' );
    }
  
  const userNameChanger = ( event ) => {
    setEnteredUsername( event.target.value );
  }
  const userAgeChanger = ( event ) => {
    setEnteredAge( event.target.value );
  }
  
  const setErrorHandler = () => {
    setError( null );
  }

  return (
    <div>
      {enteredError && <ErrorModal title={enteredError.title} message={enteredError.message} onConfirm={setErrorHandler} />} 
      <Card className={styles.input}>
        <form onSubmit={addUserHandler} >
          <label htmlFor="username" >Username</label>
          <input id="username" type="text" value={enteredUsername} onChange={userNameChanger} />
          <label htmlFor="age">Age(Year)</label>
          <input id="age" type="number" value={enteredAge} onChange={userAgeChanger} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
   
  );
}

export default AddUser;