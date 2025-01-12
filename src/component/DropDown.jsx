import React from 'react';
import './dropdown.css'; // Custom styles for sidebar
import { Link } from 'react-router-dom';

const DropDown = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h5 style={{color:"#0A0B1A"}}>Menu</h5>
        <button
          className="btn-close"
          onClick={toggleSidebar}
          aria-label="Close"
        >
          X
        </button>
      </div>
      <div className="sidebar-body">
        <ul>
          <li>
            <Link style={{color:"#0047FF", fontWeight:"800"}}to="./" onClick={toggleSidebar}>Home</Link>
          </li>
          <li>
            <Link to="" onClick={toggleSidebar}>Contact</Link>
          </li>
        
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
