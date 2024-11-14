import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css';

function SignupPage() {
  const [role, setRole] = useState('patient');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/otp');
  };

  return (
    <div>
      <div className="row">
      <form onSubmit={handleSignup}>
      <h2>Sign Up</h2>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="administrator">Administrator</option>
          <option value="doctor">Doctor</option>
          <option value="employee">Employee</option>
          <option value="patient">Patient</option>
        </select>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/031/718/405/small_2x/young-man-nurse-with-a-stethoscope-pointing-at-clipboard-paper-medical-check-up-free-png.png" alt="Login illustration" />
      </div>
      
      
      
    </div>
  );
}

export default SignupPage;
