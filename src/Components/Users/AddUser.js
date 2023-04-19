import React, {useState, useRef} from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
////////////////////////////////////////////////
const AddUser = ( props ) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  
  const [enteredError, setError] = useState();

  const addUserHandler = ( event ) => {
    event.preventDefault();
     const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    console.log( enteredUsername, enteredAge );
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
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    }
  
  
  
  const setErrorHandler = () => {
    setError( null );
  }

  return (
    <Wrapper>
      {enteredError && <ErrorModal title={enteredError.title} message={enteredError.message} onConfirm={setErrorHandler} />} 
      <Card className={styles.input}>
        <form onSubmit={addUserHandler} >
          <label htmlFor="username" >Username</label>
          <input  id="username" type="text"  ref={nameInputRef} />
          <label htmlFor="age">Age(Year)</label>
          <input id="age" type="number"  ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
   
  );
}

export default AddUser;