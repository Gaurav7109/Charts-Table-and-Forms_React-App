import React, { useState } from 'react';
import Modal from './Modal';

const Table = ({ users }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleView = (userId) => {
    // setSelectedUser(userId);
    setShowModal(true);
  };
  const findAge = (user) => {
      const dob = user.dob;
      const dobYear = dob.slice(6,10);
      const today = new Date().getFullYear();
      let difference = Math.abs(today - dobYear);
    return difference;
  }
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1 style={{textAlign: 'center'}}>Table</h1>
      {showModal && <Modal user={selectedUser} closeModal={() => setShowModal(false)} />}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name} {user.last_name}</td>
              <td>{findAge(user)}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleView(user.id)}>View</button>
              </td>
            </tr>
          ))}
           </tbody>
      </table>
      
    </div>
  );
};

export default Table;