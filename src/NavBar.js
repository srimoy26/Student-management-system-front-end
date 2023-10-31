

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h2>Student management system</h2>
      <ul>
        <li>
          <Link to="/students">Student List</Link>
        </li>
        <li>
          <Link to="/add-student">Add Student</Link>
        </li>
        <li>
          <Link to="/courses">Enrolledstudents</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
