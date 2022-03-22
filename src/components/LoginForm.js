/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router';
import '../styles/LogInForm.css'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { UserContext } from '../Context/Context';

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const LoginForm = () => {
    const location = useLocation();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const redirectUri = location.state?.from || '/';

    const { isLoggedIn, setUser, setIsLoggedIn, error, setError, setAdmin } = useContext(UserContext);

    const handleSubmit = e => {
        if (isLoggedIn) {
            e.preventDefault();
            return;
        };
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const createdUser = userCredential.user;
                console.log(createdUser.email);
                fetch(`https://agile-garden-36261.herokuapp.com/user/${createdUser.email}`,)
                    .then(res => res.json())
                    .then(data => {
                        if (data.user[0].role === 'admin') {
                            setAdmin(true);
                        }
                        setUser(createdUser);
                        setIsLoggedIn(true);
                        setError('');
                        history.push(redirectUri);

                    })

            })
            .catch(err => {
                const errMsg = err.message;
                setError(errMsg);
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleGoogleSignIn = (e) => {
        signInWithPopup(auth, googleProvider)
            .then(userCredential => {
                const createdUser = userCredential.user;
                setUser(createdUser);
                setIsLoggedIn(true);
                setError('');
                history.push(redirectUri);
            })
            .catch(err => {
                const errMsg = err.message;
                setError(errMsg);
            })
        e.preventDefault();
    };


    return (
        <form onSubmit={handleSubmit} >
            <div className="form-container">
                {error && <p style={{ color: 'red' }}>Incorrect Email/Password</p>}
                <h1>Login</h1>
                {isLoggedIn ? <p>You are successfully logged in.</p> : <p>Please fill in this form to login.</p>}
                <hr />

                <label htmlFor="email"><b>Email</b></label> <br />
                <input type="text" onChange={handleEmailChange} placeholder="Enter Email" name="email" id="email" required /> <br />

                <label htmlFor="psw"><b>Password</b></label> <br />
                <input type="password" onChange={handlePasswordChange} placeholder="Enter Password" name="psw" id="psw" required />
                <hr />

                <button type="submit" className="registerbtn">Login</button> <br />
                <button type="submit" onClick={handleGoogleSignIn} className="registerbtn">Sign in with Google</button>
            </div>

            <div className="form-container signin">
                <p>Do not have an account? <Link to="/register">Register</Link>.</p>
            </div>
        </form>
    );
};

export default LoginForm;