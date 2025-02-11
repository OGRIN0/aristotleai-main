// src/components/UserDropdown.js

import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa'; // Importing Font Awesome user icon
import './UserDropdown.css';

const UserDropdown = ({ user, setUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const userList = ['NIDeltaRole', 'DLDeltaRole']; // Example user list

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleUserSelect = (selectedUser) => {
    if (selectedUser === user) {
      setUser(null); // Deselect the user if it's already selected
    } else {
      setUser(selectedUser); // Select the new user
    }
    setIsOpen(false);
  };

 


  return (
    <div className="user-dropdown">
      {!user ? (
        <button className="user-dropdown-button" onClick={toggleDropdown}>
          <FaUser className="user-icon" /> User
        </button>
      ) : (
        <button className="user-dropdown-button selected" onClick={toggleDropdown}>
          <FaUser className="user-icon" /> {user}
        </button>
      )}
      {isOpen && (
        <div className="user-dropdown-content">
      
          {userList.map((userItem) => (
            <button
              key={userItem}
              className={user === userItem ? 'selected-user' : 'user-item'}
              onClick={() => handleUserSelect(userItem)}
            >
              {userItem}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
