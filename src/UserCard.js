import React from 'react';
import { connect } from 'react-redux';

const UserCard = ({ users }) => (
  <div style={
    {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      flexDirection: 'column'
  }
    }>
    {users.map((user, index) => (
      <div key={index} 
      style={
        {
          border: "2px solid black",
          margin: 5,
          padding: 10,
          width: '70%',
          
      }
        }>
        <h2>{user.name}</h2>
        <p>Age: {user.age}</p>
        <p>Gender: {user.gender}</p>
        <p>Email: {user.email}</p>
      </div>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(UserCard);
