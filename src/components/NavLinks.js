/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navlinks.css';

const NavLinks = () => {
    return (
        <div className="nav-link">
            <NavLink to="/" exact activeClassName="selected-link">Home</NavLink>
            <NavLink to="/find-doctor" activeClassName="selected-link">Find a Doctor</NavLink>
            <NavLink to="/make-appointment" activeClassName="selected-link">Make an Appoinment</NavLink>
        </div>
    );
};

export default NavLinks;