import React, { useState } from 'react';
import './scss/style.scss'; // Ensure styles are properly imported
import SignIn from './SignIn'; // Import SignIn component
//import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from './assets/logo.png';

function Login() {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleAuth = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="login-page">
            <div className="body">
                <div className={`auth-page-container ${isSignUp ? 'active' : ''}`}>
                    {isSignUp ? (
                        <SignIn toggle={toggleAuth} />
                    ) : (
                        <div className="form-container sign-in">
                            <form>
                                <h1>Log In</h1>
                                <div className="social-icons">
                                    <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                                    <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                                    <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                                </div>
                                <span>or use your email account</span>
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <a href="#">Forgot Your Password?</a>
                                <button type="button">Log In</button>
                            </form>
                        </div>
                    )}
                    {!isSignUp && (
                        <div class="toggle-container">
                            <div class="toggle">
                                <div className="toggle-panel">
                                    <div className="toggle-left">
                                        <h1>Hello, Friend!</h1>
                                        <p>Register with your personal details to use all site features</p>
                                        <button onClick={toggleAuth}>Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login;