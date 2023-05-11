import React, { useState, useEffect } from 'react';
import "./App.css";

const findAge = (user) => {
  const dob = user.dob;
      const dobYear = dob.slice(6,10);
      const today = new Date().getFullYear();
      let difference = Math.abs(today - dobYear);
    return difference;
}
const Modal = ({ user, closeModal }) => {
  const [name, setName] = useState(user.first_name +" "+ user.last_name);
  const [age, setAge] = useState(findAge(user));
  const [gender, setGender] = useState(user.gender);
  const [email, setEmail] = useState(user.email);

  useEffect(() => {
    setName(user.first_name +" "+ user.last_name);
    setAge(findAge(user));
    setGender(user.gender);
    setEmail(user.email);
  }, [user]);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div style={
      {
        display:"flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        height: 300,
        // width: '45vh',
        padding: 10,
        flexWrap: 'wrap',
        flexDirection: 'column'
     }
    }>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <br />
        <label>
          Gender:
          
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <button type="submit">Save</button>
        <button onClick={closeModal}>Cancel</button>
      </form>
    </div>
  );
};

export default Modal;