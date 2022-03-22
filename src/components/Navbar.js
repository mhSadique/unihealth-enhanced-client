/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import ProfileInfo from './ProfileInfo';
import '../styles/Navbar.css';
import useFirebase from '../hooks/useFirebase';
import { UserContext } from '../Context/Context';
import AdminNavigation from '../Admin/AdminNavigation';

const Navbar = () => {
    useFirebase();
    const { isAdmin } = useContext(UserContext);
    return (
        <nav>
            <div className="nav-container">
                <Logo />
                <div className="nav-info">
                    {isAdmin ? <AdminNavigation /> : <NavLinks />}
                    <ProfileInfo />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;