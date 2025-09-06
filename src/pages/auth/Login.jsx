import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Sign In</h1>
        <input 
          type="email" 
          placeholder="Email or phone number" 
        />
        <input 
          type="password" 
          placeholder="Password" 
        />
        <button className="signin-btn">Sign In</button>
        
        <div className="or">OR</div>
        
        <button className="signin-code">Use a sign-in code</button>
        
        <a href="#" className="forgot-password">
          Forgot password?
        </a>
        
        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        
        <p className="new-user">
          New to Netflix? <a href="#">Sign up now.</a>
        </p>
        
        <small className="recaptcha-text">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="#">Learn more.</a>
        </small>
      </div>
    </div>
  );
};

export default Login;