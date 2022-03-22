/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navlinks.css';
import '../styles/Navbar.css';

const AdminNavigation = () => {
    return (
        <div className="nav-link">
            <NavLink to="/" exact activeClassName="selected-link">Home</NavLink>
            <NavLink to="/admin" activeClassName="selected-link">Admin Dashboard</NavLink>
        </div>
    );
};

export default AdminNavigation;