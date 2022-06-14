import React from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom';
import firebase from '../firebase'
import { useState, useEffect } from 'react'
import { AiFillEye } from "react-icons/ai"
import { AiFillEyeInvisible } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import './Register.css'
const setLocalStorage = (key, value) => {
    if (window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

const Login = () => {
    let history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const clearInputs = () => {
        setEmail('')
        setPassword('')
    }
    const clearErrors = () => {
        setEmailError('')
        setPasswordError('')
    }
    const handleSignInwithGoogle = () => {
        if (document.getElementById('User').checked) {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth()
                .signInWithPopup(provider)
                .then(res => {
                    if (window !== 'undefined') {
                        if (localStorage.getItem('user') !== null) {
                            localStorage.removeItem('user');
                        } else {
                            localStorage.removeItem('admin');
                        }
                    }
                    setLocalStorage('user', res.user);
                    console.log(res.user);
                    history.push('/dash')
                })
                .catch((error) => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    // ...
                });
        }
        else if(document.getElementById('Admin').checked){
            window.alert("Admin cannot sign up");
        }
        else{
            window.alert("Please select user");
        }
    }
    const handleLogin = () => {
        if (document.getElementById("User").checked) {
            clearErrors()
            firebase.auth()
                .signInWithEmailAndPassword(email, password)
                .then(res => {
                    if (window !== 'undefined') {
                        if (localStorage.getItem('user') !== null) {
                            localStorage.removeItem('user');
                        } else {
                            localStorage.removeItem('admin');
                        }
                    }
                    setLocalStorage('user', res.user);
                    console.log(res.user);
                    history.push('/dash')
                })
                .catch(err => {
                    clearInputs()
                    switch (err.code) {
                        case "auth/invalid-email":
                        case "auth/user-disabled":
                        case "auth/user-not-found":
                            setEmailError(err.message);
                            break;
                        case "auth/wrong-password":
                            setPasswordError(err.message)
                            break;
                    }
                })
        }
        else if (document.getElementById("Admin").checked) {
            if (email === "sadockmlanga@gmail.com" && password === "admin123") {
                if (window !== 'undefined') {
                    if (localStorage.getItem('user') !== null) {
                        localStorage.removeItem('user');
                    } else {
                        localStorage.removeItem('admin');
                    }
                }
                setLocalStorage('admin', { email: "sadockmlanga@gmail.com", password: "admin123" });
                history.push('/members')
            } else {
                window.alert("unauthorized admin access !");
            }
        }
        else {
            window.alert("Please enter all fields");
        }
    }

    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="container py-5 mt-5">
            <div className="mx-auto my-auto shadow p-5" id="container-login">
                <h2 className="text-center mb-4">LOGIN</h2><hr/>
                <div className="form-group">
                    <input
                        type="email"
                        autoFocus required
                        className="form-control form-control-lg"
                        placeholder="Enter Your E-mail"
                        name="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    {emailError? <p className=" alert alert-danger mt-1 errorMsg">{emailError}</p> :<p></p>}
                </div>
                <div className="form-group position-relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        autoFocus required
                        className="form-control form-control-lg"
                        placeholder="Enter Password"
                        name="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div class="text-right" id="toggler-icon">
                        <button class="btn btn-light py-2" id="toggle-button" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                        </button>
                    </div>
                    {passwordError? <p className=" alert alert-danger mt-1 errorMsg">{passwordError}</p> :<p></p>}
                </div>

                <div className="btnContainer">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="Usertype" id="Admin" value="Admin" />
                        <label className="form-check-label" for="Admin">Controller</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="Usertype" id="User" value="User" />
                        <label className="form-check-label" for="User">User</label>
                    </div>
                    <button className="btn btn-primary btn-lg btn-block mt-2 mb-2" onClick={handleLogin}>Login</button>
                    <button className="btn btn-outline-dark rounded-pill btn-lg  mt-2 mb-2" onClick={handleSignInwithGoogle}>Login with Google <FcGoogle /></button>
                    <p className="m-1 text-left">Don't have an account?
                                <Link to='/register'><a> Register</a></Link></p>
                                <Link to='/'><button className="btn btn-secondary btn-sm ml-2">Back Home</button></Link>


                </div>
            </div>
        </div>
    )
}
export default Login;