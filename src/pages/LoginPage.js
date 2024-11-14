import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css';

function LoginPage() {
  const [role, setRole] = useState('patient');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate(`/${role}`);
  };

  return (
    <div className="main">
      
      <div className="row">
      <form onSubmit={handleLogin}>
      <h2>Login</h2>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="administrator">Administrator</option>
          <option value="doctor">Doctor</option>
          <option value="employee">Employee</option>
          <option value="patient">Patient</option>
        </select>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p>Forgot Password? <Link to="/forgot-password">Click Here</Link></p>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </form>
      <img src="https://www.codekingsolutions.com/frontend/images/cloud-services/hospital-management-system.png" alt="Login illustration" />
      </div>
      
      
    </div>
  );
}

export default LoginPage;
