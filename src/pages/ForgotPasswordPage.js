import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css';

function ForgotPasswordPage() {
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    navigate('/otp');
  };

  return (
    <div>
      <div className="row">
      <form onSubmit={handleForgotPassword}>
      <h2>Forgot Password</h2>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Send OTP</button>
        <p><Link to="/login">back to login .....</Link></p>
      </form>
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/forgot-password-illustration-download-in-svg-png-gif-file-formats--security-logging-on-access-connection-identification-key-lock-unlock-passcode-pack-cyber-illustrations-3916134.png?f=webp" alt="Login illustration" />
      </div>      
    </div>
  );
}

export default ForgotPasswordPage;
