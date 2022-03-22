/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navlinks.css';
import '../styles/AdminDashboard.css'

const AdminDashboard = () => {
    return (
        <nav className='main-link-container'>
            <div className='link-container'>
                <NavLink to="/reviews" exact activeClassName="selected-link">Manage Reviews</NavLink>
                <NavLink to="/appointments" activeClassName="selected-link">Manage Appointments</NavLink>
            </div>
        </nav>
    );
};

export default AdminDashboard;
