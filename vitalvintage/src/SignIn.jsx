import React from 'react';
import './scss/style.css'; // Ensure styles are properly imported

function Login({ toggle }) {
    return (
        <div className="signin-page">
            <div className="body-signin">
                <div className="auth-page-container-signin">
                    <div className="form-container-sign-in">
                        <form>
                            <h1>Create Account</h1>
                            <div className="social-icons-signin">
                                <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button type="button">Sign Up</button>
                        </form>
                    
                        <div class="toggle-container-signin">
                            <div class="toggle-signin">
                                <div className="toggle-panel-signin">
                                    <div className="toggle-right">
                                        <h1>Welcome Back!</h1>
                                        <p>Enter your personal details to use all site features</p>
                                        <button onClick={toggle}>Log In</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;