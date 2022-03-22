/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/Context';
import { getAuth, signOut } from "firebase/auth";

const ProfileInfo = () => {

    const {setIsLoggedIn, user, isLoggedIn, } = useContext(UserContext);
    
    const logout = (e) => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log('logged out');
            setIsLoggedIn(false);
            localStorage.setItem('isUserLoggedIn', JSON.stringify(false));
        }).catch((error) => {
            // console.log(error.message);
            // setError(error.message);
        });
        e.preventDefault();
    };

    return (
        <div className="profile-info">
            {isLoggedIn || <Link to="/login">Login</Link>}
            {isLoggedIn && <Link to="" onClick={(e) => logout(e)} >Logout</Link>}
            {isLoggedIn || <Link to="/register">Register</Link>}
            {(isLoggedIn && user.displayName) && <span className="name">{user.displayName}</span>}
            {(isLoggedIn && user.displayName) && <img src={user.photoURL}
                alt="Image" />}
        </div>
    );
};

export default ProfileInfo;