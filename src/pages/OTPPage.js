import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

function OTPPage() {
  const navigate = useNavigate();

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    navigate('/NewPassword');
  };

  return (
    <div>
      <div className="row">
      <form onSubmit={handleVerifyOTP}>
      <h2>Enter OTP</h2>
        <input type="text" placeholder="Enter OTP" required />
        <button type="submit">Verify</button>
      </form>
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/otp-code-to-unlock-illustration-download-in-svg-png-gif-file-formats--password-authentication-security-one-time-text-passcode-pack-cyber-illustrations-3916139.png?f=webp" alt="Login illustration" />
      </div>
    </div>
  );
}

export default OTPPage;
