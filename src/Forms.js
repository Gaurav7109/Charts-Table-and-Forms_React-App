import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Form.css'

const Form = ({ dispatch }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [formValid, setFormValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_USER', payload: { name, age, gender, email } });
    setName('');
    setAge('');
    setGender('');
    setEmail('');
    setFormValid(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setFormValid(e.target.value !== '' && age !== '' && gender !== '' && email !== '');
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
    setFormValid(name !== '' && e.target.value !== '' && gender !== '' && email !== '');
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    setFormValid(name !== '' && age !== '' && e.target.value !== '' && email !== '');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setFormValid(name !== '' && age !== '' && gender !== '' && e.target.value !== '');
  };

  return (<>
    <h1 style={{textAlign: 'center'}}>Form</h1>
    <form style = {{
            display: "flex",
           flexDirection: 'column',
           justifyContent: 'center',
           alignItems: 'center',
           backgroundColor: 'grey',
           height: 350,
           
        }}
    onSubmit={handleSubmit} >
      <label htmlFor="name">Name:</label>
      <input style = {{width:500}} type="text" id="name" name="name" value={name} onChange={handleNameChange} />
      <br/>
      <label htmlFor="age">Age:</label>
      <input style = {{width:500}} type="number" id="age" name="age" value={age} onChange={handleAgeChange} />
      <br/>
      <label htmlFor="gender">Gender:</label>
      <select id="gender" name="gender" value={gender} onChange={handleGenderChange}>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <br/>
      <label htmlFor="email">Email:</label>
      
      <input style = {{width:500}} type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
      <br/>
      <button type="submit" disabled={!formValid}>Submit</button>
    </form>
    </>
  );
};

export default connect()(Form);

// const styles = StyleSheet.create ({
//   container: {
//      flexDirection: 'column',
//      justifyContent: 'center',
//      alignItems: 'center',
//      backgroundColor: 'grey',
//      height: 600
//   },
//   redbox: {
//      width: 100,
//      height: 100,
//      backgroundColor: 'red'
//   },
//   bluebox: {
//      width: 100,
//      height: 100,
//      backgroundColor: 'blue'
//   },
//   blackbox: {
//      width: 100,
//      height: 100,
//      backgroundColor: 'black'
//   },
// })