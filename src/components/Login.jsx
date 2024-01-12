import React from "react";
import "../components/Login.css";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import videoBg from '../assets/loginBackground.mp4'
import {useNavigate} from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  const navigateToDashboard = () => {
    // 👇️ navigate to /contacts
    navigate('/dashboard');
  };


  return (
    <div className="wrapper">
      <video className="video" src={videoBg} autoPlay loop muted />
      <form className="form" action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUserAlt className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>

        <div className="remember-forget">
          <label>
            <input type="checkbox" /> Remember Me </label>
          <a href="#">Forgot Password?</a>
        </div>

        <button onClick={navigateToDashboard} className="submit" type="submit">Login</button>

        <div className="register-link">
          <p>
            Don't have an account?
            <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
