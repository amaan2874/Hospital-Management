import React, { useState } from "react";
import '../styles.css';

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      alert("Password updated successfully!");
      // Add your password update logic here.
    } else {
      alert("Passwords do not match. Please try again.");
    }
  };

  return (
    <div className="new-password-container">
      <div className="row">
      <form className="new-password-form" onSubmit={handleSubmit}>
        <h2>Reset Password</h2>
        <input
          type="password"
          placeholder="Enter New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Update Password</button>
        <p>Remembered your password? <a href="/login">Login</a></p>
      </form>
      <img src="https://img.freepik.com/free-vector/reset-password-concept-illustration_114360-7966.jpg?w=360" alt="Login illustration" />
      </div>
    </div>
  );
};

export default NewPassword;
