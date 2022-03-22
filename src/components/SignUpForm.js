/* eslint-disable jsx-a11y/anchor-is-valid */
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router';
import { UserContext } from '../Context/Context';
import '../styles/LogInForm.css'

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
const SignUpForm = () => {
    const location = useLocation();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const redirectUri = location.state?.from || '/';

    const { user, isLoggedIn, setIsLoggedIn, setUser, setError } = useContext(UserContext);
    console.log(user, isLoggedIn);

    const handleSubmit = e => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const createdUser = userCredential.user;
                if (createdUser) {
                    fetch('https://agile-garden-36261.herokuapp.com/user/create', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({ email: createdUser.email, role: "user" })
                    })
                        .then(res => res.json())
                        .then(data => {
                            setUser(createdUser);
                            setIsLoggedIn(true);
                            console.log(data);
                        })
                }

            })
            .catch(err => {
                const errMsg = err.message;
                console.log(errMsg);
            })
        e.preventDefault();
    };

    const handleEmailChange = e => {
        setEmail(e.target.value)
        e.preventDefault();
    };

    const handlePasswordChange = e => {
        setPassword(e.target.value)
        e.preventDefault();
    };

    const hadleGoogleRegister = (e) => {
        signInWithPopup(auth, googleProvider)
            .then(userCredential => {
                const createdUser = userCredential.user;
                if (createdUser) {
                    fetch('https://agile-garden-36261.herokuapp.com/user/create', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({ email: createdUser.email, role: "user" })
                    })
                        .then(res => res.json())
                        .then(data => {
                            setUser(createdUser);
                            setIsLoggedIn(true);
                            setError('');
                            console.log(data);
                            history.push(redirectUri);
                        })
                }
            })
            .catch(err => {
                const errMsg = err.message;
                setError(errMsg);
            })
        e.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-container">
                <h1>Register</h1>
                <p>Please fill in this form to register.</p>
                <hr />

                <label htmlFor="email"><b>Email</b></label> <br />
                <input type="text" onChange={handleEmailChange} placeholder="Enter Email" name="email" id="email" required /> <br />

                <label htmlFor="psw"><b>Password</b></label> <br />
                <input type="password" onChange={handlePasswordChange} placeholder="Enter Password" name="psw" id="psw" required />
                <hr />

                <button type="submit" className="registerbtn">Register</button> <br />
                <button onClick={hadleGoogleRegister} type="submit" className="registerbtn">Register with Google</button>
            </div>

            <div className="form-container signin">
                <p>Already have an account? <Link to="/login">Login</Link>.</p>
            </div>
        </form>
    );
};

export default SignUpForm;
